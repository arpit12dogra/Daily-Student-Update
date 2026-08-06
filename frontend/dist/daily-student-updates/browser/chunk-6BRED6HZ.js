import {
  environment
} from "./chunk-QZFXO2SC.js";
import {
  HttpClient,
  HttpParams,
  HttpRequest,
  inject,
  ɵɵdefineInjectable
} from "./chunk-QCDNTCDG.js";

// src/app/services/media.service.ts
var MediaService = class _MediaService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = `${environment.apiUrl}/media`;
  }
  getAll(page = 1, limit = 20) {
    const params = new HttpParams().set("page", page.toString()).set("limit", limit.toString());
    return this.http.get(this.apiUrl, { params });
  }
  uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file);
    const req = new HttpRequest("POST", `${this.apiUrl}/upload/image`, formData, {
      reportProgress: true
    });
    return this.http.request(req);
  }
  uploadPdf(file) {
    const formData = new FormData();
    formData.append("pdf", file);
    const req = new HttpRequest("POST", `${this.apiUrl}/upload/pdf`, formData, {
      reportProgress: true
    });
    return this.http.request(req);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  static {
    this.\u0275fac = function MediaService_Factory(t) {
      return new (t || _MediaService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MediaService, factory: _MediaService.\u0275fac, providedIn: "root" });
  }
};

export {
  MediaService
};
//# sourceMappingURL=chunk-6BRED6HZ.js.map
