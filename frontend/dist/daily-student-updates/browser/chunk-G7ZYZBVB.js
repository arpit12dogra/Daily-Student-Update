import {
  PaginationComponent,
  SearchBarComponent
} from "./chunk-4WEUM3MV.js";
import "./chunk-OYLC2QR5.js";
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
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-CVZXVVR7.js";
import {
  MatAnchor,
  MatButtonModule,
  MatIcon,
  MatIconAnchor,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-J3LJ2RQZ.js";
import {
  CommonModule,
  DatePipe,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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

// src/app/pages/public/notices/notices.component.ts
var _forTrack0 = ($index, $item) => $item._id;
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ["/news", a0];
function NoticesComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
}
function NoticesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, NoticesComponent_Conditional_12_For_2_Template, 1, 0, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function NoticesComponent_Conditional_13_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1, "Urgent");
    \u0275\u0275elementEnd();
  }
}
function NoticesComponent_Conditional_13_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17)(1, "mat-icon");
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " PDF");
    \u0275\u0275elementEnd();
  }
}
function NoticesComponent_Conditional_13_For_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23)(1, "mat-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notice_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", notice_r1.pdfUrl, \u0275\u0275sanitizeUrl);
  }
}
function NoticesComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 8)(1, "div", 10)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content", 11)(5, "div", 12)(6, "h3", 13)(7, "a", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275template(10, NoticesComponent_Conditional_13_For_2_Conditional_10_Template, 2, 0, "span", 16)(11, NoticesComponent_Conditional_13_For_2_Conditional_11_Template, 4, 0, "span", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 18);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 19)(15, "div", 20)(16, "span")(17, "mat-icon");
    \u0275\u0275text(18, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span")(22, "mat-icon");
    \u0275\u0275text(23, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 21)(26, "a", 22);
    \u0275\u0275text(27, " Read More ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, NoticesComponent_Conditional_13_For_2_Conditional_28_Template, 3, 1, "a", 23);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const notice_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("urgent", notice_r1.isFeatured);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notice_r1.isFeatured ? "priority_high" : "info");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c1, notice_r1._id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notice_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, notice_r1.isFeatured ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, notice_r1.pdfUrl ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notice_r1.excerpt);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 12, notice_r1.publishedAt, "MMM d, y"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(notice_r1.author || "Administration");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c1, notice_r1._id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(28, notice_r1.pdfUrl ? 28 : -1);
  }
}
function NoticesComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-pagination", 24);
    \u0275\u0275listener("pageChanged", function NoticesComponent_Conditional_13_Conditional_3_Template_app_pagination_pageChanged_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pagination", ctx_r2.pagination);
  }
}
function NoticesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, NoticesComponent_Conditional_13_For_2_Template, 29, 19, "mat-card", 8, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NoticesComponent_Conditional_13_Conditional_3_Template, 1, 1, "app-pagination", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.notices);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.pagination ? 3 : -1);
  }
}
function NoticesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon", 26);
    \u0275\u0275text(2, "notifications_none");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No notices at this time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Check back later for important announcements");
    \u0275\u0275elementEnd()();
  }
}
var NoticesComponent = class _NoticesComponent {
  constructor() {
    this.newsService = inject(NewsService);
    this.notices = [];
    this.isLoading = true;
    this.currentPage = 1;
    this.searchQuery = "";
  }
  ngOnInit() {
    this.loadNotices();
  }
  loadNotices() {
    this.isLoading = true;
    this.newsService.getByCategory("notices", this.currentPage).subscribe({
      next: (res) => {
        if (res.success) {
          this.notices = res.data;
          this.pagination = res.pagination;
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  onSearch(query) {
    this.searchQuery = query;
    this.currentPage = 1;
    this.loadNotices();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.loadNotices();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static {
    this.\u0275fac = function NoticesComponent_Factory(t) {
      return new (t || _NoticesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoticesComponent, selectors: [["app-notices"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 1, consts: [[1, "page-header"], [1, "container"], [1, "notices-page"], [1, "notices-controls", "mb-4"], ["placeholder", "Search notices...", 3, "searchChanged"], [1, "loading-notices"], [1, "skeleton-notice"], [1, "notices-list"], [1, "notice-card", "card-hover"], [3, "pagination"], [1, "notice-priority"], [1, "notice-content"], [1, "notice-header"], [1, "notice-title"], [3, "routerLink"], [1, "notice-badges"], [1, "badge-urgent"], [1, "badge-pdf"], [1, "notice-excerpt"], [1, "notice-footer"], [1, "notice-meta"], [1, "notice-actions"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["target", "_blank", "mat-icon-button", "", "color", "accent", "matTooltip", "Download PDF", 3, "href"], [3, "pageChanged", "pagination"], [1, "empty-state", "text-center", "py-5"], [2, "font-size", "80px", "opacity", "0.3", "display", "block", "margin", "0 auto 16px"]], template: function NoticesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "mat-icon");
        \u0275\u0275text(4, "notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Important Notices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Stay informed about important announcements and notifications");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 2)(9, "div", 1)(10, "div", 3)(11, "app-search-bar", 4);
        \u0275\u0275listener("searchChanged", function NoticesComponent_Template_app_search_bar_searchChanged_11_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, NoticesComponent_Conditional_12_Template, 3, 1, "div", 5)(13, NoticesComponent_Conditional_13_Template, 4, 1)(14, NoticesComponent_Conditional_14_Template, 7, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275conditional(12, ctx.isLoading ? 12 : ctx.notices.length > 0 ? 13 : 14);
      }
    }, dependencies: [
      CommonModule,
      DatePipe,
      RouterModule,
      RouterLink,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatButtonModule,
      MatAnchor,
      MatIconAnchor,
      MatIconModule,
      MatIcon,
      MatChipsModule,
      SearchBarComponent,
      PaginationComponent
    ], styles: ["\n\n.notices-page[_ngcontent-%COMP%] {\n  padding: 40px 0 60px;\n}\n.notices-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.notices-controls[_ngcontent-%COMP%] {\n  max-width: 500px;\n}\n.notices-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.notice-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  display: flex !important;\n  flex-direction: row !important;\n  border: 1px solid #e0e0e0;\n  border-left: 4px solid #1976d2;\n  overflow: hidden;\n  transition: all 0.2s;\n}\n.notice-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;\n  transform: translateX(4px);\n}\n.notice-priority[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  min-width: 56px;\n  background: #e3f2fd;\n}\n.notice-priority[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n  font-size: 24px;\n}\n.notice-priority.urgent[_ngcontent-%COMP%] {\n  background: #fce4ec;\n}\n.notice-priority.urgent[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #e91e63;\n}\n.notice-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px 20px !important;\n}\n.notice-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 8px;\n  flex-wrap: wrap;\n}\n.notice-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n  flex: 1;\n}\n.notice-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #212121;\n  text-decoration: none;\n}\n.notice-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n}\n.notice-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n  flex-shrink: 0;\n}\n.notice-badges[_ngcontent-%COMP%]   .badge-urgent[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #e91e63;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.notice-badges[_ngcontent-%COMP%]   .badge-pdf[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  background: #fff3e0;\n  color: #e65100;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.notice-badges[_ngcontent-%COMP%]   .badge-pdf[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.notice-excerpt[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #757575;\n  line-height: 1.6;\n  margin-bottom: 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notice-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.notice-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.notice-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.notice-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.notice-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.skeleton-notice[_ngcontent-%COMP%] {\n  height: 110px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n/*# sourceMappingURL=notices.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoticesComponent, { className: "NoticesComponent", filePath: "src\\app\\pages\\public\\notices\\notices.component.ts", lineNumber: 30 });
})();
export {
  NoticesComponent
};
//# sourceMappingURL=chunk-G7ZYZBVB.js.map
