import { Category, PostStatus } from "@prisma/client";

export interface PostAttachment {
  id: string;
  url: string;
  publicId: string;
  fileType: string;
  fileName: string | null;
  sizeBytes: number | null;
}

export interface PostListItem {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: Category | string;
  state: string;
  status: PostStatus | string;
  lastDate: Date | string | null;
  publishedAt: Date | string | null;
}

export interface AdminPostListItem extends PostListItem {
  createdAt: Date | string;
  createdBy: {
    name: string;
    role?: string;
  };
}

export interface PostDetailItem extends PostListItem {
  content: string;
  officialUrl: string | null;
  archivedAt: Date | string | null;
  attachments: PostAttachment[];
}

