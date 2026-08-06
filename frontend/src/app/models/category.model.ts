export interface Category {
  _id: string;
  name: string;
  slug: string;
  color: string;
  icon: string;
  description?: string;
  newsCount?: number;
  isActive: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface CreateCategoryDto {
  name: string;
  slug?: string;
  color: string;
  icon: string;
  description?: string;
  isActive: boolean;
}

export interface UpdateCategoryDto extends Partial<CreateCategoryDto> {}
