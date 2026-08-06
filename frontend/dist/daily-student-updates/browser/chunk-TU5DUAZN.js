import {
  NewsService
} from "./chunk-L3GR2ZU5.js";
import {
  MatChipsModule
} from "./chunk-SAJLAUWG.js";
import "./chunk-6WWO32JI.js";
import "./chunk-GTVDZ5MJ.js";
import "./chunk-QZFXO2SC.js";
import "./chunk-MD6GV2ZI.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-DD47GPG5.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-CVZXVVR7.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-J3LJ2RQZ.js";
import {
  CommonModule,
  DatePipe,
  SlicePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QCDNTCDG.js";

// src/app/pages/public/news-detail/news-detail.component.ts
var _c0 = () => ["/news"];
var _c1 = (a0) => ({ search: a0 });
function NewsDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "div", 2)(3, "div", 3);
    \u0275\u0275elementEnd()();
  }
}
function NewsDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 1)(2, "mat-icon");
    \u0275\u0275text(3, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 5);
    \u0275\u0275text(7, "Back to News");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function NewsDetailComponent_Conditional_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17)(1, "mat-icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Featured ");
    \u0275\u0275elementEnd();
  }
}
function NewsDetailComponent_Conditional_2_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "img", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.news.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.news.title);
  }
}
function NewsDetailComponent_Conditional_2_Conditional_46_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0))("queryParams", \u0275\u0275pureFunction1(4, _c1, tag_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" #", tag_r3, " ");
  }
}
function NewsDetailComponent_Conditional_2_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 34)(2, "mat-icon");
    \u0275\u0275text(3, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Tags:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275repeaterCreate(6, NewsDetailComponent_Conditional_2_Conditional_46_For_7_Template, 2, 6, "a", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r0.news.tags);
  }
}
function NewsDetailComponent_Conditional_2_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26)(1, "mat-icon");
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Download PDF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r0.news.pdfUrl, \u0275\u0275sanitizeUrl);
  }
}
function NewsDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 1)(2, "nav", 7)(3, "ol", 8)(4, "li")(5, "a", 9);
    \u0275\u0275text(6, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li")(8, "mat-icon");
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "li")(11, "a", 10);
    \u0275\u0275text(12, "News");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "li")(14, "mat-icon");
    \u0275\u0275text(15, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li", 11);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "slice");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(19, "div", 12)(20, "div", 1)(21, "div", 13);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h1", 14);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15)(26, "span", 16)(27, "mat-icon");
    \u0275\u0275text(28, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 16)(31, "mat-icon");
    \u0275\u0275text(32, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 16)(36, "mat-icon");
    \u0275\u0275text(37, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, NewsDetailComponent_Conditional_2_Conditional_39_Template, 4, 0, "span", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 18)(41, "div", 1)(42, "div", 19)(43, "div", 20);
    \u0275\u0275template(44, NewsDetailComponent_Conditional_2_Conditional_44_Template, 2, 2, "div", 21);
    \u0275\u0275element(45, "div", 22);
    \u0275\u0275template(46, NewsDetailComponent_Conditional_2_Conditional_46_Template, 8, 0, "div", 23);
    \u0275\u0275element(47, "mat-divider", 24);
    \u0275\u0275elementStart(48, "div", 25);
    \u0275\u0275template(49, NewsDetailComponent_Conditional_2_Conditional_49_Template, 4, 1, "a", 26);
    \u0275\u0275elementStart(50, "button", 27);
    \u0275\u0275listener("click", function NewsDetailComponent_Conditional_2_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.share());
    });
    \u0275\u0275elementStart(51, "mat-icon");
    \u0275\u0275text(52, "share");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Share Article ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "a", 28)(55, "mat-icon");
    \u0275\u0275text(56, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " Back to News ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 29)(59, "div", 30)(60, "mat-card", 31)(61, "mat-card-header")(62, "mat-card-title");
    \u0275\u0275text(63, "Article Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "mat-card-content")(65, "div", 32)(66, "mat-icon");
    \u0275\u0275text(67, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div")(69, "small");
    \u0275\u0275text(70, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "strong");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 32)(74, "mat-icon");
    \u0275\u0275text(75, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div")(77, "small");
    \u0275\u0275text(78, "Author");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "strong");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 32)(82, "mat-icon");
    \u0275\u0275text(83, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div")(85, "small");
    \u0275\u0275text(86, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "strong");
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(90, "div", 32)(91, "mat-icon");
    \u0275\u0275text(92, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div")(94, "small");
    \u0275\u0275text(95, "Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "strong");
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(18, 19, ctx_r0.news.title, 0, 40), "...");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", "linear-gradient(135deg," + ctx_r0.categoryColor + "dd, " + ctx_r0.categoryColor + "aa)");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.categoryColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.news.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.news.author || "Editorial Team", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 23, ctx_r0.news.publishedAt, "MMMM d, y"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.news.viewCount || 0, " views ");
    \u0275\u0275advance();
    \u0275\u0275conditional(39, ctx_r0.news.isFeatured ? 39 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(44, ctx_r0.news.imageUrl ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.news.content, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional(46, (ctx_r0.news.tags == null ? null : ctx_r0.news.tags.length) ? 46 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(49, ctx_r0.news.pdfUrl ? 49 : -1);
    \u0275\u0275advance(23);
    \u0275\u0275textInterpolate(ctx_r0.categoryName);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.news.author || "Editorial Team");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 26, ctx_r0.news.publishedAt, "MMM d, y"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.news.viewCount || 0);
  }
}
var NewsDetailComponent = class _NewsDetailComponent {
  constructor() {
    this.newsService = inject(NewsService);
    this.route = inject(ActivatedRoute);
    this.news = null;
    this.relatedNews = [];
    this.isLoading = true;
    this.error = "";
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.loadNews(params["id"]);
    });
  }
  loadNews(id) {
    this.isLoading = true;
    this.newsService.getById(id).subscribe({
      next: (res) => {
        if (res.success) {
          this.news = res.data;
          this.newsService.incrementView(id).subscribe();
        }
        this.isLoading = false;
      },
      error: () => {
        this.error = "Failed to load news article";
        this.isLoading = false;
      }
    });
  }
  get categoryName() {
    if (!this.news?.category)
      return "General";
    if (typeof this.news.category === "string")
      return this.news.category;
    return this.news.category.name ?? "General";
  }
  get categoryColor() {
    if (!this.news?.category)
      return "#1976d2";
    if (typeof this.news.category === "object") {
      return this.news.category.color ?? "#1976d2";
    }
    return "#1976d2";
  }
  share() {
    if (navigator.share && this.news) {
      navigator.share({
        title: this.news.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }
  static {
    this.\u0275fac = function NewsDetailComponent_Factory(t) {
      return new (t || _NewsDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsDetailComponent, selectors: [["app-news-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "loading-state"], [1, "container"], [1, "skeleton-header"], [1, "skeleton-content"], [1, "error-state"], ["routerLink", "/news", "mat-raised-button", "", "color", "primary"], [1, "breadcrumb-bar"], ["aria-label", "breadcrumb"], [1, "breadcrumb-list"], ["routerLink", "/"], ["routerLink", "/news"], [1, "active"], [1, "article-header"], [1, "category-tag"], [1, "article-title"], [1, "article-meta"], [1, "meta-item"], [1, "featured-tag"], [1, "article-body"], [1, "row"], [1, "col-lg-8"], [1, "article-image-wrap"], [1, "article-content", 3, "innerHTML"], [1, "article-tags"], [1, "my-4"], [1, "article-actions"], ["target", "_blank", "rel", "noopener noreferrer", "mat-raised-button", "", "color", "accent", 3, "href"], ["mat-stroked-button", "", 3, "click"], ["routerLink", "/news", "mat-button", ""], [1, "col-lg-4"], [1, "article-sidebar"], [1, "info-card"], [1, "info-row"], [1, "article-image", 3, "src", "alt"], [1, "tags-label"], [1, "tags-list"], [1, "tag-chip", 3, "routerLink", "queryParams"]], template: function NewsDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NewsDetailComponent_Conditional_0_Template, 4, 0, "div", 0)(1, NewsDetailComponent_Conditional_1_Template, 8, 1)(2, NewsDetailComponent_Conditional_2_Template, 98, 29);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.isLoading ? 0 : ctx.error ? 1 : ctx.news ? 2 : -1);
      }
    }, dependencies: [
      CommonModule,
      SlicePipe,
      DatePipe,
      RouterModule,
      RouterLink,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconModule,
      MatIcon,
      MatChipsModule,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCardHeader,
      MatCardTitle,
      MatDividerModule,
      MatDivider
    ], styles: ['\n\n.loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.loading-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #9e9e9e;\n  display: block;\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #616161;\n  margin-bottom: 24px;\n}\n.skeleton-header[_ngcontent-%COMP%] {\n  height: 200px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  margin-bottom: 24px;\n}\n.skeleton-content[_ngcontent-%COMP%] {\n  height: 400px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.breadcrumb-bar[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n.breadcrumb-bar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.breadcrumb-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin: 0;\n  padding: 0;\n  flex-wrap: wrap;\n}\n.breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1976d2;\n  text-decoration: none;\n}\n.breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.breadcrumb-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #757575;\n}\n.breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #bdbdbd;\n}\n.article-header[_ngcontent-%COMP%] {\n  padding: 50px 0 40px;\n  color: white;\n}\n.article-header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.category-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 16px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  color: white;\n  background: rgba(255, 255, 255, 0.3) !important;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n.article-title[_ngcontent-%COMP%] {\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 20px;\n  font-family: "Poppins", sans-serif;\n  max-width: 800px;\n}\n.article-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.article-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 14px;\n  opacity: 0.9;\n}\n.article-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.article-meta[_ngcontent-%COMP%]   .featured-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: #ff4081;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.article-meta[_ngcontent-%COMP%]   .featured-tag[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.article-body[_ngcontent-%COMP%] {\n  padding: 40px 0 60px;\n}\n.article-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.article-image-wrap[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 32px;\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);\n}\n.article-image-wrap[_ngcontent-%COMP%]   .article-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 500px;\n  object-fit: cover;\n}\n.article-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #424242;\n}\n.article-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.article-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 2rem 0 1rem;\n  color: #1a237e;\n}\n.article-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin: 1.5rem 0 0.75rem;\n  color: #1565c0;\n}\n.article-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: 8px;\n  margin: 1rem 0;\n}\n.article-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid #1976d2;\n  padding: 12px 20px;\n  margin: 1.5rem 0;\n  background: #e3f2fd;\n  border-radius: 0 8px 8px 0;\n  font-style: italic;\n}\n.article-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .article-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-left: 2rem;\n}\n.article-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.article-tags[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.article-tags[_ngcontent-%COMP%]   .tags-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-weight: 600;\n  font-size: 14px;\n  color: #616161;\n  white-space: nowrap;\n}\n.article-tags[_ngcontent-%COMP%]   .tags-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.article-tags[_ngcontent-%COMP%]   .tags-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.article-tags[_ngcontent-%COMP%]   .tag-chip[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 20px;\n  background: #e3f2fd;\n  color: #1976d2;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.article-tags[_ngcontent-%COMP%]   .tag-chip[_ngcontent-%COMP%]:hover {\n  background: #1976d2;\n  color: white;\n  text-decoration: none;\n}\n.article-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.article-sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 90px;\n}\n.info-card[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n  border: 1px solid #e0e0e0;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px 0;\n  border-bottom: 1px solid #f5f5f5;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n  flex-shrink: 0;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9e9e9e;\n  text-transform: uppercase;\n}\n.info-card[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=news-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsDetailComponent, { className: "NewsDetailComponent", filePath: "src\\app\\pages\\public\\news-detail\\news-detail.component.ts", lineNumber: 27 });
})();
export {
  NewsDetailComponent
};
//# sourceMappingURL=chunk-TU5DUAZN.js.map
