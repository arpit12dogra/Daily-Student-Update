import {
  environment
} from "./chunk-QZFXO2SC.js";
import {
  Router
} from "./chunk-J3LJ2RQZ.js";
import {
  HttpClient,
  computed,
  inject,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-QCDNTCDG.js";

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.router = inject(Router);
    this.apiUrl = `${environment.apiUrl}/auth`;
    this.TOKEN_KEY = "dsu_token";
    this.ADMIN_KEY = "dsu_admin";
    this._currentAdmin = signal(this.getStoredAdmin());
    this._isAuthenticated = signal(this.hasValidToken());
    this.currentAdmin = this._currentAdmin.asReadonly();
    this.isAuthenticated = this._isAuthenticated.asReadonly();
    this.isAdmin = computed(() => this._currentAdmin()?.role === "admin" || this._currentAdmin()?.role === "super-admin");
  }
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(tap((response) => {
      this.setToken(response.token);
      this.setAdmin(response.admin);
      this._currentAdmin.set(response.admin);
      this._isAuthenticated.set(true);
    }));
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ADMIN_KEY);
    this._currentAdmin.set(null);
    this._isAuthenticated.set(false);
    this.router.navigate(["/admin/login"]);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  setAdmin(admin) {
    localStorage.setItem(this.ADMIN_KEY, JSON.stringify(admin));
  }
  getStoredAdmin() {
    const stored = localStorage.getItem(this.ADMIN_KEY);
    return stored ? JSON.parse(stored) : null;
  }
  hasValidToken() {
    const token = this.getToken();
    if (!token)
      return false;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expiry = payload.exp * 1e3;
      return Date.now() < expiry;
    } catch {
      return false;
    }
  }
  refreshProfile() {
    return this.http.get(`${this.apiUrl}/profile`).pipe(tap((res) => {
      if (res.success) {
        this._currentAdmin.set(res.data);
        this.setAdmin(res.data);
      }
    }));
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-JVQKKENA.js.map
