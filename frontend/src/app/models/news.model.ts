export interface News {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string | Category;
  categoryId: string;
  author: string;
  imageUrl?: string;
  pdfUrl?: string;
  tags: string[];
  isPublished: boolean;
  isFeatured: boolean;
  viewCount: number;
  publishedAt: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  color: string;
  icon: string;
  description?: string;
  newsCount?: number;
  createdAt?: Date | string;
}

export interface CreateNewsDto {
  title: string;
  content: string;
  excerpt: string;
  categoryId: string;
  author: string;
  imageUrl?: string;
  pdfUrl?: string;
  tags: string[];
  isPublished: boolean;
  isFeatured: boolean;
}

export interface UpdateNewsDto extends Partial<CreateNewsDto> {}

export interface NewsFilter {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
