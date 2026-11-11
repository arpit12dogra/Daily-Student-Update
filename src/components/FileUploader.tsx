"use client";

import { useState } from "react";
import { Upload, X, FileText, Image as ImageIcon, Loader2 } from "lucide-react";
import { PostAttachment } from "@/types/post";

interface FileUploaderProps {
  attachments: PostAttachment[];
  onChange: (attachments: PostAttachment[]) => void;
  maxFiles?: number;
}

export default function FileUploader({
  attachments,
  onChange,
  maxFiles = 5,
}: FileUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (attachments.length + files.length > maxFiles) {
      setError(`You can upload at most ${maxFiles} attachments.`);
      return;
    }

    setUploading(true);

    try {
      const newAttachments: PostAttachment[] = [...attachments];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const isPdf = file.type === "application/pdf";
        const isImage = file.type.startsWith("image/");

        if (!isPdf && !isImage) {
          setError(`"${file.name}" has an unsupported format. Only PDF, JPG, PNG, and WebP are allowed.`);
          continue;
        }

        // Size checks: images <= 2MB, PDFs <= 5MB
        const maxBytes = isPdf ? 5 * 1024 * 1024 : 2 * 1024 * 1024;
        if (file.size > maxBytes) {
          setError(`"${file.name}" is too large. Max size: ${isPdf ? "5 MB for PDFs" : "2 MB for images"}.`);
          continue;
        }

        // 1. Request signature from /api/admin/upload/sign
        const signRes = await fetch("/api/admin/upload/sign", { method: "POST" });
        const signData = await signRes.json();

        if (signData.success) {
          // Upload directly to Cloudinary
          const { signature, timestamp, cloudName, apiKey, folder } = signData.data;
          const formData = new FormData();
          formData.append("file", file);
          formData.append("api_key", apiKey);
          formData.append("timestamp", timestamp.toString());
          formData.append("signature", signature);
          formData.append("folder", folder);

          const cloudRes = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/${isPdf ? "raw" : "image"}/upload`,
            { method: "POST", body: formData }
          );

          const cloudResult = await cloudRes.json();

          if (cloudResult.secure_url) {
            newAttachments.push({
              id: cloudResult.asset_id || Math.random().toString(),
              url: cloudResult.secure_url,
              publicId: cloudResult.public_id,
              fileType: isPdf ? "pdf" : "image",
              fileName: file.name,
              sizeBytes: file.size,
            });
          } else {
            setError(`Upload to Cloudinary failed: ${cloudResult.error?.message || "Unknown error"}`);
          }
        } else {
          setError(
            signData.error ||
              "Cloudinary is not configured. Add CLOUDINARY_* keys to .env.local to enable live file uploads."
          );
        }
      }

      onChange(newAttachments);
    } catch (err: unknown) {
      console.error("File upload error:", err);
      setError("An error occurred during file upload.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const handleRemove = (publicId: string) => {
    onChange(attachments.filter((a) => a.publicId !== publicId));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold text-slate-700">
          Official Documents & Images ({attachments.length}/{maxFiles})
        </label>
        <span className="text-[10px] text-slate-400">PDFs up to 5MB, Images up to 2MB</span>
      </div>

      {error && (
        <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
          {error}
        </div>
      )}

      {/* Upload Drop Area */}
      {attachments.length < maxFiles && (
        <label className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl p-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-slate-50 hover:bg-blue-50/30 transition group">
          <input
            type="file"
            multiple
            accept=".pdf,image/png,image/jpeg,image/webp"
            disabled={uploading}
            onChange={handleFileChange}
            className="hidden"
          />
          {uploading ? (
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600">
              <Loader2 className="w-4 h-4 animate-spin" /> Uploading attachment...
            </div>
          ) : (
            <>
              <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-500 group-hover:text-blue-600">
                <Upload className="w-4 h-4" />
              </div>
              <p className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">
                Click to attach PDF notices or screenshots
              </p>
              <p className="text-[10px] text-slate-400">PDF, JPG, PNG or WebP</p>
            </>
          )}
        </label>
      )}

      {/* Uploaded Files List */}
      {attachments.length > 0 && (
        <div className="space-y-2">
          {attachments.map((att) => (
            <div
              key={att.publicId}
              className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-white shadow-sm text-xs"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  {att.fileType === "pdf" ? (
                    <FileText className="w-4 h-4" />
                  ) : (
                    <ImageIcon className="w-4 h-4" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-800 truncate">{att.fileName || att.url}</p>
                  <p className="text-[10px] text-slate-400 uppercase">
                    {att.fileType} {att.sizeBytes ? `• ${(att.sizeBytes / 1024).toFixed(0)} KB` : ""}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRemove(att.publicId)}
                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                title="Remove attachment"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
