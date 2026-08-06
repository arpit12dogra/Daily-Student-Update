import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Admin, LoginDto, LoginResponse } from '../models/admin.model';
import { ApiResponse } from '../models/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private apiUrl = `${environment.apiUrl}/auth`;
  private readonly TOKEN_KEY = 'dsu_token';
  private readonly ADMIN_KEY = 'dsu_admin';

  private _currentAdmin = signal<Admin | null>(this.getStoredAdmin());
  private _isAuthenticated = signal<boolean>(this.hasValidToken());

  readonly currentAdmin = this._currentAdmin.asReadonly();
  readonly isAuthenticated = this._isAuthenticated.asReadonly();
  readonly isAdmin = computed(() => this._currentAdmin()?.role === 'admin' || this._currentAdmin()?.role === 'super-admin');

  login(credentials: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        this.setToken(response.token);
        this.setAdmin(response.admin);
        this._currentAdmin.set(response.admin);
        this._isAuthenticated.set(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ADMIN_KEY);
    this._currentAdmin.set(null);
    this._isAuthenticated.set(false);
    this.router.navigate(['/admin/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private setAdmin(admin: Admin): void {
    localStorage.setItem(this.ADMIN_KEY, JSON.stringify(admin));
  }

  private getStoredAdmin(): Admin | null {
    const stored = localStorage.getItem(this.ADMIN_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  private hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000;
      return Date.now() < expiry;
    } catch {
      return false;
    }
  }

  refreshProfile(): Observable<ApiResponse<Admin>> {
    return this.http.get<ApiResponse<Admin>>(`${this.apiUrl}/profile`).pipe(
      tap((res) => {
        if (res.success) {
          this._currentAdmin.set(res.data);
          this.setAdmin(res.data);
        }
      })
    );
  }
}
