import {
  NewsCardComponent
} from "./chunk-VXXMIMLH.js";
import {
  CategoryService
} from "./chunk-DA4TPX74.js";
import "./chunk-OJNK56H5.js";
import {
  NewsService
} from "./chunk-L3GR2ZU5.js";
import {
  MatChipsModule
} from "./chunk-SAJLAUWG.js";
import "./chunk-6WWO32JI.js";
import "./chunk-GTVDZ5MJ.js";
import "./chunk-MWPM3UMD.js";
import "./chunk-QZFXO2SC.js";
import "./chunk-MD6GV2ZI.js";
import {
  MatDividerModule
} from "./chunk-DD47GPG5.js";
import {
  MatCardModule
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
  NgForOf,
  inject,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QCDNTCDG.js";

// src/app/pages/public/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item._id;
var _forTrack2 = ($index, $item) => $item.name;
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = () => ["/news"];
var _c2 = (a0) => ({ category: a0 });
var _c3 = () => [1, 2, 3, 4];
var _c4 = (a0) => ["/news", a0];
function HomeComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function HomeComponent_Conditional_64_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", category_r1.newsCount, " articles");
  }
}
function HomeComponent_Conditional_64_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "a", 56)(2, "div", 57)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HomeComponent_Conditional_64_For_2_Conditional_7_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c1))("queryParams", \u0275\u0275pureFunction1(10, _c2, category_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", category_r1.color + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", category_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getCategoryIcon(category_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, category_r1.newsCount !== void 0 ? 7 : -1);
  }
}
function HomeComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_64_For_2_Template, 8, 12, "div", 55, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.categories);
  }
}
function HomeComponent_Conditional_65_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "a", 60)(2, "div", 57)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", cat_r3.color + "20");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", cat_r3.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.name);
  }
}
function HomeComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_65_For_2_Template, 7, 6, "div", 55, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.defaultCategories);
  }
}
function HomeComponent_Conditional_66_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "app-news-card", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const news_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("news", news_r4);
  }
}
function HomeComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 32)(1, "div", 27)(2, "div", 36)(3, "div")(4, "h2", 37);
    \u0275\u0275text(5, "Featured News");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 38);
    \u0275\u0275text(7, "Top stories handpicked for you");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 39);
    \u0275\u0275text(9, " View All ");
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 34);
    \u0275\u0275repeaterCreate(13, HomeComponent_Conditional_66_For_14_Template, 2, 1, "div", 61, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.featuredNews);
  }
}
function HomeComponent_Conditional_81_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 64);
  }
}
function HomeComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, HomeComponent_Conditional_81_div_1_Template, 1, 0, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c3));
  }
}
function HomeComponent_Conditional_82_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275element(1, "app-news-card", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const news_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("news", news_r5)("compact", true);
  }
}
function HomeComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_82_For_2_Template, 2, 2, "div", 65, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.latestNews);
  }
}
function HomeComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "mat-icon");
    \u0275\u0275text(2, "article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No news available yet");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_91_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 68)(1, "a", 69)(2, "div", 70)(3, "mat-icon");
    \u0275\u0275text(4, "announcement");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 71)(6, "h4", 72);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 73);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-icon", 74);
    \u0275\u0275text(12, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notice_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c4, notice_r6._id));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(notice_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 3, notice_r6.publishedAt, "MMM d, y"));
  }
}
function HomeComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 44);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_91_For_2_Template, 13, 8, "li", 68, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.notices);
  }
}
function HomeComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "mat-icon");
    \u0275\u0275text(2, "notifications_none");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No notices at this time");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_For_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r7 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r7.path);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", link_r7.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r7.label);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.newsService = inject(NewsService);
    this.categoryService = inject(CategoryService);
    this.featuredNews = [];
    this.latestNews = [];
    this.notices = [];
    this.categories = [];
    this.isLoading = true;
    this.error = "";
    this.defaultCategories = [
      { name: "Academic", icon: "school", color: "#1976d2" },
      { name: "Sports", icon: "sports_soccer", color: "#43a047" },
      { name: "Events", icon: "event", color: "#e91e63" },
      { name: "Science", icon: "science", color: "#7b1fa2" },
      { name: "Arts", icon: "palette", color: "#ff6f00" },
      { name: "Notices", icon: "notifications", color: "#f44336" }
    ];
    this.quickLinks = [
      { label: "News", path: "/news", icon: "article", color: "#1976d2" },
      { label: "Gallery", path: "/gallery", icon: "photo_library", color: "#43a047" },
      { label: "Notices", path: "/notices", icon: "notifications", color: "#f44336" },
      { label: "About", path: "/about", icon: "info", color: "#7b1fa2" }
    ];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.isLoading = true;
    this.categoryService.getActive().subscribe({
      next: (res) => {
        if (res.success)
          this.categories = res.data;
      },
      error: () => {
      }
    });
    this.newsService.getFeatured().subscribe({
      next: (res) => {
        if (res.success)
          this.featuredNews = res.data.slice(0, 3);
      },
      error: () => {
      }
    });
    this.newsService.getLatest(8).subscribe({
      next: (res) => {
        if (res.success)
          this.latestNews = res.data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
    this.newsService.getByCategory("notices", 1).subscribe({
      next: (res) => {
        if (res.success)
          this.notices = res.data.slice(0, 5);
      },
      error: () => {
      }
    });
  }
  getCategoryIcon(category) {
    return category.icon || "category";
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 118, vars: 5, consts: [[1, "hero-section"], [1, "hero-background"], [1, "hero-overlay"], [1, "hero-particles"], [1, "particle"], [1, "container", "hero-content"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "hero-text", "fade-in-up"], [1, "hero-badge"], [1, "hero-title"], [1, "hero-highlight"], [1, "hero-subtitle"], [1, "hero-actions"], ["routerLink", "/news", "mat-raised-button", "", "color", "accent", 1, "hero-btn", "primary-btn"], ["routerLink", "/notices", "mat-stroked-button", "", 1, "hero-btn", "secondary-btn"], [1, "hero-stats"], [1, "stat-item"], [1, "stat-number"], [1, "stat-label"], [1, "stat-divider"], [1, "col-lg-5", "d-none", "d-lg-block"], [1, "hero-visual"], [1, "news-preview-card"], [1, "preview-icon"], [1, "scroll-down"], [1, "categories-section"], [1, "container"], [1, "text-center", "mb-4"], [1, "section-title", "text-center"], [1, "section-subtitle"], [1, "row", "g-3"], [1, "featured-section"], [1, "latest-section"], [1, "row", "g-4"], [1, "col-lg-8"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "section-title"], [1, "section-subtitle", "mb-0"], ["routerLink", "/news", "mat-button", "", "color", "primary", 1, "view-all-btn"], [1, "loading-state"], [1, "col-lg-4"], [1, "notices-sidebar"], [1, "sidebar-header"], [1, "notices-list"], ["routerLink", "/notices", "mat-stroked-button", "", "color", "primary", 1, "w-100", "mt-3"], [1, "quick-links-widget", "mt-4"], [1, "widget-title"], [1, "quick-links-grid"], [1, "quick-link-item", 3, "routerLink"], [1, "cta-section"], [1, "cta-content"], [1, "cta-actions"], ["routerLink", "/news", "mat-raised-button", "", "color", "accent"], ["routerLink", "/contact", "mat-stroked-button", "", 1, "cta-outline-btn"], [1, "col-lg-2", "col-md-3", "col-sm-4", "col-6"], [1, "category-card", 3, "routerLink", "queryParams"], [1, "category-icon-wrap"], [1, "category-name"], [1, "category-count"], ["routerLink", "/news", 1, "category-card"], [1, "col-lg-4", "col-md-6"], [3, "news"], ["class", "skeleton-card", 4, "ngFor", "ngForOf"], [1, "skeleton-card"], [1, "col-md-6"], [3, "news", "compact"], [1, "empty-state"], [1, "notice-item"], [1, "notice-link", 3, "routerLink"], [1, "notice-icon"], [1, "notice-content"], [1, "notice-title"], [1, "notice-date"], [1, "notice-arrow"], [1, "empty-notices"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275repeaterCreate(4, HomeComponent_For_5_Template, 1, 0, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "span", 9)(11, "mat-icon");
        \u0275\u0275text(12, "notifications_active");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " Stay Informed ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h1", 10);
        \u0275\u0275text(15, " Daily Student ");
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17, "Updates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "p", 12);
        \u0275\u0275text(19, " Your comprehensive source for school news, important notices, events, and announcements. Never miss what's happening in your school community. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "a", 14)(22, "mat-icon");
        \u0275\u0275text(23, "article");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Latest News ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 15)(26, "mat-icon");
        \u0275\u0275text(27, "notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " View Notices ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 16)(30, "div", 17)(31, "span", 18);
        \u0275\u0275text(32, "500+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 19);
        \u0275\u0275text(34, "News Articles");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(35, "div", 20);
        \u0275\u0275elementStart(36, "div", 17)(37, "span", 18);
        \u0275\u0275text(38, "50+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 19);
        \u0275\u0275text(40, "Categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(41, "div", 20);
        \u0275\u0275elementStart(42, "div", 17)(43, "span", 18);
        \u0275\u0275text(44, "10K+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 19);
        \u0275\u0275text(46, "Monthly Readers");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(47, "div", 21)(48, "div", 22)(49, "div", 23)(50, "mat-icon", 24);
        \u0275\u0275text(51, "newspaper");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span");
        \u0275\u0275text(53, "Latest Updates");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(54, "div", 25)(55, "mat-icon");
        \u0275\u0275text(56, "keyboard_arrow_down");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "section", 26)(58, "div", 27)(59, "div", 28)(60, "h2", 29);
        \u0275\u0275text(61, "Browse by Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p", 30);
        \u0275\u0275text(63, "Find news organized by topics that matter to you");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(64, HomeComponent_Conditional_64_Template, 3, 0, "div", 31)(65, HomeComponent_Conditional_65_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(66, HomeComponent_Conditional_66_Template, 15, 0, "section", 32);
        \u0275\u0275elementStart(67, "section", 33)(68, "div", 27)(69, "div", 34)(70, "div", 35)(71, "div", 36)(72, "div")(73, "h2", 37);
        \u0275\u0275text(74, "Latest News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "p", 38);
        \u0275\u0275text(76, "Stay up to date with recent happenings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "a", 39);
        \u0275\u0275text(78, " View All ");
        \u0275\u0275elementStart(79, "mat-icon");
        \u0275\u0275text(80, "arrow_forward");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(81, HomeComponent_Conditional_81_Template, 2, 2, "div", 40)(82, HomeComponent_Conditional_82_Template, 3, 0)(83, HomeComponent_Conditional_83_Template, 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 41)(85, "div", 42)(86, "div", 43)(87, "mat-icon");
        \u0275\u0275text(88, "notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "h3");
        \u0275\u0275text(90, "Important Notices");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(91, HomeComponent_Conditional_91_Template, 3, 0, "ul", 44)(92, HomeComponent_Conditional_92_Template, 5, 0);
        \u0275\u0275elementStart(93, "a", 45);
        \u0275\u0275text(94, " View All Notices ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 46)(96, "h3", 47);
        \u0275\u0275text(97, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 48);
        \u0275\u0275repeaterCreate(99, HomeComponent_For_100_Template, 5, 5, "a", 49, _forTrack0);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(101, "section", 50)(102, "div", 27)(103, "div", 51)(104, "div")(105, "h2");
        \u0275\u0275text(106, "Stay Connected with Your School");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "p");
        \u0275\u0275text(108, "Get instant updates on news, events, and important announcements");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 52)(110, "a", 53)(111, "mat-icon");
        \u0275\u0275text(112, "article");
        \u0275\u0275elementEnd();
        \u0275\u0275text(113, " Browse News ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "a", 54)(115, "mat-icon");
        \u0275\u0275text(116, "contact_mail");
        \u0275\u0275elementEnd();
        \u0275\u0275text(117, " Contact Us ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275repeater(\u0275\u0275pureFunction0(4, _c0));
        \u0275\u0275advance(60);
        \u0275\u0275conditional(64, ctx.categories.length > 0 ? 64 : 65);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(66, ctx.featuredNews.length > 0 ? 66 : -1);
        \u0275\u0275advance(15);
        \u0275\u0275conditional(81, ctx.isLoading ? 81 : ctx.latestNews.length > 0 ? 82 : 83);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(91, ctx.notices.length > 0 ? 91 : 92);
        \u0275\u0275advance(8);
        \u0275\u0275repeater(ctx.quickLinks);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      DatePipe,
      RouterModule,
      RouterLink,
      MatCardModule,
      MatButtonModule,
      MatAnchor,
      MatIconModule,
      MatIcon,
      MatChipsModule,
      MatDividerModule,
      NewsCardComponent
    ], styles: [`

.hero-section[_ngcontent-%COMP%] {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background:
    linear-gradient(
      135deg,
      #0d47a1 0%,
      #1565c0 40%,
      #1976d2 70%,
      #42a5f5 100%);
  color: white;
}
.hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 20px 60px;
  position: relative;
  z-index: 2;
}
.hero-background[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-particles[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
}
.hero-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%] {
  position: absolute;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;
}
.hero-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%]:nth-child(1) {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}
.hero-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%]:nth-child(2) {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 5%;
  animation-delay: 1s;
}
.hero-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%]:nth-child(3) {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 25%;
  animation-delay: 2s;
}
.hero-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%]:nth-child(4) {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 30%;
  animation-delay: 3s;
}
.hero-particles[_ngcontent-%COMP%]   .particle[_ngcontent-%COMP%]:nth-child(5) {
  width: 120px;
  height: 120px;
  top: 5%;
  right: 40%;
  animation-delay: 4s;
}
@keyframes _ngcontent-%COMP%_float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}
.hero-text[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 20px;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.hero-text[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 16px;
  color: #ffeb3b;
}
.hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
}
.hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .hero-highlight[_ngcontent-%COMP%] {
  color: #ffeb3b;
  position: relative;
}
.hero-text[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .hero-highlight[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 4px;
  background: #ffeb3b;
  border-radius: 2px;
  opacity: 0.7;
}
.hero-text[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {
  font-size: 1.15rem;
  opacity: 0.9;
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: 32px;
}
.hero-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.hero-actions[_ngcontent-%COMP%]   .hero-btn[_ngcontent-%COMP%] {
  padding: 12px 28px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 50px !important;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.hero-actions[_ngcontent-%COMP%]   .hero-btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.hero-actions[_ngcontent-%COMP%]   .hero-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
}
.hero-actions[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%] {
  border: 2px solid rgba(255, 255, 255, 0.7) !important;
  color: white !important;
}
.hero-actions[_ngcontent-%COMP%]   .secondary-btn[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.1) !important;
}
.hero-stats[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {
  font-size: 1.8rem;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
}
.hero-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {
  font-size: 11px;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.hero-stats[_ngcontent-%COMP%]   .stat-divider[_ngcontent-%COMP%] {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.3);
}
.hero-visual[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}
.hero-visual[_ngcontent-%COMP%]   .news-preview-card[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.hero-visual[_ngcontent-%COMP%]   .news-preview-card[_ngcontent-%COMP%]   .preview-icon[_ngcontent-%COMP%] {
  font-size: 80px;
  width: 80px;
  height: 80px;
  color: rgba(255, 255, 255, 0.8);
}
.hero-visual[_ngcontent-%COMP%]   .news-preview-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 600;
}
.scroll-down[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: rgba(255, 255, 255, 0.7);
  animation: _ngcontent-%COMP%_bounce 2s ease-in-out infinite;
  cursor: pointer;
}
.scroll-down[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 32px;
}
@keyframes _ngcontent-%COMP%_bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(8px);
  }
}
.categories-section[_ngcontent-%COMP%] {
  padding: 80px 0;
  background: white;
}
.categories-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
.category-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 12px;
  border-radius: 16px;
  background: #fafafa;
  border: 1px solid #f0f0f0;
  text-decoration: none;
  color: #212121;
  transition: all 0.3s ease;
  text-align: center;
}
.category-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  background: white;
}
.category-card[_ngcontent-%COMP%]   .category-icon-wrap[_ngcontent-%COMP%] {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.category-card[_ngcontent-%COMP%]   .category-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 28px;
}
.category-card[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 13px;
  line-height: 1.2;
}
.category-card[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #9e9e9e;
}
.featured-section[_ngcontent-%COMP%] {
  padding: 80px 0;
  background: #f8f9fa;
}
.featured-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
.latest-section[_ngcontent-%COMP%] {
  padding: 80px 0;
  background: white;
}
.latest-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
.notices-sidebar[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
}
.notices-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1976d2,
      #1565c0);
  color: white;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.notices-sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.notices-sidebar[_ngcontent-%COMP%]   .notices-list[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-item[_ngcontent-%COMP%] {
  border-bottom: 1px solid #f5f5f5;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-link[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  text-decoration: none;
  color: #424242;
  transition: background 0.2s;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-link[_ngcontent-%COMP%]:hover {
  background: #f5f5f5;
  text-decoration: none;
  color: #1976d2;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-link[_ngcontent-%COMP%]   .notice-icon[_ngcontent-%COMP%] {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e3f2fd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-link[_ngcontent-%COMP%]   .notice-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 18px;
  color: #1976d2;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-link[_ngcontent-%COMP%]   .notice-content[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-link[_ngcontent-%COMP%]   .notice-content[_ngcontent-%COMP%]   .notice-title[_ngcontent-%COMP%] {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 4px;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-link[_ngcontent-%COMP%]   .notice-content[_ngcontent-%COMP%]   .notice-date[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #9e9e9e;
}
.notices-sidebar[_ngcontent-%COMP%]   .notice-link[_ngcontent-%COMP%]   .notice-arrow[_ngcontent-%COMP%] {
  font-size: 18px;
  color: #bdbdbd;
  flex-shrink: 0;
}
.notices-sidebar[_ngcontent-%COMP%]   .empty-notices[_ngcontent-%COMP%] {
  padding: 32px;
  text-align: center;
  color: #9e9e9e;
}
.notices-sidebar[_ngcontent-%COMP%]   .empty-notices[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 40px;
  display: block;
  margin-bottom: 8px;
}
.notices-sidebar[_ngcontent-%COMP%]   .empty-notices[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 14px;
}
.quick-links-widget[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  padding: 20px;
}
.quick-links-widget[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #1976d2;
  display: inline-block;
}
.quick-links-widget[_ngcontent-%COMP%]   .quick-links-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.quick-links-widget[_ngcontent-%COMP%]   .quick-link-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 8px;
  border-radius: 12px;
  background: #fafafa;
  text-decoration: none;
  color: #424242;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s;
}
.quick-links-widget[_ngcontent-%COMP%]   .quick-link-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 24px;
}
.quick-links-widget[_ngcontent-%COMP%]   .quick-link-item[_ngcontent-%COMP%]:hover {
  background: #e3f2fd;
  transform: translateY(-2px);
  text-decoration: none;
}
.view-all-btn[_ngcontent-%COMP%] {
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
}
.skeleton-card[_ngcontent-%COMP%] {
  height: 200px;
  border-radius: 16px;
  background:
    linear-gradient(
      90deg,
      #f0f0f0 25%,
      #e0e0e0 50%,
      #f0f0f0 75%);
  background-size: 200% 100%;
  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;
  margin-bottom: 16px;
}
@keyframes _ngcontent-%COMP%_shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
.empty-state[_ngcontent-%COMP%] {
  text-align: center;
  padding: 60px 20px;
  color: #9e9e9e;
}
.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {
  font-size: 60px;
  display: block;
  margin-bottom: 12px;
  opacity: 0.5;
}
.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 16px;
}
.cta-section[_ngcontent-%COMP%] {
  padding: 80px 0;
  background:
    linear-gradient(
      135deg,
      #1976d2,
      #1565c0);
  color: white;
}
.cta-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}
.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}
.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.cta-section[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  opacity: 0.85;
  font-size: 1.1rem;
  margin: 0;
}
.cta-section[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  flex-shrink: 0;
}
.cta-section[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   .cta-outline-btn[_ngcontent-%COMP%] {
  border: 2px solid rgba(255, 255, 255, 0.7) !important;
  color: white !important;
}
@media (max-width: 768px) {
  .hero-section[_ngcontent-%COMP%] {
    min-height: 70vh;
  }
  .hero-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {
    padding: 60px 20px 40px;
  }
  .hero-stats[_ngcontent-%COMP%] {
    gap: 16px;
  }
  .cta-content[_ngcontent-%COMP%] {
    flex-direction: column;
    text-align: center;
  }
}
/*# sourceMappingURL=home.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\public\\home\\home.component.ts", lineNumber: 31 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-ZKJS5QEF.js.map
