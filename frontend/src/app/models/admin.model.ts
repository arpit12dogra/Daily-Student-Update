export interface Admin {
  _id: string;
  username: string;
  email: string;
  role: 'admin' | 'super-admin' | 'editor';
  avatar?: string;
  lastLogin?: Date | string;
  createdAt?: Date | string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  admin: Admin;
  expiresIn: number;
}

export interface DashboardStats {
  totalNews: number;
  todaysNews: number;
  totalCategories: number;
  totalViews: number;
  publishedNews: number;
  featuredNews: number;
  recentActivity: RecentActivity[];
}

export interface RecentActivity {
  _id: string;
  action: string;
  description: string;
  timestamp: Date | string;
  admin: string;
  entityType: 'news' | 'category' | 'media';
  entityId: string;
}
