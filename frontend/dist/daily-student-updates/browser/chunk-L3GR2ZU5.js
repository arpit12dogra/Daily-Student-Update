import {
  environment
} from "./chunk-QZFXO2SC.js";
import {
  HttpClient,
  HttpParams,
  inject,
  ɵɵdefineInjectable
} from "./chunk-QCDNTCDG.js";

// src/app/services/news.service.ts
var NewsService = class _NewsService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = `${environment.apiUrl}/news`;
  }
  getAll(filter = {}) {
    let params = new HttpParams();
    if (filter.category)
      params = params.set("category", filter.category);
    if (filter.search)
      params = params.set("search", filter.search);
    if (filter.page)
      params = params.set("page", filter.page.toString());
    if (filter.limit)
      params = params.set("limit", filter.limit.toString());
    if (filter.sortBy)
      params = params.set("sortBy", filter.sortBy);
    if (filter.sortOrder)
      params = params.set("sortOrder", filter.sortOrder);
    return this.http.get(this.apiUrl, { params });
  }
  getPublished(filter = {}) {
    let params = new HttpParams();
    params = params.set("isPublished", "true");
    if (filter.category)
      params = params.set("category", filter.category);
    if (filter.search)
      params = params.set("search", filter.search);
    if (filter.page)
      params = params.set("page", (filter.page || 1).toString());
    if (filter.limit)
      params = params.set("limit", (filter.limit || 10).toString());
    return this.http.get(`${this.apiUrl}/published`, { params });
  }
  getFeatured() {
    return this.http.get(`${this.apiUrl}/featured`);
  }
  getLatest(limit = 6) {
    const params = new HttpParams().set("limit", limit.toString());
    return this.http.get(`${this.apiUrl}/latest`, { params });
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getByCategory(categorySlug, page = 1) {
    const params = new HttpParams().set("page", page.toString());
    return this.http.get(`${this.apiUrl}/category/${categorySlug}`, { params });
  }
  create(news) {
    return this.http.post(this.apiUrl, news);
  }
  update(id, news) {
    return this.http.put(`${this.apiUrl}/${id}`, news);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  togglePublish(id) {
    return this.http.patch(`${this.apiUrl}/${id}/toggle-publish`, {});
  }
  toggleFeatured(id) {
    return this.http.patch(`${this.apiUrl}/${id}/toggle-featured`, {});
  }
  incrementView(id) {
    return this.http.patch(`${this.apiUrl}/${id}/view`, {});
  }
  getStats() {
    return this.http.get(`${this.apiUrl}/stats`);
  }
  static {
    this.\u0275fac = function NewsService_Factory(t) {
      return new (t || _NewsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NewsService, factory: _NewsService.\u0275fac, providedIn: "root" });
  }
};

export {
  NewsService
};
//# sourceMappingURL=chunk-L3GR2ZU5.js.map
