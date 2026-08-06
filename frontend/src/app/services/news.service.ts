import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { News, CreateNewsDto, UpdateNewsDto, NewsFilter } from '../models/news.model';
import { ApiResponse, PaginatedResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/news`;

  getAll(filter: NewsFilter = {}): Observable<PaginatedResponse<News>> {
    let params = new HttpParams();
    if (filter.category) params = params.set('category', filter.category);
    if (filter.search) params = params.set('search', filter.search);
    if (filter.page) params = params.set('page', filter.page.toString());
    if (filter.limit) params = params.set('limit', filter.limit.toString());
    if (filter.sortBy) params = params.set('sortBy', filter.sortBy);
    if (filter.sortOrder) params = params.set('sortOrder', filter.sortOrder);

    return this.http.get<PaginatedResponse<News>>(this.apiUrl, { params });
  }

  getPublished(filter: NewsFilter = {}): Observable<PaginatedResponse<News>> {
    let params = new HttpParams();
    params = params.set('isPublished', 'true');
    if (filter.category) params = params.set('category', filter.category);
    if (filter.search) params = params.set('search', filter.search);
    if (filter.page) params = params.set('page', (filter.page || 1).toString());
    if (filter.limit) params = params.set('limit', (filter.limit || 10).toString());

    return this.http.get<PaginatedResponse<News>>(`${this.apiUrl}/published`, { params });
  }

  getFeatured(): Observable<ApiResponse<News[]>> {
    return this.http.get<ApiResponse<News[]>>(`${this.apiUrl}/featured`);
  }

  getLatest(limit: number = 6): Observable<ApiResponse<News[]>> {
    const params = new HttpParams().set('limit', limit.toString());
    return this.http.get<ApiResponse<News[]>>(`${this.apiUrl}/latest`, { params });
  }

  getById(id: string): Observable<ApiResponse<News>> {
    return this.http.get<ApiResponse<News>>(`${this.apiUrl}/${id}`);
  }

  getByCategory(categorySlug: string, page: number = 1): Observable<PaginatedResponse<News>> {
    const params = new HttpParams().set('page', page.toString());
    return this.http.get<PaginatedResponse<News>>(`${this.apiUrl}/category/${categorySlug}`, { params });
  }

  create(news: CreateNewsDto): Observable<ApiResponse<News>> {
    return this.http.post<ApiResponse<News>>(this.apiUrl, news);
  }

  update(id: string, news: UpdateNewsDto): Observable<ApiResponse<News>> {
    return this.http.put<ApiResponse<News>>(`${this.apiUrl}/${id}`, news);
  }

  delete(id: string): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.apiUrl}/${id}`);
  }

  togglePublish(id: string): Observable<ApiResponse<News>> {
    return this.http.patch<ApiResponse<News>>(`${this.apiUrl}/${id}/toggle-publish`, {});
  }

  toggleFeatured(id: string): Observable<ApiResponse<News>> {
    return this.http.patch<ApiResponse<News>>(`${this.apiUrl}/${id}/toggle-featured`, {});
  }

  incrementView(id: string): Observable<ApiResponse<null>> {
    return this.http.patch<ApiResponse<null>>(`${this.apiUrl}/${id}/view`, {});
  }

  getStats(): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.apiUrl}/stats`);
  }
}
