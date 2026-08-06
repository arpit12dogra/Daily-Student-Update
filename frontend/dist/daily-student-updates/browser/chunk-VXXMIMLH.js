import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-OJNK56H5.js";
import {
  MatChipsModule
} from "./chunk-SAJLAUWG.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule
} from "./chunk-CVZXVVR7.js";
import {
  MatAnchor,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-J3LJ2RQZ.js";
import {
  CommonModule,
  EventEmitter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QCDNTCDG.js";

// src/app/shared/components/news-card/news-card.component.ts
var _c0 = (a0) => ["/news", a0];
function NewsCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4)(1, "mat-icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Featured ");
    \u0275\u0275elementEnd();
  }
}
function NewsCardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.excerptText);
  }
}
function NewsCardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "mat-icon");
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " PDF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("href", ctx_r0.news.pdfUrl, \u0275\u0275sanitizeUrl);
  }
}
var NewsCardComponent = class _NewsCardComponent {
  constructor() {
    this.compact = false;
    this.shareClicked = new EventEmitter();
  }
  get categoryName() {
    if (!this.news.category)
      return "General";
    if (typeof this.news.category === "string")
      return this.news.category;
    return this.news.category.name ?? "General";
  }
  get categoryColor() {
    if (!this.news.category)
      return "#1976d2";
    if (typeof this.news.category === "object") {
      return this.news.category.color ?? "#1976d2";
    }
    return "#1976d2";
  }
  get formattedDate() {
    if (!this.news.publishedAt)
      return "";
    const date = new Date(this.news.publishedAt);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  get imageUrl() {
    return this.news.imageUrl || "assets/images/news-placeholder.jpg";
  }
  get excerptText() {
    if (this.news.excerpt)
      return this.news.excerpt;
    const text = this.news.content?.replace(/<[^>]*>/g, "") || "";
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  }
  onShare(event) {
    event.preventDefault();
    event.stopPropagation();
    this.shareClicked.emit(this.news);
    if (navigator.share) {
      navigator.share({
        title: this.news.title,
        url: `${window.location.origin}/news/${this.news._id}`
      });
    }
  }
  static {
    this.\u0275fac = function NewsCardComponent_Factory(t) {
      return new (t || _NewsCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsCardComponent, selectors: [["app-news-card"]], inputs: { news: "news", compact: "compact" }, outputs: { shareClicked: "shareClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 20, consts: [[1, "news-card", "card-hover"], [1, "card-image-wrapper"], ["loading", "lazy", 1, "card-image", 3, "error", "src", "alt"], [1, "category-badge"], [1, "featured-badge"], [1, "card-content"], [1, "card-meta"], [1, "meta-date"], [1, "meta-views"], [1, "card-title"], [3, "routerLink"], [1, "card-excerpt"], [1, "card-author"], [1, "card-actions"], ["mat-button", "", "color", "primary", 1, "action-btn", "read-more", 3, "routerLink"], ["target", "_blank", "rel", "noopener noreferrer", "mat-button", "", "color", "accent", 1, "action-btn", 3, "href"], ["mat-icon-button", "", "matTooltip", "Share", 1, "share-btn", 3, "click"]], template: function NewsCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card", 0)(1, "div", 1)(2, "img", 2);
        \u0275\u0275listener("error", function NewsCardComponent_Template_img_error_2_listener($event) {
          return $event.target.src = "assets/images/news-placeholder.jpg";
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, NewsCardComponent_Conditional_5_Template, 4, 0, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-card-content", 5)(7, "div", 6)(8, "span", 7)(9, "mat-icon");
        \u0275\u0275text(10, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 8)(13, "mat-icon");
        \u0275\u0275text(14, "visibility");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "h3", 9)(17, "a", 10);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(19, NewsCardComponent_Conditional_19_Template, 2, 1, "p", 11);
        \u0275\u0275elementStart(20, "div", 12)(21, "mat-icon");
        \u0275\u0275text(22, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "mat-card-actions", 13)(26, "a", 14)(27, "mat-icon");
        \u0275\u0275text(28, "open_in_new");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " Read More ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(30, NewsCardComponent_Conditional_30_Template, 4, 1, "a", 15);
        \u0275\u0275elementStart(31, "button", 16);
        \u0275\u0275listener("click", function NewsCardComponent_Template_button_click_31_listener($event) {
          return ctx.onShare($event);
        });
        \u0275\u0275elementStart(32, "mat-icon");
        \u0275\u0275text(33, "share");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("compact", ctx.compact);
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx.news.title);
        \u0275\u0275advance();
        \u0275\u0275styleProp("background-color", ctx.categoryColor);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.categoryName, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.news.isFeatured ? 5 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.formattedDate, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.news.viewCount || 0, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, ctx.news._id));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.news.title);
        \u0275\u0275advance();
        \u0275\u0275conditional(19, !ctx.compact ? 19 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.news.author || "Editorial Team");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, ctx.news._id));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(30, ctx.news.pdfUrl ? 30 : -1);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      MatCardModule,
      MatCard,
      MatCardActions,
      MatCardContent,
      MatButtonModule,
      MatAnchor,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatChipsModule,
      MatTooltipModule,
      MatTooltip
    ], styles: ['\n\n.news-card[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border: 1px solid #f0f0f0;\n}\n.news-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12) !important;\n}\n.news-card.compact[_ngcontent-%COMP%]   .card-excerpt[_ngcontent-%COMP%] {\n  display: none;\n}\n.news-card.compact[_ngcontent-%COMP%]   .card-image-wrapper[_ngcontent-%COMP%] {\n  height: 160px;\n}\n.card-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 200px;\n  background: #f5f5f5;\n}\n.card-image-wrapper[_ngcontent-%COMP%]   .card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n.card-image-wrapper[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.category-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  color: white;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.featured-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #ff4081;\n  color: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.featured-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px !important;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 10px;\n}\n.card-meta[_ngcontent-%COMP%]   .meta-date[_ngcontent-%COMP%], .card-meta[_ngcontent-%COMP%]   .meta-views[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.card-meta[_ngcontent-%COMP%]   .meta-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .card-meta[_ngcontent-%COMP%]   .meta-views[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.4;\n  margin-bottom: 10px;\n  font-family: "Poppins", sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #212121;\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n}\n.card-excerpt[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #757575;\n  line-height: 1.6;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.card-author[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  padding: 8px 12px 12px !important;\n  display: flex;\n  align-items: center;\n  border-top: 1px solid #f5f5f5;\n}\n.card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 4px 8px;\n  min-width: auto;\n}\n.card-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 4px;\n}\n.card-actions[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #9e9e9e;\n}\n.card-actions[_ngcontent-%COMP%]   .share-btn[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n}\n/*# sourceMappingURL=news-card.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsCardComponent, { className: "NewsCardComponent", filePath: "src\\app\\shared\\components\\news-card\\news-card.component.ts", lineNumber: 26 });
})();

export {
  NewsCardComponent
};
//# sourceMappingURL=chunk-VXXMIMLH.js.map
