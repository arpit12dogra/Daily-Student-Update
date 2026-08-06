import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-DUAAWBAT.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-CZDBIFBP.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-Y4PDVGJI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CELLB4CS.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-RQ36DBT2.js";
import {
  CategoryService
} from "./chunk-DA4TPX74.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-OJNK56H5.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-OYLC2QR5.js";
import {
  NewsService
} from "./chunk-L3GR2ZU5.js";
import {
  MatChipsModule
} from "./chunk-SAJLAUWG.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-6WWO32JI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-GTVDZ5MJ.js";
import {
  MatDialogModule
} from "./chunk-DEVWQ4KH.js";
import "./chunk-MWPM3UMD.js";
import "./chunk-QZFXO2SC.js";
import "./chunk-MD6GV2ZI.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-CVZXVVR7.js";
import {
  MatAnchor,
  MatButton,
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
  DatePipe,
  MatOption,
  SlicePipe,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QCDNTCDG.js";

// src/app/pages/admin/manage-news/manage-news.component.ts
var _forTrack0 = ($index, $item) => $item._id;
var _c0 = () => [5, 10, 25, 50];
var _c1 = (a0) => ["/admin/edit-news", a0];
function ManageNewsComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275property("value", cat_r1._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r1.name);
  }
}
function ManageNewsComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 14);
  }
}
function ManageNewsComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Title");
    \u0275\u0275elementEnd();
  }
}
function ManageNewsComponent_td_40_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 32);
  }
  if (rf & 2) {
    const news_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", news_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", news_r2.title);
  }
}
function ManageNewsComponent_td_40_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "mat-icon");
    \u0275\u0275text(2, "image");
    \u0275\u0275elementEnd()();
  }
}
function ManageNewsComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "div", 31);
    \u0275\u0275template(2, ManageNewsComponent_td_40_Conditional_2_Template, 1, 2, "img", 32)(3, ManageNewsComponent_td_40_Conditional_3_Template, 3, 0);
    \u0275\u0275elementStart(4, "div")(5, "div", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const news_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, news_r2.imageUrl ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(news_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(9, 3, news_r2.excerpt, 0, 60), "...");
  }
}
function ManageNewsComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Category");
    \u0275\u0275elementEnd();
  }
}
function ManageNewsComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const news_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.getCategoryName(news_r3));
  }
}
function ManageNewsComponent_th_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ManageNewsComponent_td_46_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2B50 Featured");
    \u0275\u0275elementEnd();
  }
}
function ManageNewsComponent_td_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "div", 37)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ManageNewsComponent_td_46_Conditional_4_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const news_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge " + (news_r5.isPublished ? "badge-success" : "badge-draft"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", news_r5.isPublished ? "Published" : "Draft", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(4, news_r5.isFeatured ? 4 : -1);
  }
}
function ManageNewsComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Views");
    \u0275\u0275elementEnd();
  }
}
function ManageNewsComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30)(1, "span", 39)(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const news_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", news_r6.viewCount || 0, " ");
  }
}
function ManageNewsComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function ManageNewsComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const news_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, news_r7.createdAt, "d MMM yyyy"), " ");
  }
}
function ManageNewsComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ManageNewsComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 30)(1, "div", 40)(2, "button", 41)(3, "mat-icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 42);
    \u0275\u0275listener("click", function ManageNewsComponent_td_55_Template_button_click_5_listener() {
      const news_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.togglePublish(news_r9));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function ManageNewsComponent_td_55_Template_button_click_8_listener() {
      const news_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFeatured(news_r9));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 44);
    \u0275\u0275listener("click", function ManageNewsComponent_td_55_Template_button_click_11_listener() {
      const news_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteNews(news_r9));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const news_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, news_r9._id));
    \u0275\u0275advance(3);
    \u0275\u0275property("color", news_r9.isPublished ? "warn" : "accent")("matTooltip", news_r9.isPublished ? "Unpublish" : "Publish");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r9.isPublished ? "unpublished" : "publish");
    \u0275\u0275advance();
    \u0275\u0275property("color", news_r9.isFeatured ? "accent" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r9.isFeatured ? "star" : "star_border");
  }
}
function ManageNewsComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 45);
  }
}
function ManageNewsComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 46);
  }
}
function ManageNewsComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No news found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try different filters or ");
    \u0275\u0275elementStart(7, "a", 47);
    \u0275\u0275text(8, "add new news");
    \u0275\u0275elementEnd()()();
  }
}
var ManageNewsComponent = class _ManageNewsComponent {
  constructor() {
    this.newsService = inject(NewsService);
    this.categoryService = inject(CategoryService);
    this.snackBar = inject(MatSnackBar);
    this.newsList = signal([]);
    this.categories = signal([]);
    this.loading = signal(false);
    this.searchTerm = "";
    this.selectedCategory = "";
    this.selectedStatus = "";
    this.totalItems = signal(0);
    this.currentPage = signal(1);
    this.pageSize = signal(10);
    this.displayedColumns = ["title", "category", "status", "views", "date", "actions"];
  }
  ngOnInit() {
    this.loadCategories();
    this.loadNews();
  }
  loadCategories() {
    this.categoryService.getAll().subscribe({
      next: (res) => {
        if (res.success)
          this.categories.set(res.data);
      },
      error: () => {
      }
    });
  }
  loadNews() {
    this.loading.set(true);
    const filter = {
      page: this.currentPage(),
      limit: this.pageSize(),
      search: this.searchTerm || void 0,
      category: this.selectedCategory || void 0,
      sortBy: "createdAt",
      sortOrder: "desc"
    };
    this.newsService.getAll(filter).subscribe({
      next: (res) => {
        this.newsList.set(res.data || []);
        this.totalItems.set(res.pagination?.total || 0);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  onSearch() {
    this.currentPage.set(1);
    this.loadNews();
  }
  onPageChange(event) {
    this.currentPage.set(event.pageIndex + 1);
    this.pageSize.set(event.pageSize);
    this.loadNews();
  }
  togglePublish(news) {
    this.newsService.togglePublish(news._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.newsList.update((list) => list.map((n) => n._id === news._id ? res.data : n));
          const status = res.data.isPublished ? "Published" : "Unpublished";
          this.snackBar.open(`News ${status} successfully`, "Close", { duration: 3e3 });
        }
      },
      error: () => this.snackBar.open("Failed to update status", "Close", { duration: 3e3, panelClass: ["error-snackbar"] })
    });
  }
  toggleFeatured(news) {
    this.newsService.toggleFeatured(news._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.newsList.update((list) => list.map((n) => n._id === news._id ? res.data : n));
          this.snackBar.open("Featured status updated", "Close", { duration: 3e3 });
        }
      },
      error: () => {
      }
    });
  }
  deleteNews(news) {
    if (!confirm(`Delete "${news.title}"? This cannot be undone.`))
      return;
    this.newsService.delete(news._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.newsList.update((list) => list.filter((n) => n._id !== news._id));
          this.totalItems.update((t) => t - 1);
          this.snackBar.open("News deleted", "Close", { duration: 3e3 });
        }
      },
      error: () => this.snackBar.open("Failed to delete news", "Close", { duration: 3e3, panelClass: ["error-snackbar"] })
    });
  }
  getCategoryName(news) {
    if (typeof news.category === "object" && news.category !== null) {
      return news.category.name;
    }
    const cat = this.categories().find((c) => c._id === news.categoryId);
    return cat?.name || "\u2014";
  }
  clearFilters() {
    this.searchTerm = "";
    this.selectedCategory = "";
    this.selectedStatus = "";
    this.currentPage.set(1);
    this.loadNews();
  }
  static {
    this.\u0275fac = function ManageNewsComponent_Factory(t) {
      return new (t || _ManageNewsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageNewsComponent, selectors: [["app-manage-news"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 60, vars: 12, consts: [[1, "manage-news"], [1, "page-header-row"], ["mat-raised-button", "", "color", "primary", "routerLink", "/admin/add-news"], [1, "filter-card"], [1, "filters"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Title, content...", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matSuffix", "", 2, "cursor", "pointer", 3, "click"], ["appearance", "outline"], [3, "ngModelChange", "selectionChange", "ngModel"], ["value", ""], [3, "value"], ["mat-stroked-button", "", 3, "click"], [1, "table-card"], ["mode", "indeterminate"], [1, "table-wrapper"], ["mat-table", "", 1, "news-table", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "status"], ["matColumnDef", "views"], ["matColumnDef", "date"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "empty-state"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "title-cell"], [1, "news-thumb", 3, "src", "alt"], [1, "news-title"], [1, "news-excerpt"], [1, "news-thumb", "news-thumb-placeholder"], [1, "cat-chip"], [1, "status-badges"], [1, "badge", "badge-featured"], [1, "views-count"], [1, "actions-cell"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit", 3, "routerLink"], ["mat-icon-button", "", 3, "click", "color", "matTooltip"], ["mat-icon-button", "", "matTooltip", "Toggle Featured", 3, "click", "color"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["routerLink", "/admin/add-news"]], template: function ManageNewsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1")(4, "mat-icon");
        \u0275\u0275text(5, "newspaper");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Manage News");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 2)(10, "mat-icon");
        \u0275\u0275text(11, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Add News ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-card", 3)(14, "mat-card-content")(15, "div", 4)(16, "mat-form-field", 5)(17, "mat-label");
        \u0275\u0275text(18, "Search news...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function ManageNewsComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function ManageNewsComponent_Template_input_keyup_enter_19_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-icon", 7);
        \u0275\u0275listener("click", function ManageNewsComponent_Template_mat_icon_click_20_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275text(21, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "mat-form-field", 8)(23, "mat-label");
        \u0275\u0275text(24, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function ManageNewsComponent_Template_mat_select_ngModelChange_25_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
          return $event;
        });
        \u0275\u0275listener("selectionChange", function ManageNewsComponent_Template_mat_select_selectionChange_25_listener() {
          return ctx.onSearch();
        });
        \u0275\u0275elementStart(26, "mat-option", 10);
        \u0275\u0275text(27, "All Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(28, ManageNewsComponent_For_29_Template, 2, 2, "mat-option", 11, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "button", 12);
        \u0275\u0275listener("click", function ManageNewsComponent_Template_button_click_30_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275elementStart(31, "mat-icon");
        \u0275\u0275text(32, "clear");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " Clear ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "mat-card", 13);
        \u0275\u0275template(35, ManageNewsComponent_Conditional_35_Template, 1, 0, "mat-progress-bar", 14);
        \u0275\u0275elementStart(36, "div", 15)(37, "table", 16);
        \u0275\u0275elementContainerStart(38, 17);
        \u0275\u0275template(39, ManageNewsComponent_th_39_Template, 2, 0, "th", 18)(40, ManageNewsComponent_td_40_Template, 10, 7, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(41, 20);
        \u0275\u0275template(42, ManageNewsComponent_th_42_Template, 2, 0, "th", 18)(43, ManageNewsComponent_td_43_Template, 3, 1, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(44, 21);
        \u0275\u0275template(45, ManageNewsComponent_th_45_Template, 2, 0, "th", 18)(46, ManageNewsComponent_td_46_Template, 5, 4, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(47, 22);
        \u0275\u0275template(48, ManageNewsComponent_th_48_Template, 2, 0, "th", 18)(49, ManageNewsComponent_td_49_Template, 5, 1, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(50, 23);
        \u0275\u0275template(51, ManageNewsComponent_th_51_Template, 2, 0, "th", 18)(52, ManageNewsComponent_td_52_Template, 3, 4, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(53, 24);
        \u0275\u0275template(54, ManageNewsComponent_th_54_Template, 2, 0, "th", 18)(55, ManageNewsComponent_td_55_Template, 14, 8, "td", 19);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(56, ManageNewsComponent_tr_56_Template, 1, 0, "tr", 25)(57, ManageNewsComponent_tr_57_Template, 1, 0, "tr", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(58, ManageNewsComponent_Conditional_58_Template, 9, 0, "div", 27);
        \u0275\u0275elementStart(59, "mat-paginator", 28);
        \u0275\u0275listener("page", function ManageNewsComponent_Template_mat_paginator_page_59_listener($event) {
          return ctx.onPageChange($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.totalItems(), " total articles");
        \u0275\u0275advance(11);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategory);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.categories());
        \u0275\u0275advance(7);
        \u0275\u0275conditional(35, ctx.loading() ? 35 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.newsList());
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275conditional(58, !ctx.loading() && ctx.newsList().length === 0 ? 58 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("length", ctx.totalItems())("pageSize", ctx.pageSize())("pageSizeOptions", \u0275\u0275pureFunction0(11, _c0));
      }
    }, dependencies: [
      CommonModule,
      SlicePipe,
      DatePipe,
      RouterModule,
      RouterLink,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatFormFieldModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatChipsModule,
      MatTooltipModule,
      MatTooltip,
      MatProgressBarModule,
      MatProgressBar,
      MatSnackBarModule,
      MatDialogModule,
      MatPaginatorModule,
      MatPaginator
    ], styles: ["\n\n.manage-news[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.page-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.page-header-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.page-header-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 0.9rem;\n}\n.filter-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;\n}\n.filter-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.filters[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;\n  overflow: hidden;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.news-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.title-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 0;\n}\n.news-thumb[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 42px;\n  object-fit: cover;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.news-thumb-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f5f5;\n  color: #bdbdbd;\n}\n.news-thumb-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.news-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin-bottom: 2px;\n  line-height: 1.3;\n}\n.news-excerpt[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #9e9e9e;\n}\n.cat-chip[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge-draft[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #757575;\n}\n.badge-featured[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.views-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.85rem;\n  color: #757575;\n}\n.views-count[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #9e9e9e;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 12px 0 6px;\n  color: #616161;\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1565c0;\n  font-weight: 600;\n}\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #424242;\n  background: #fafafa;\n  font-size: 0.82rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n/*# sourceMappingURL=manage-news.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageNewsComponent, { className: "ManageNewsComponent", filePath: "src\\app\\pages\\admin\\manage-news\\manage-news.component.ts", lineNumber: 47 });
})();
export {
  ManageNewsComponent
};
//# sourceMappingURL=chunk-E2PCRLTC.js.map
