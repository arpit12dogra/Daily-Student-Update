import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CELLB4CS.js";
import {
  AuthService
} from "./chunk-JVQKKENA.js";
import {
  CategoryService
} from "./chunk-DA4TPX74.js";
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
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-J3LJ2RQZ.js";
import {
  CommonModule,
  DatePipe,
  __spreadProps,
  __spreadValues,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QCDNTCDG.js";

// src/app/pages/admin/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item._id;
function DashboardComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-progress-bar", 31);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading recent news...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No news yet. ");
    \u0275\u0275elementStart(5, "a", 33);
    \u0275\u0275text(6, "Add your first news");
    \u0275\u0275elementEnd()()();
  }
}
function DashboardComponent_Conditional_98_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Published");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_98_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, "Draft");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_98_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "Featured");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_98_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38)(5, "mat-icon");
    \u0275\u0275text(6, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 39);
    \u0275\u0275template(13, DashboardComponent_Conditional_98_For_2_Conditional_13_Template, 2, 0, "span", 40)(14, DashboardComponent_Conditional_98_For_2_Conditional_14_Template, 2, 0)(15, DashboardComponent_Conditional_98_For_2_Conditional_15_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const news_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(news_r1.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 5, news_r1.createdAt, "d MMM yyyy"), " \xA0\xB7\xA0 ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", news_r1.viewCount, " views ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(13, news_r1.isPublished ? 13 : 14);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, news_r1.isFeatured ? 15 : -1);
  }
}
function DashboardComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_98_For_2_Template, 16, 8, "div", 35, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.recentNews());
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.newsService = inject(NewsService);
    this.categoryService = inject(CategoryService);
    this.authService = inject(AuthService);
    this.currentAdmin = this.authService.currentAdmin;
    this.stats = signal({
      totalNews: 0,
      todaysNews: 0,
      totalCategories: 0,
      totalViews: 0,
      publishedNews: 0,
      featuredNews: 0,
      recentActivity: []
    });
    this.recentNews = signal([]);
    this.loading = signal(true);
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.loading.set(true);
    this.newsService.getStats().subscribe({
      next: (res) => {
        if (res.success) {
          this.stats.set(res.data);
        }
      },
      error: () => {
      }
    });
    this.newsService.getAll({ page: 1, limit: 5, sortBy: "createdAt", sortOrder: "desc" }).subscribe({
      next: (res) => {
        this.recentNews.set(res.data || []);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
    this.categoryService.getAll().subscribe({
      next: (res) => {
        if (res.success) {
          this.stats.update((s) => __spreadProps(__spreadValues({}, s), { totalCategories: res.data.length }));
        }
      },
      error: () => {
      }
    });
  }
  getGreeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      return "Good Morning";
    if (hour < 17)
      return "Good Afternoon";
    return "Good Evening";
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 119, vars: 9, consts: [[1, "dashboard"], [1, "welcome-banner"], [1, "welcome-text"], [1, "welcome-actions"], ["mat-raised-button", "", "color", "accent", "routerLink", "/admin/add-news"], [1, "stats-grid"], [1, "stat-card", "stat-blue"], [1, "stat-body"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon"], ["routerLink", "/admin/manage-news", 1, "stat-link"], [1, "stat-card", "stat-green"], [1, "stat-card", "stat-orange"], ["routerLink", "/admin/categories", 1, "stat-link"], [1, "stat-card", "stat-purple"], [1, "stat-link"], [1, "stat-card", "stat-teal"], [1, "stat-card", "stat-pink"], [1, "recent-card"], [1, "card-spacer"], ["mat-button", "", "color", "primary", "routerLink", "/admin/manage-news"], [1, "recent-content"], [1, "loading-state"], [1, "quick-actions"], [1, "actions-grid"], ["mat-raised-button", "", "routerLink", "/admin/add-news", 1, "action-btn"], ["mat-stroked-button", "", "routerLink", "/admin/categories", 1, "action-btn"], ["mat-stroked-button", "", "routerLink", "/admin/media", 1, "action-btn"], ["mat-stroked-button", "", "routerLink", "/", "target", "_blank", 1, "action-btn"], ["mode", "indeterminate"], [1, "empty-state"], ["routerLink", "/admin/add-news"], [1, "news-list"], [1, "news-item"], [1, "news-info"], [1, "news-title"], [1, "news-meta"], [1, "news-badges"], [1, "badge", "badge-success"], [1, "badge", "badge-featured"], [1, "badge", "badge-draft"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Here's what's happening with Daily Student Updates today.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "a", 4)(9, "mat-icon");
        \u0275\u0275text(10, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Add News ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 5)(13, "mat-card", 6)(14, "mat-card-content")(15, "div", 7)(16, "div", 8)(17, "span", 9);
        \u0275\u0275text(18, "Total News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "mat-icon", 11);
        \u0275\u0275text(22, "newspaper");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "a", 12);
        \u0275\u0275text(24, "View all \u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "mat-card", 13)(26, "mat-card-content")(27, "div", 7)(28, "div", 8)(29, "span", 9);
        \u0275\u0275text(30, "Published");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 10);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "mat-icon", 11);
        \u0275\u0275text(34, "check_circle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "a", 12);
        \u0275\u0275text(36, "Manage \u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "mat-card", 14)(38, "mat-card-content")(39, "div", 7)(40, "div", 8)(41, "span", 9);
        \u0275\u0275text(42, "Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 10);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "mat-icon", 11);
        \u0275\u0275text(46, "category");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "a", 15);
        \u0275\u0275text(48, "Manage \u2192");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "mat-card", 16)(50, "mat-card-content")(51, "div", 7)(52, "div", 8)(53, "span", 9);
        \u0275\u0275text(54, "Total Views");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 10);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "mat-icon", 11);
        \u0275\u0275text(58, "visibility");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "span", 17);
        \u0275\u0275text(60, "All time");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "mat-card", 18)(62, "mat-card-content")(63, "div", 7)(64, "div", 8)(65, "span", 9);
        \u0275\u0275text(66, "Today's News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span", 10);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "mat-icon", 11);
        \u0275\u0275text(70, "today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "span", 17);
        \u0275\u0275text(72, "Published today");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "mat-card", 19)(74, "mat-card-content")(75, "div", 7)(76, "div", 8)(77, "span", 9);
        \u0275\u0275text(78, "Featured");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "span", 10);
        \u0275\u0275text(80);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "mat-icon", 11);
        \u0275\u0275text(82, "star");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "span", 17);
        \u0275\u0275text(84, "Featured articles");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(85, "mat-card", 20)(86, "mat-card-header")(87, "mat-card-title")(88, "mat-icon");
        \u0275\u0275text(89, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275text(90, " Recent News ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(91, "span", 21);
        \u0275\u0275elementStart(92, "a", 22);
        \u0275\u0275text(93, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(94, "mat-divider");
        \u0275\u0275elementStart(95, "mat-card-content", 23);
        \u0275\u0275template(96, DashboardComponent_Conditional_96_Template, 4, 0, "div", 24)(97, DashboardComponent_Conditional_97_Template, 7, 0)(98, DashboardComponent_Conditional_98_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 25)(100, "h2");
        \u0275\u0275text(101, "Quick Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "div", 26)(103, "a", 27)(104, "mat-icon");
        \u0275\u0275text(105, "add_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(106, " Add News ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "a", 28)(108, "mat-icon");
        \u0275\u0275text(109, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275text(110, " Manage Categories ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "a", 29)(112, "mat-icon");
        \u0275\u0275text(113, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(114, " Upload Media ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "a", 30)(116, "mat-icon");
        \u0275\u0275text(117, "open_in_new");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118, " View Website ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("", ctx.getGreeting(), ", ", ((tmp_0_0 = ctx.currentAdmin()) == null ? null : tmp_0_0.username) || "Admin", " \u{1F44B}");
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate(ctx.stats().totalNews);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats().publishedNews);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats().totalCategories);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats().totalViews);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats().todaysNews);
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.stats().featuredNews);
        \u0275\u0275advance(16);
        \u0275\u0275conditional(96, ctx.loading() ? 96 : ctx.recentNews().length === 0 ? 97 : 98);
      }
    }, dependencies: [
      CommonModule,
      DatePipe,
      RouterModule,
      RouterLink,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCardHeader,
      MatCardTitle,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatAnchor,
      MatChipsModule,
      MatDividerModule,
      MatDivider,
      MatProgressBarModule,
      MatProgressBar
    ], styles: ["\n\n.dashboard[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.welcome-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background:\n    linear-gradient(\n      135deg,\n      #1565c0,\n      #0d47a1);\n  color: white;\n  border-radius: 16px;\n  padding: 28px 32px;\n  margin-bottom: 28px;\n  box-shadow: 0 8px 24px rgba(21, 101, 192, 0.3);\n}\n.welcome-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.welcome-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.85;\n  font-size: 0.95rem;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  margin-bottom: 28px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12) !important;\n}\n.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-info[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  opacity: 0.75;\n}\n.stat-info[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  opacity: 0.3;\n}\n.stat-link[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  opacity: 0.75;\n  text-decoration: none;\n}\n.stat-link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.stat-blue[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.stat-blue[_ngcontent-%COMP%]   .stat-link[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n.stat-green[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.stat-green[_ngcontent-%COMP%]   .stat-link[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.stat-orange[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.stat-orange[_ngcontent-%COMP%]   .stat-link[_ngcontent-%COMP%] {\n  color: #e65100;\n}\n.stat-purple[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #6a1b9a;\n}\n.stat-purple[_ngcontent-%COMP%]   .stat-link[_ngcontent-%COMP%] {\n  color: #6a1b9a;\n}\n.stat-teal[_ngcontent-%COMP%] {\n  background: #e0f2f1;\n  color: #00695c;\n}\n.stat-teal[_ngcontent-%COMP%]   .stat-link[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.stat-pink[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #ad1457;\n}\n.stat-pink[_ngcontent-%COMP%]   .stat-link[_ngcontent-%COMP%] {\n  color: #ad1457;\n}\n.recent-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  margin-bottom: 28px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06) !important;\n}\n.recent-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 16px 20px;\n}\n.recent-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n}\n.recent-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .card-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.recent-content[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.news-list[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background 0.15s;\n}\n.news-list[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.news-list[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.news-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.news-info[_ngcontent-%COMP%]   .news-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212121;\n}\n.news-info[_ngcontent-%COMP%]   .news-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  color: #757575;\n}\n.news-info[_ngcontent-%COMP%]   .news-meta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.news-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #757575;\n}\n.badge-featured[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  color: #9e9e9e;\n}\n.loading-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 12px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.loading-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1565c0;\n  font-weight: 600;\n}\n.quick-actions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 16px;\n  color: #424242;\n}\n.actions-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 20px !important;\n  border-radius: 10px !important;\n}\n@media (max-width: 768px) {\n  .welcome-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    padding: 20px;\n  }\n  .welcome-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\admin\\dashboard\\dashboard.component.ts", lineNumber: 32 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-63JD657W.js.map
