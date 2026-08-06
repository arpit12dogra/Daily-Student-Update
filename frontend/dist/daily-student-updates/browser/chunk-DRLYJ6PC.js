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
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-XY2RDQV6.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-Y4PDVGJI.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-CELLB4CS.js";
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
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatSuffix
} from "./chunk-6WWO32JI.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-GTVDZ5MJ.js";
import {
  MatDialogModule
} from "./chunk-DEVWQ4KH.js";
import "./chunk-MWPM3UMD.js";
import "./chunk-QZFXO2SC.js";
import "./chunk-MD6GV2ZI.js";
import {
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
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  CommonModule,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QCDNTCDG.js";

// src/app/pages/admin/categories/categories.component.ts
function CategoriesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 5);
  }
}
function CategoriesComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 20);
  }
}
function CategoriesComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", cat_r1.color);
  }
}
function CategoriesComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Name");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_td_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r2.description);
  }
}
function CategoriesComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CategoriesComponent_td_23_Conditional_3_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r2.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, cat_r2.description ? 3 : -1);
  }
}
function CategoriesComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Icon");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "div", 25)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", cat_r3.color + "20")("color", cat_r3.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r3.icon);
  }
}
function CategoriesComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "News");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r4.newsCount || 0);
  }
}
function CategoriesComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 21)(1, "mat-slide-toggle", 27);
    \u0275\u0275listener("change", function CategoriesComponent_td_32_Template_mat_slide_toggle_change_1_listener() {
      const cat_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.toggleActive(cat_r6));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("checked", cat_r6.isActive);
  }
}
function CategoriesComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 21)(1, "button", 28);
    \u0275\u0275listener("click", function CategoriesComponent_td_35_Template_button_click_1_listener() {
      const cat_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.editCategory(cat_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 29);
    \u0275\u0275listener("click", function CategoriesComponent_td_35_Template_button_click_4_listener() {
      const cat_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.deleteCategory(cat_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function CategoriesComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function CategoriesComponent_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 31);
  }
}
function CategoriesComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon");
    \u0275\u0275text(2, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No categories yet. Add your first category.");
    \u0275\u0275elementEnd()();
  }
}
function CategoriesComponent_Conditional_39_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Name is required");
    \u0275\u0275elementEnd();
  }
}
function CategoriesComponent_Conditional_39_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_39_For_25_Template_div_click_0_listener() {
      const color_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.categoryForm.patchValue({ color: color_r12 }));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const color_r12 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", color_r12);
    \u0275\u0275classProp("selected", ((tmp_12_0 = ctx_r6.categoryForm.get("color")) == null ? null : tmp_12_0.value) === color_r12);
  }
}
function CategoriesComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 19)(1, "mat-card-header")(2, "mat-card-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-card-content")(5, "form", 32);
    \u0275\u0275listener("ngSubmit", function CategoriesComponent_Conditional_39_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.onSubmit());
    });
    \u0275\u0275elementStart(6, "mat-form-field", 33)(7, "mat-label");
    \u0275\u0275text(8, "Category Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 34);
    \u0275\u0275template(10, CategoriesComponent_Conditional_39_Conditional_10_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-form-field", 33)(12, "mat-label");
    \u0275\u0275text(13, "Material Icon Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 35);
    \u0275\u0275elementStart(15, "mat-icon", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-hint")(18, "a", 37);
    \u0275\u0275text(19, "Browse icons");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 38)(21, "label", 39);
    \u0275\u0275text(22, "Color *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 40);
    \u0275\u0275repeaterCreate(24, CategoriesComponent_Conditional_39_For_25_Template, 1, 4, "div", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 42);
    \u0275\u0275element(27, "span", 43);
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "mat-form-field", 33)(31, "mat-label");
    \u0275\u0275text(32, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "textarea", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 45)(35, "button", 46)(36, "mat-icon");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 47);
    \u0275\u0275listener("click", function CategoriesComponent_Conditional_39_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.cancelForm());
    });
    \u0275\u0275text(40, "Cancel");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r6.editingCategory() ? "Edit Category" : "Add New Category", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r6.categoryForm);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(10, ((tmp_3_0 = ctx_r6.categoryForm.get("name")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx_r6.categoryForm.get("name")) == null ? null : tmp_3_0.touched) ? 10 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((tmp_4_0 = ctx_r6.categoryForm.get("icon")) == null ? null : tmp_4_0.value);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r6.colorOptions);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", (tmp_6_0 = ctx_r6.categoryForm.get("color")) == null ? null : tmp_6_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r6.categoryForm.get("color")) == null ? null : tmp_7_0.value);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r6.formLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.editingCategory() ? "save" : "add");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r6.editingCategory() ? "Update" : "Create", " ");
  }
}
var CategoriesComponent = class _CategoriesComponent {
  constructor() {
    this.categoryService = inject(CategoryService);
    this.snackBar = inject(MatSnackBar);
    this.fb = inject(FormBuilder);
    this.categories = signal([]);
    this.loading = signal(false);
    this.formLoading = signal(false);
    this.showForm = signal(false);
    this.editingCategory = signal(null);
    this.displayedColumns = ["color", "name", "icon", "news", "status", "actions"];
    this.colorOptions = [
      "#1565c0",
      "#2e7d32",
      "#e65100",
      "#6a1b9a",
      "#00695c",
      "#ad1457",
      "#f57f17",
      "#37474f",
      "#c62828",
      "#0277bd",
      "#558b2f",
      "#4527a0"
    ];
    this.categoryForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      icon: ["school", Validators.required],
      color: ["#1565c0", Validators.required],
      description: [""],
      isActive: [true]
    });
  }
  ngOnInit() {
    this.loadCategories();
  }
  loadCategories() {
    this.loading.set(true);
    this.categoryService.getAll().subscribe({
      next: (res) => {
        if (res.success)
          this.categories.set(res.data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  openAddForm() {
    this.editingCategory.set(null);
    this.categoryForm.reset({ icon: "school", color: "#1565c0", isActive: true });
    this.showForm.set(true);
  }
  editCategory(cat) {
    this.editingCategory.set(cat);
    this.categoryForm.patchValue({
      name: cat.name,
      icon: cat.icon,
      color: cat.color,
      description: cat.description || "",
      isActive: cat.isActive
    });
    this.showForm.set(true);
    setTimeout(() => {
      document.querySelector(".form-card")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
  cancelForm() {
    this.showForm.set(false);
    this.editingCategory.set(null);
    this.categoryForm.reset({ icon: "school", color: "#1565c0", isActive: true });
  }
  onSubmit() {
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }
    this.formLoading.set(true);
    const payload = this.categoryForm.value;
    const editing = this.editingCategory();
    const request = editing ? this.categoryService.update(editing._id, payload) : this.categoryService.create(payload);
    request.subscribe({
      next: (res) => {
        this.formLoading.set(false);
        if (res.success) {
          const msg = editing ? "Category updated" : "Category created";
          this.snackBar.open(msg, "Close", { duration: 3e3 });
          this.cancelForm();
          this.loadCategories();
        }
      },
      error: (err) => {
        this.formLoading.set(false);
        const msg = err?.error?.message || "Failed to save category";
        this.snackBar.open(msg, "Close", { duration: 3e3, panelClass: ["error-snackbar"] });
      }
    });
  }
  toggleActive(cat) {
    this.categoryService.toggleActive(cat._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.categories.update((list) => list.map((c) => c._id === cat._id ? res.data : c));
          this.snackBar.open("Status updated", "Close", { duration: 2e3 });
        }
      },
      error: () => {
      }
    });
  }
  deleteCategory(cat) {
    if (!confirm(`Delete category "${cat.name}"? This cannot be undone.`))
      return;
    this.categoryService.delete(cat._id).subscribe({
      next: (res) => {
        if (res.success) {
          this.categories.update((list) => list.filter((c) => c._id !== cat._id));
          this.snackBar.open("Category deleted", "Close", { duration: 3e3 });
        }
      },
      error: () => this.snackBar.open("Failed to delete category", "Close", { duration: 3e3, panelClass: ["error-snackbar"] })
    });
  }
  static {
    this.\u0275fac = function CategoriesComponent_Factory(t) {
      return new (t || _CategoriesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 7, consts: [[1, "categories"], [1, "page-header-row"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "content-grid"], [1, "table-card"], ["mode", "indeterminate"], [1, "table-wrapper"], ["mat-table", "", 1, "cat-table", 3, "dataSource"], ["matColumnDef", "color"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "icon"], ["matColumnDef", "news"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "empty-state"], [1, "form-card"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "color-swatch"], [1, "cat-name"], [1, "cat-desc"], [1, "icon-preview"], [1, "count-badge"], ["color", "primary", 3, "change", "checked"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name", "placeholder", "e.g. Exam Updates"], ["matInput", "", "formControlName", "icon", "placeholder", "e.g. school, book, work"], ["matSuffix", ""], ["href", "https://fonts.google.com/icons", "target", "_blank"], [1, "color-section"], [1, "color-label"], [1, "color-grid"], [1, "color-option", 3, "background", "selected"], [1, "selected-color"], [1, "color-dot"], ["matInput", "", "formControlName", "description", "rows", "2", "placeholder", "Optional description"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "color-option", 3, "click"]], template: function CategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1")(4, "mat-icon");
        \u0275\u0275text(5, "category");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Categories");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 2);
        \u0275\u0275listener("click", function CategoriesComponent_Template_button_click_9_listener() {
          return ctx.openAddForm();
        });
        \u0275\u0275elementStart(10, "mat-icon");
        \u0275\u0275text(11, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Add Category ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 3)(14, "mat-card", 4);
        \u0275\u0275template(15, CategoriesComponent_Conditional_15_Template, 1, 0, "mat-progress-bar", 5);
        \u0275\u0275elementStart(16, "div", 6)(17, "table", 7);
        \u0275\u0275elementContainerStart(18, 8);
        \u0275\u0275template(19, CategoriesComponent_th_19_Template, 1, 0, "th", 9)(20, CategoriesComponent_td_20_Template, 2, 2, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(21, 11);
        \u0275\u0275template(22, CategoriesComponent_th_22_Template, 2, 0, "th", 9)(23, CategoriesComponent_td_23_Template, 4, 2, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(24, 12);
        \u0275\u0275template(25, CategoriesComponent_th_25_Template, 2, 0, "th", 9)(26, CategoriesComponent_td_26_Template, 4, 5, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(27, 13);
        \u0275\u0275template(28, CategoriesComponent_th_28_Template, 2, 0, "th", 9)(29, CategoriesComponent_td_29_Template, 3, 1, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(30, 14);
        \u0275\u0275template(31, CategoriesComponent_th_31_Template, 2, 0, "th", 9)(32, CategoriesComponent_td_32_Template, 2, 1, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(33, 15);
        \u0275\u0275template(34, CategoriesComponent_th_34_Template, 2, 0, "th", 9)(35, CategoriesComponent_td_35_Template, 7, 0, "td", 10);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(36, CategoriesComponent_tr_36_Template, 1, 0, "tr", 16)(37, CategoriesComponent_tr_37_Template, 1, 0, "tr", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, CategoriesComponent_Conditional_38_Template, 5, 0, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, CategoriesComponent_Conditional_39_Template, 41, 10, "mat-card", 19);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.categories().length, " categories");
        \u0275\u0275advance(7);
        \u0275\u0275conditional(15, ctx.loading() ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.categories());
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.displayedColumns);
        \u0275\u0275advance();
        \u0275\u0275conditional(38, !ctx.loading() && ctx.categories().length === 0 ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(39, ctx.showForm() ? 39 : -1);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatCardHeader,
      MatCardTitle,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatError,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatDialogModule,
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
      MatSlideToggleModule,
      MatSlideToggle,
      MatTooltipModule,
      MatTooltip,
      MatSnackBarModule,
      MatProgressBarModule,
      MatProgressBar,
      MatDividerModule
    ], styles: ["\n\n.categories[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.page-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.page-header-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.page-header-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 0.9rem;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 20px;\n  align-items: start;\n}\n.table-card[_ngcontent-%COMP%], .form-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06) !important;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.cat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.color-swatch[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n.icon-preview[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-preview[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.cat-desc[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9e9e9e;\n  margin-top: 2px;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 700;\n}\nth.mat-header-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n  background: #fafafa;\n  font-size: 0.82rem;\n  text-transform: uppercase;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #9e9e9e;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.form-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 16px 20px 0;\n}\n.form-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n}\n.form-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 16px 20px 20px !important;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 4px;\n}\n.color-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.color-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #424242;\n  margin-bottom: 8px;\n  display: block;\n}\n.color-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.color-option[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.color-option[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n.color-option.selected[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  box-shadow: 0 0 0 3px white, 0 0 0 5px currentColor;\n  outline: 2px solid rgba(0, 0, 0, 0.3);\n}\n.selected-color[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.82rem;\n  color: #616161;\n}\n.selected-color[_ngcontent-%COMP%]   .color-dot[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  display: inline-block;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n}\n@media (max-width: 900px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=categories.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src\\app\\pages\\admin\\categories\\categories.component.ts", lineNumber: 41 });
})();
export {
  CategoriesComponent
};
//# sourceMappingURL=chunk-DRLYJ6PC.js.map
