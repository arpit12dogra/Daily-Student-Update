import {
  MediaService
} from "./chunk-6BRED6HZ.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-DEVWQ4KH.js";
import "./chunk-MWPM3UMD.js";
import "./chunk-QZFXO2SC.js";
import "./chunk-MD6GV2ZI.js";
import {
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  RouterModule
} from "./chunk-J3LJ2RQZ.js";
import {
  CommonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QCDNTCDG.js";

// src/app/pages/public/gallery/gallery.component.ts
var _forTrack0 = ($index, $item) => $item._id;
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function GalleryComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function GalleryComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, GalleryComponent_Conditional_10_For_2_Template, 2, 0, "div", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function GalleryComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_11_For_2_Template_div_click_0_listener() {
      const image_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openImage(image_r2));
    });
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "mat-icon");
    \u0275\u0275text(4, "zoom_in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r2.url, \u0275\u0275sanitizeUrl)("alt", image_r2.originalName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(image_r2.originalName);
  }
}
function GalleryComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, GalleryComponent_Conditional_11_For_2_Template, 7, 3, "div", 8, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.images);
  }
}
function GalleryComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon", 13);
    \u0275\u0275text(2, "photo_library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No photos available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Gallery will be updated soon");
    \u0275\u0275elementEnd()();
  }
}
function GalleryComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImage());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 16);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeImage());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateImage("prev"));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "img", 18);
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function GalleryComponent_Conditional_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateImage("next"));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx_r2.selectedImage.url, \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedImage.originalName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedImage.originalName);
  }
}
var GalleryComponent = class _GalleryComponent {
  constructor() {
    this.mediaService = inject(MediaService);
    this.dialog = inject(MatDialog);
    this.images = [];
    this.isLoading = true;
    this.currentPage = 1;
    this.selectedImage = null;
  }
  ngOnInit() {
    this.loadImages();
  }
  loadImages() {
    this.isLoading = true;
    this.mediaService.getAll(this.currentPage, 24).subscribe({
      next: (res) => {
        if (res.success) {
          this.images = res.data.filter((f) => f.mimetype?.startsWith("image/"));
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  openImage(image) {
    this.selectedImage = image;
  }
  closeImage() {
    this.selectedImage = null;
  }
  navigateImage(direction) {
    if (!this.selectedImage)
      return;
    const idx = this.images.indexOf(this.selectedImage);
    if (direction === "prev" && idx > 0) {
      this.selectedImage = this.images[idx - 1];
    } else if (direction === "next" && idx < this.images.length - 1) {
      this.selectedImage = this.images[idx + 1];
    }
  }
  static {
    this.\u0275fac = function GalleryComponent_Factory(t) {
      return new (t || _GalleryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["app-gallery"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 2, consts: [[1, "page-header"], [1, "container"], [1, "gallery-page"], [1, "row", "g-3"], [1, "lightbox"], [1, "col-lg-3", "col-md-4", "col-sm-6"], [1, "skeleton-img"], [1, "gallery-grid"], [1, "gallery-item"], [1, "gallery-item", 3, "click"], ["loading", "lazy", 3, "src", "alt"], [1, "gallery-overlay"], [1, "empty-state", "text-center", "py-5"], [2, "font-size", "80px", "opacity", "0.3", "display", "block", "margin", "0 auto 16px"], [1, "lightbox", 3, "click"], [1, "lightbox-content", 3, "click"], ["mat-icon-button", "", 1, "lightbox-close", 3, "click"], ["mat-icon-button", "", 1, "lightbox-prev", 3, "click"], [3, "src", "alt"], ["mat-icon-button", "", 1, "lightbox-next", 3, "click"], [1, "lightbox-caption"]], template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "mat-icon");
        \u0275\u0275text(4, "photo_library");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Photo Gallery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Browse photos from school events and activities");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 2)(9, "div", 1);
        \u0275\u0275template(10, GalleryComponent_Conditional_10_Template, 3, 1, "div", 3)(11, GalleryComponent_Conditional_11_Template, 3, 0)(12, GalleryComponent_Conditional_12_Template, 7, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, GalleryComponent_Conditional_13_Template, 14, 3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(10, ctx.isLoading ? 10 : ctx.images.length > 0 ? 11 : 12);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(13, ctx.selectedImage ? 13 : -1);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      MatButtonModule,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatDialogModule
    ], styles: ["\n\n.gallery-page[_ngcontent-%COMP%] {\n  padding: 40px 0 60px;\n}\n.gallery-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.gallery-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  aspect-ratio: 4/3;\n  background: #f5f5f5;\n}\n.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.gallery-item[_ngcontent-%COMP%]   .gallery-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(25, 118, 210, 0.7);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: white;\n}\n.gallery-item[_ngcontent-%COMP%]   .gallery-overlay[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.gallery-item[_ngcontent-%COMP%]   .gallery-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  padding: 0 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n.gallery-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.gallery-item[_ngcontent-%COMP%]:hover   .gallery-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.skeleton-img[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 90vw;\n  max-height: 90vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 85vw;\n  max-height: 85vh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50px;\n  right: 0;\n  color: white !important;\n}\n.lightbox-prev[_ngcontent-%COMP%], .lightbox-next[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white !important;\n  background: rgba(255, 255, 255, 0.1) !important;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.lightbox-prev[_ngcontent-%COMP%] {\n  left: -60px;\n}\n.lightbox-next[_ngcontent-%COMP%] {\n  right: -60px;\n}\n.lightbox-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -40px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 13px;\n}\n/*# sourceMappingURL=gallery.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src\\app\\pages\\public\\gallery\\gallery.component.ts", lineNumber: 23 });
})();
export {
  GalleryComponent
};
//# sourceMappingURL=chunk-E24KE2FE.js.map
