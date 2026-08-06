import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MediaFile, UploadResponse, ApiResponse, PaginatedResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/media`;

  getAll(page: number = 1, limit: number = 20): Observable<PaginatedResponse<MediaFile>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<PaginatedResponse<MediaFile>>(this.apiUrl, { params });
  }

  uploadImage(file: File): Observable<HttpEvent<UploadResponse>> {
    const formData = new FormData();
    formData.append('image', file);
    const req = new HttpRequest('POST', `${this.apiUrl}/upload/image`, formData, {
      reportProgress: true
    });
    return this.http.request<UploadResponse>(req);
  }

  uploadPdf(file: File): Observable<HttpEvent<UploadResponse>> {
    const formData = new FormData();
    formData.append('pdf', file);
    const req = new HttpRequest('POST', `${this.apiUrl}/upload/pdf`, formData, {
      reportProgress: true
    });
    return this.http.request<UploadResponse>(req);
  }

  delete(id: string): Observable<ApiResponse<null>> {
    return this.http.delete<ApiResponse<null>>(`${this.apiUrl}/${id}`);
  }

  getById(id: string): Observable<ApiResponse<MediaFile>> {
    return this.http.get<ApiResponse<MediaFile>>(`${this.apiUrl}/${id}`);
  }
}
