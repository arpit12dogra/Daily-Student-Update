import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-Y4PDVGJI.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HDEFDX36.js";
import {
  AuthService
} from "./chunk-JVQKKENA.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-OYLC2QR5.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
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
import "./chunk-MWPM3UMD.js";
import "./chunk-QZFXO2SC.js";
import "./chunk-MD6GV2ZI.js";
import {
  MatCard,
  MatCardContent,
  MatCardModule
} from "./chunk-CVZXVVR7.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-J3LJ2RQZ.js";
import {
  CommonModule,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QCDNTCDG.js";

// src/app/pages/admin/login/login.component.ts
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter a valid email address");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 14);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Signing in...");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Sign In");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.snackBar = inject(MatSnackBar);
    this.loading = signal(false);
    this.hidePassword = signal(true);
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid)
      return;
    this.loading.set(true);
    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: () => {
        this.loading.set(false);
        const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/admin/dashboard";
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.loading.set(false);
        const msg = err?.error?.message || "Invalid email or password";
        this.snackBar.open(msg, "Close", {
          duration: 4e3,
          panelClass: ["error-snackbar"]
        });
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 9, consts: [[1, "login-page"], [1, "login-container"], [1, "login-brand"], [1, "brand-icon"], [1, "login-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "admin@example.com", "autocomplete", "email"], ["matPrefix", ""], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "login-btn", 3, "disabled"], [1, "login-footer"], ["routerLink", "/"], ["diameter", "20"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
        \u0275\u0275text(5, "school");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "Daily Student Updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Admin Panel \u2014 Sign in to continue");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "mat-card", 4)(11, "mat-card-content")(12, "form", 5);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(13, "mat-form-field", 6)(14, "mat-label");
        \u0275\u0275text(15, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 7);
        \u0275\u0275elementStart(17, "mat-icon", 8);
        \u0275\u0275text(18, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, LoginComponent_Conditional_19_Template, 2, 0, "mat-error")(20, LoginComponent_Conditional_20_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-form-field", 6)(22, "mat-label");
        \u0275\u0275text(23, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(24, "input", 9);
        \u0275\u0275elementStart(25, "mat-icon", 8);
        \u0275\u0275text(26, "lock");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 10);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_27_listener() {
          return ctx.hidePassword.set(!ctx.hidePassword());
        });
        \u0275\u0275elementStart(28, "mat-icon");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, LoginComponent_Conditional_30_Template, 2, 0, "mat-error")(31, LoginComponent_Conditional_31_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 11);
        \u0275\u0275template(33, LoginComponent_Conditional_33_Template, 3, 0)(34, LoginComponent_Conditional_34_Template, 4, 0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(35, "p", 12);
        \u0275\u0275text(36, "Students don't need to login \u2014 ");
        \u0275\u0275elementStart(37, "a", 13);
        \u0275\u0275text(38, "Go to website");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_5_0;
        let tmp_6_0;
        \u0275\u0275advance(12);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(19, ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("email")) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched) ? 20 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword() ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hidePassword() ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(30, ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched) ? 30 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(31, ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.hasError("minlength")) && ((tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.touched) ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(33, ctx.loading() ? 33 : 34);
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
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule
    ], styles: ["\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #1565c0 0%,\n      #0d47a1 50%,\n      #1a237e 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.login-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.login-brand[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n  color: white;\n}\n.login-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.login-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: white;\n}\n.login-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n.login-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  opacity: 0.85;\n}\n.login-card[_ngcontent-%COMP%] {\n  border-radius: 16px !important;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3) !important;\n  padding: 8px;\n}\n.login-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 8px;\n}\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-top: 8px;\n  border-radius: 8px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.login-btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.login-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.9rem;\n}\n.login-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\admin\\login\\login.component.ts", lineNumber: 31 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-XOXDAZ75.js.map
