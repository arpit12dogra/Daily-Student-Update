using DailyStudentUpdates.API.Data;
using DailyStudentUpdates.API.DTOs;
using DailyStudentUpdates.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DailyStudentUpdates.API.Services
{
    public class MediaService
    {
        private readonly AppDbContext _db;
        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _config;

        public MediaService(AppDbContext db, IWebHostEnvironment env, IConfiguration config)
        {
            _db = db;
            _env = env;
            _config = config;
        }

        public async Task<PaginatedResponse<MediaFileDto>> GetAllAsync(int page, int limit)
        {
            var query = _db.MediaFiles.OrderByDescending(f => f.CreatedAt);
            var total = await query.CountAsync();
            var items = await query
                .Skip((page - 1) * limit)
                .Take(limit)
                .Select(f => MapToDto(f))
                .ToListAsync();

            return new PaginatedResponse<MediaFileDto>
            {
                Data = items,
                Pagination = new PaginationInfo
                {
                    Page = page, Limit = limit, Total = total,
                    TotalPages = (int)Math.Ceiling((double)total / limit),
                    HasNext = page * limit < total, HasPrev = page > 1
                }
            };
        }

        public async Task<UploadResponseDto> UploadImageAsync(IFormFile file, int adminId)
        {
            ValidateImage(file);

            var uploadsPath = Path.Combine(_env.WebRootPath ?? "wwwroot", "uploads", "images");
            Directory.CreateDirectory(uploadsPath);

            var ext = Path.GetExtension(file.FileName).ToLower();
            var fileName = $"{Guid.NewGuid()}{ext}";
            var filePath = Path.Combine(uploadsPath, fileName);

            using var stream = new FileStream(filePath, FileMode.Create);
            await file.CopyToAsync(stream);

            var baseUrl = _config["App:BaseUrl"] ?? "http://localhost:5000";
            var url = $"{baseUrl}/uploads/images/{fileName}";

            var media = new MediaFile
            {
                FileName = fileName,
                OriginalName = file.FileName,
                MimeType = file.ContentType,
                Size = file.Length,
                Url = url,
                FileType = "image",
                UploadedBy = adminId
            };

            _db.MediaFiles.Add(media);
            await _db.SaveChangesAsync();

            return new UploadResponseDto { Success = true, File = MapToDto(media), Url = url, Message = "Image uploaded successfully" };
        }

        public async Task<UploadResponseDto> UploadPdfAsync(IFormFile file, int adminId)
        {
            ValidatePdf(file);

            var uploadsPath = Path.Combine(_env.WebRootPath ?? "wwwroot", "uploads", "pdfs");
            Directory.CreateDirectory(uploadsPath);

            var fileName = $"{Guid.NewGuid()}.pdf";
            var filePath = Path.Combine(uploadsPath, fileName);

            using var stream = new FileStream(filePath, FileMode.Create);
            await file.CopyToAsync(stream);

            var baseUrl = _config["App:BaseUrl"] ?? "http://localhost:5000";
            var url = $"{baseUrl}/uploads/pdfs/{fileName}";

            var media = new MediaFile
            {
                FileName = fileName,
                OriginalName = file.FileName,
                MimeType = file.ContentType,
                Size = file.Length,
                Url = url,
                FileType = "pdf",
                UploadedBy = adminId
            };

            _db.MediaFiles.Add(media);
            await _db.SaveChangesAsync();

            return new UploadResponseDto { Success = true, File = MapToDto(media), Url = url, Message = "PDF uploaded successfully" };
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var file = await _db.MediaFiles.FindAsync(id);
            if (file == null) return false;

            // Delete physical file
            var uploadsFolder = file.FileType == "pdf" ? "pdfs" : "images";
            var filePath = Path.Combine(_env.WebRootPath ?? "wwwroot", "uploads", uploadsFolder, file.FileName);
            if (File.Exists(filePath)) File.Delete(filePath);

            _db.MediaFiles.Remove(file);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<MediaFileDto?> GetByIdAsync(int id)
        {
            var f = await _db.MediaFiles.FindAsync(id);
            return f == null ? null : MapToDto(f);
        }

        private static void ValidateImage(IFormFile file)
        {
            var allowed = new[] { ".jpg", ".jpeg", ".png", ".webp", ".gif" };
            var ext = Path.GetExtension(file.FileName).ToLower();
            if (!allowed.Contains(ext))
                throw new ArgumentException("Only JPG, PNG, WebP, and GIF images are allowed.");
            if (file.Length > 5 * 1024 * 1024)
                throw new ArgumentException("Image must be less than 5MB.");
        }

        private static void ValidatePdf(IFormFile file)
        {
            var ext = Path.GetExtension(file.FileName).ToLower();
            if (ext != ".pdf")
                throw new ArgumentException("Only PDF files are allowed.");
            if (file.Length > 20 * 1024 * 1024)
                throw new ArgumentException("PDF must be less than 20MB.");
        }

        private static MediaFileDto MapToDto(MediaFile f) => new()
        {
            Id = f.Id,
            FileName = f.FileName,
            OriginalName = f.OriginalName,
            MimeType = f.MimeType,
            Size = f.Size,
            Url = f.Url,
            ThumbnailUrl = f.ThumbnailUrl,
            FileType = f.FileType,
            CreatedAt = f.CreatedAt
        };
    }
}
