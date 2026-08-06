import {
  MatInput,
  MatInputModule
} from "./chunk-OYLC2QR5.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-6WWO32JI.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-GTVDZ5MJ.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  CommonModule,
  EventEmitter,
  Subject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-QCDNTCDG.js";

// src/app/shared/components/search-bar/search-bar.component.ts
function SearchBarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function SearchBarComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
var SearchBarComponent = class _SearchBarComponent {
  constructor() {
    this.placeholder = "Search news...";
    this.initialValue = "";
    this.searchChanged = new EventEmitter();
    this.searchSubmit = new EventEmitter();
    this.searchControl = new FormControl("");
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    if (this.initialValue) {
      this.searchControl.setValue(this.initialValue);
    }
    this.searchControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((value) => {
      this.searchChanged.emit(value || "");
    });
  }
  onSubmit() {
    this.searchSubmit.emit(this.searchControl.value || "");
  }
  clearSearch() {
    this.searchControl.setValue("");
    this.searchChanged.emit("");
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static {
    this.\u0275fac = function SearchBarComponent_Factory(t) {
      return new (t || _SearchBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchBarComponent, selectors: [["app-search-bar"]], inputs: { placeholder: "placeholder", initialValue: "initialValue" }, outputs: { searchChanged: "searchChanged", searchSubmit: "searchSubmit" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 3, consts: [[1, "search-bar-wrapper"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", 3, "keyup.enter", "formControl", "placeholder"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Clear search"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Clear search", 3, "click"]], template: function SearchBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-icon", 2);
        \u0275\u0275text(3, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 3);
        \u0275\u0275listener("keyup.enter", function SearchBarComponent_Template_input_keyup_enter_4_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, SearchBarComponent_Conditional_5_Template, 3, 0, "button", 4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("formControl", ctx.searchControl)("placeholder", ctx.placeholder);
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.searchControl.value ? 5 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      ReactiveFormsModule,
      FormControlDirective,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton
    ], styles: ["\n\n.search-bar-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  border-radius: 50px !important;\n  background: white;\n}\n.search-field[_ngcontent-%COMP%]     .mat-mdc-form-field-outline {\n  border-radius: 50px !important;\n}\n.search-field[_ngcontent-%COMP%]     .mdc-notched-outline__leading {\n  border-radius: 50px 0 0 50px !important;\n}\n.search-field[_ngcontent-%COMP%]     .mdc-notched-outline__trailing {\n  border-radius: 0 50px 50px 0 !important;\n}\n/*# sourceMappingURL=search-bar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchBarComponent, { className: "SearchBarComponent", filePath: "src\\app\\shared\\components\\search-bar\\search-bar.component.ts", lineNumber: 25 });
})();

// src/app/shared/components/pagination/pagination.component.ts
function PaginationComponent_Conditional_0_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function PaginationComponent_Conditional_0_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_For_5_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const page_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goTo(page_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r4 === ctx_r1.pagination.page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", page_r4, " ");
  }
}
function PaginationComponent_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PaginationComponent_Conditional_0_For_5_Conditional_0_Template, 2, 0, "span", 4)(1, PaginationComponent_Conditional_0_For_5_Conditional_1_Template, 2, 3);
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    \u0275\u0275conditional(0, page_r4 < 0 ? 0 : 1);
  }
}
function PaginationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 0)(1, "button", 1);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goTo(ctx_r1.pagination.page - 1));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, PaginationComponent_Conditional_0_For_5_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(6, "button", 2);
    \u0275\u0275listener("click", function PaginationComponent_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goTo(ctx_r1.pagination.page + 1));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 3);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.pagination.hasPrev);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.pages);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.pagination.hasNext);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" Page ", ctx_r1.pagination.page, " of ", ctx_r1.pagination.totalPages, " (", ctx_r1.pagination.total, " total) ");
  }
}
var PaginationComponent = class _PaginationComponent {
  constructor() {
    this.pageChanged = new EventEmitter();
  }
  get pages() {
    const pages = [];
    const total = this.pagination.totalPages;
    const current = this.pagination.page;
    if (total <= 7) {
      for (let i = 1; i <= total; i++)
        pages.push(i);
    } else {
      pages.push(1);
      if (current > 3)
        pages.push(-1);
      for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) {
        pages.push(i);
      }
      if (current < total - 2)
        pages.push(-2);
      pages.push(total);
    }
    return pages;
  }
  goTo(page) {
    if (page > 0 && page <= this.pagination.totalPages) {
      this.pageChanged.emit(page);
    }
  }
  static {
    this.\u0275fac = function PaginationComponent_Factory(t) {
      return new (t || _PaginationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { pagination: "pagination" }, outputs: { pageChanged: "pageChanged" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["aria-label", "Pagination", 1, "pagination-nav"], ["mat-icon-button", "", "aria-label", "Previous page", 3, "click", "disabled"], ["mat-icon-button", "", "aria-label", "Next page", 3, "click", "disabled"], [1, "pagination-info"], [1, "ellipsis"], ["mat-button", "", 1, "page-btn", 3, "click"]], template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PaginationComponent_Conditional_0_Template, 11, 5, "nav", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(0, ctx.pagination && ctx.pagination.totalPages > 1 ? 0 : -1);
      }
    }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon], styles: ["\n\n.pagination-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  padding: 20px 0;\n  flex-wrap: wrap;\n}\n.page-btn[_ngcontent-%COMP%] {\n  min-width: 40px !important;\n  height: 40px;\n  border-radius: 8px !important;\n  font-weight: 500;\n  color: #424242;\n  transition: all 0.2s;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: #1976d2 !important;\n  color: white !important;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #e3f2fd !important;\n  color: #1976d2;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  color: #9e9e9e;\n  line-height: 40px;\n}\n.pagination-info[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  margin-left: 12px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=pagination.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src\\app\\shared\\components\\pagination\\pagination.component.ts", lineNumber: 14 });
})();

export {
  SearchBarComponent,
  PaginationComponent
};
//# sourceMappingURL=chunk-4WEUM3MV.js.map
