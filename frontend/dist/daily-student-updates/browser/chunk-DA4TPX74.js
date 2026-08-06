import {
  environment
} from "./chunk-QZFXO2SC.js";
import {
  HttpClient,
  inject,
  ɵɵdefineInjectable
} from "./chunk-QCDNTCDG.js";

// src/app/services/category.service.ts
var CategoryService = class _CategoryService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = `${environment.apiUrl}/categories`;
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  getActive() {
    return this.http.get(`${this.apiUrl}/active`);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getBySlug(slug) {
    return this.http.get(`${this.apiUrl}/slug/${slug}`);
  }
  create(category) {
    return this.http.post(this.apiUrl, category);
  }
  update(id, category) {
    return this.http.put(`${this.apiUrl}/${id}`, category);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  toggleActive(id) {
    return this.http.patch(`${this.apiUrl}/${id}/toggle`, {});
  }
  static {
    this.\u0275fac = function CategoryService_Factory(t) {
      return new (t || _CategoryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CategoryService, factory: _CategoryService.\u0275fac, providedIn: "root" });
  }
};

export {
  CategoryService
};
//# sourceMappingURL=chunk-DA4TPX74.js.map
