import {
  MatSelect,
  MatSelectModule
} from "./chunk-RQ36DBT2.js";
import {
  NewsCardComponent
} from "./chunk-VXXMIMLH.js";
import {
  CategoryService
} from "./chunk-DA4TPX74.js";
import "./chunk-OJNK56H5.js";
import {
  PaginationComponent,
  SearchBarComponent
} from "./chunk-4WEUM3MV.js";
import "./chunk-OYLC2QR5.js";
import {
  NewsService
} from "./chunk-L3GR2ZU5.js";
import {
  MatChip,
  MatChipRemove,
  MatChipsModule
} from "./chunk-SAJLAUWG.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-6WWO32JI.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-GTVDZ5MJ.js";
import "./chunk-MWPM3UMD.js";
import "./chunk-QZFXO2SC.js";
import "./chunk-MD6GV2ZI.js";
import {
  MatCardModule
} from "./chunk-CVZXVVR7.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-J3LJ2RQZ.js";
import {
  CommonModule,
  MatOption,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QCDNTCDG.js";

// src/app/pages/public/news-list/news-list.component.ts
var _forTrack0 = ($index, $item) => $item._id;
var _forTrack1 = ($index, $item) => $item.value;
var _c0 = () => [1, 2, 3, 4, 5, 6];
function NewsListComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function NewsListComponent_For_28_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCategoryChange(cat_r2.slug));
    });
    \u0275\u0275elementStart(1, "mat-icon", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("border-color", ctx_r2.selectedCategory === cat_r2.slug ? cat_r2.color : "")("background", ctx_r2.selectedCategory === cat_r2.slug ? cat_r2.color + "20" : "")("color", ctx_r2.selectedCategory === cat_r2.slug ? cat_r2.color : "");
    \u0275\u0275classProp("active", ctx_r2.selectedCategory === cat_r2.slug);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", cat_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r2.name, " ");
  }
}
function NewsListComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    \u0275\u0275property("value", opt_r4.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r4.label);
  }
}
function NewsListComponent_Conditional_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 22);
    \u0275\u0275listener("removed", function NewsListComponent_Conditional_37_Conditional_3_Template_mat_chip_removed_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSearch(""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon", 23);
    \u0275\u0275text(3, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Search: ", ctx_r2.searchQuery, " ");
  }
}
function NewsListComponent_Conditional_37_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-chip", 22);
    \u0275\u0275listener("removed", function NewsListComponent_Conditional_37_Conditional_4_Template_mat_chip_removed_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCategoryChange(""));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "mat-icon", 23);
    \u0275\u0275text(3, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("removable", true);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCategoryName(ctx_r2.selectedCategory), " ");
  }
}
function NewsListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 20);
    \u0275\u0275text(2, "Active filters:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NewsListComponent_Conditional_37_Conditional_3_Template, 4, 2, "mat-chip", 21)(4, NewsListComponent_Conditional_37_Conditional_4_Template, 4, 2, "mat-chip", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, ctx_r2.searchQuery ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, ctx_r2.selectedCategory ? 4 : -1);
  }
}
function NewsListComponent_Conditional_38_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementEnd();
  }
}
function NewsListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, NewsListComponent_Conditional_38_For_2_Template, 2, 0, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function NewsListComponent_Conditional_39_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "app-news-card", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("news", item_r7);
  }
}
function NewsListComponent_Conditional_39_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-pagination", 28);
    \u0275\u0275listener("pageChanged", function NewsListComponent_Conditional_39_Conditional_3_Template_app_pagination_pageChanged_0_listener($event) {
      \u0275\u0275restoreView(_r8);
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
function NewsListComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, NewsListComponent_Conditional_39_For_2_Template, 2, 1, "div", 24, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NewsListComponent_Conditional_39_Conditional_3_Template, 1, 1, "app-pagination", 26);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.news);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(3, ctx_r2.pagination ? 3 : -1);
  }
}
function NewsListComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "mat-icon");
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No news found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your search or filter criteria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 30);
    \u0275\u0275listener("click", function NewsListComponent_Conditional_40_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onSearch("");
      return \u0275\u0275resetView(ctx_r2.onCategoryChange(""));
    });
    \u0275\u0275text(8, " Clear Filters ");
    \u0275\u0275elementEnd()();
  }
}
var NewsListComponent = class _NewsListComponent {
  constructor() {
    this.newsService = inject(NewsService);
    this.categoryService = inject(CategoryService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.news = [];
    this.categories = [];
    this.isLoading = true;
    this.currentPage = 1;
    this.searchQuery = "";
    this.selectedCategory = "";
    this.sortBy = "publishedAt";
    this.sortOptions = [
      { value: "publishedAt", label: "Latest First" },
      { value: "viewCount", label: "Most Viewed" },
      { value: "title", label: "Title A-Z" }
    ];
  }
  ngOnInit() {
    this.categoryService.getActive().subscribe({
      next: (res) => {
        if (res.success)
          this.categories = res.data;
      }
    });
    this.route.queryParams.subscribe((params) => {
      this.currentPage = +params["page"] || 1;
      this.searchQuery = params["search"] || "";
      this.selectedCategory = params["category"] || "";
      this.loadNews();
    });
  }
  loadNews() {
    this.isLoading = true;
    this.newsService.getPublished({
      page: this.currentPage,
      limit: 9,
      search: this.searchQuery,
      category: this.selectedCategory,
      sortBy: this.sortBy,
      sortOrder: "desc"
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.news = res.data;
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
    this.updateRoute();
  }
  onCategoryChange(categorySlug) {
    this.selectedCategory = categorySlug;
    this.currentPage = 1;
    this.updateRoute();
  }
  onPageChange(page) {
    this.currentPage = page;
    this.updateRoute();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  onSortChange() {
    this.currentPage = 1;
    this.loadNews();
  }
  updateRoute() {
    const queryParams = { page: this.currentPage };
    if (this.searchQuery)
      queryParams["search"] = this.searchQuery;
    if (this.selectedCategory)
      queryParams["category"] = this.selectedCategory;
    this.router.navigate([], { queryParams, replaceUrl: true });
  }
  getCategoryName(slug) {
    const cat = this.categories.find((c) => c.slug === slug);
    return cat?.name || slug;
  }
  static {
    this.\u0275fac = function NewsListComponent_Factory(t) {
      return new (t || _NewsListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsListComponent, selectors: [["app-news-list"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 41, vars: 7, consts: [[1, "page-header"], [1, "container"], [1, "news-list-page"], [1, "row"], [1, "col-lg-3", "mb-4"], [1, "filters-panel"], [1, "filter-title"], [1, "filter-section"], [1, "filter-label"], [3, "searchChanged", "initialValue"], [1, "category-filters"], [1, "cat-filter-btn", 3, "click"], [1, "cat-filter-btn", 3, "active", "border-color", "background", "color"], ["appearance", "outline", 1, "w-100"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "col-lg-9"], [1, "active-filters", "mb-3"], [1, "row", "g-3"], [2, "font-size", "14px"], [1, "filters-label"], [3, "removable"], [3, "removed", "removable"], ["matChipRemove", ""], [1, "col-md-6", "col-lg-4"], [1, "skeleton-news-card"], [3, "pagination"], [3, "news"], [3, "pageChanged", "pagination"], [1, "empty-results"], ["mat-stroked-button", "", "color", "primary", 3, "click"]], template: function NewsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "mat-icon");
        \u0275\u0275text(4, "article");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Stay informed with the latest updates from your school");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 2)(9, "div", 1)(10, "div", 3)(11, "div", 4)(12, "div", 5)(13, "h3", 6)(14, "mat-icon");
        \u0275\u0275text(15, "filter_list");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Filters ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 7)(18, "label", 8);
        \u0275\u0275text(19, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "app-search-bar", 9);
        \u0275\u0275listener("searchChanged", function NewsListComponent_Template_app_search_bar_searchChanged_20_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 7)(22, "label", 8);
        \u0275\u0275text(23, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 10)(25, "button", 11);
        \u0275\u0275listener("click", function NewsListComponent_Template_button_click_25_listener() {
          return ctx.onCategoryChange("");
        });
        \u0275\u0275text(26, " All ");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(27, NewsListComponent_For_28_Template, 4, 12, "button", 12, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 7)(30, "label", 8);
        \u0275\u0275text(31, "Sort By");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-form-field", 13)(33, "mat-select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function NewsListComponent_Template_mat_select_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function NewsListComponent_Template_mat_select_ngModelChange_33_listener() {
          return ctx.onSortChange();
        });
        \u0275\u0275repeaterCreate(34, NewsListComponent_For_35_Template, 2, 2, "mat-option", 15, _forTrack1);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(36, "div", 16);
        \u0275\u0275template(37, NewsListComponent_Conditional_37_Template, 5, 2, "div", 17)(38, NewsListComponent_Conditional_38_Template, 3, 1, "div", 18)(39, NewsListComponent_Conditional_39_Template, 4, 1)(40, NewsListComponent_Conditional_40_Template, 9, 0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.selectedCategory ? ctx.getCategoryName(ctx.selectedCategory) : "All News", " ");
        \u0275\u0275advance(15);
        \u0275\u0275property("initialValue", ctx.searchQuery);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.selectedCategory === "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.sortOptions);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(37, ctx.searchQuery || ctx.selectedCategory ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(38, ctx.isLoading ? 38 : ctx.news.length > 0 ? 39 : 40);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      ReactiveFormsModule,
      MatCardModule,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatChipsModule,
      MatChip,
      MatChipRemove,
      MatSelectModule,
      MatFormField,
      MatSelect,
      MatOption,
      MatFormFieldModule,
      NewsCardComponent,
      SearchBarComponent,
      PaginationComponent
    ], styles: ["\n\n.news-list-page[_ngcontent-%COMP%] {\n  padding: 40px 0 60px;\n}\n.news-list-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.filters-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid #e0e0e0;\n  position: sticky;\n  top: 90px;\n}\n.filter-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.filter-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.filter-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #616161;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.category-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.cat-filter-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: #424242;\n  transition: all 0.2s;\n  text-align: left;\n}\n.cat-filter-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.cat-filter-btn.active[_ngcontent-%COMP%] {\n  border-color: #1976d2;\n  background: #e3f2fd;\n  color: #1976d2;\n  font-weight: 600;\n}\n.active-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.active-filters[_ngcontent-%COMP%]   .filters-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #757575;\n  font-weight: 500;\n}\n.skeleton-news-card[_ngcontent-%COMP%] {\n  height: 340px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.empty-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n  color: #9e9e9e;\n}\n.empty-results[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n  width: 80px;\n  height: 80px;\n  display: block;\n  margin: 0 auto 16px;\n  opacity: 0.4;\n}\n.empty-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #616161;\n  margin-bottom: 8px;\n}\n.empty-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=news-list.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsListComponent, { className: "NewsListComponent", filePath: "src\\app\\pages\\public\\news-list\\news-list.component.ts", lineNumber: 41 });
})();
export {
  NewsListComponent
};
//# sourceMappingURL=chunk-T2N2ZG3H.js.map
