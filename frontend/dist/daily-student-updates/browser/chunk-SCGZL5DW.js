import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-Y4PDVGJI.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-RQ36DBT2.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-OYLC2QR5.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-6WWO32JI.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-GTVDZ5MJ.js";
import "./chunk-MWPM3UMD.js";
import "./chunk-MD6GV2ZI.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-CVZXVVR7.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  RouterModule
} from "./chunk-J3LJ2RQZ.js";
import {
  CommonModule,
  MatOption,
  inject,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QCDNTCDG.js";

// src/app/pages/public/contact/contact.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function ContactComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter your name");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Please enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r1.label);
  }
}
function ContactComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Subject is required");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Message must be at least 20 characters");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "hourglass_empty");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Sending... ");
  }
}
function ContactComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Send Message ");
  }
}
var ContactComponent = class _ContactComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.snackBar = inject(MatSnackBar);
    this.isSubmitting = false;
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      type: ["general"],
      message: ["", [Validators.required, Validators.minLength(20)]]
    });
    this.contactTypes = [
      { value: "general", label: "General Inquiry" },
      { value: "news", label: "News Submission" },
      { value: "feedback", label: "Feedback" },
      { value: "support", label: "Technical Support" }
    ];
  }
  onSubmit() {
    if (this.contactForm.invalid)
      return;
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.contactForm.reset({ type: "general" });
      this.snackBar.open("Your message has been sent successfully!", "Close", {
        duration: 5e3,
        panelClass: "success-snackbar",
        horizontalPosition: "end",
        verticalPosition: "top"
      });
    }, 1500);
  }
  static {
    this.\u0275fac = function ContactComponent_Factory(t) {
      return new (t || _ContactComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 99, vars: 7, consts: [[1, "page-header"], [1, "container"], [1, "contact-page"], [1, "row", "g-4"], [1, "col-lg-7"], [1, "contact-form-card"], [2, "font-size", "1.5rem", "font-weight", "700", "margin-bottom", "24px", "color", "#1a237e"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6"], ["appearance", "outline", 1, "w-100", "mb-3"], ["matInput", "", "formControlName", "name", "placeholder", "John Doe"], ["matSuffix", ""], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "john@example.com"], ["formControlName", "type"], [3, "value"], ["matInput", "", "formControlName", "subject", "placeholder", "Brief subject of your message"], ["appearance", "outline", 1, "w-100", "mb-4"], ["matInput", "", "formControlName", "message", "rows", "6", "placeholder", "Write your message here..."], ["mat-raised-button", "", "color", "primary", "type", "submit", 2, "padding", "12px 32px", "font-size", "15px", "border-radius", "8px", 3, "disabled"], [1, "col-lg-5"], [2, "padding", "20px 0"], [2, "font-size", "1.3rem", "font-weight", "700", "color", "#1a237e", "margin-bottom", "32px"], [1, "contact-info-item"], [1, "info-icon"], [1, "info-label"], [1, "info-value"], [2, "border-radius", "16px", "background", "#e3f2fd", "border", "none", "padding", "24px"], [2, "color", "#1976d2", "font-size", "32px", "display", "block", "margin-bottom", "12px"], [2, "margin-bottom", "8px", "color", "#1a237e"], [2, "font-size", "14px", "color", "#424242", "margin", "0", "line-height", "1.7"]], template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "mat-icon");
        \u0275\u0275text(4, "contact_mail");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "We'd love to hear from you. Send us a message!");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 2)(9, "div", 1)(10, "div", 3)(11, "div", 4)(12, "div", 5)(13, "h2", 6);
        \u0275\u0275text(14, " Send a Message ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "form", 7);
        \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_15_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "mat-form-field", 10)(19, "mat-label");
        \u0275\u0275text(20, "Your Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "input", 11);
        \u0275\u0275elementStart(22, "mat-icon", 12);
        \u0275\u0275text(23, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, ContactComponent_Conditional_24_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9)(26, "mat-form-field", 10)(27, "mat-label");
        \u0275\u0275text(28, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "input", 13);
        \u0275\u0275elementStart(30, "mat-icon", 12);
        \u0275\u0275text(31, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275template(32, ContactComponent_Conditional_32_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "mat-form-field", 10)(34, "mat-label");
        \u0275\u0275text(35, "Inquiry Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-select", 14);
        \u0275\u0275repeaterCreate(37, ContactComponent_For_38_Template, 2, 2, "mat-option", 15, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "mat-form-field", 10)(40, "mat-label");
        \u0275\u0275text(41, "Subject");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 16);
        \u0275\u0275template(43, ContactComponent_Conditional_43_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-form-field", 17)(45, "mat-label");
        \u0275\u0275text(46, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "textarea", 18);
        \u0275\u0275template(48, ContactComponent_Conditional_48_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 19);
        \u0275\u0275template(50, ContactComponent_Conditional_50_Template, 3, 0)(51, ContactComponent_Conditional_51_Template, 3, 0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(52, "div", 20)(53, "div", 21)(54, "h3", 22);
        \u0275\u0275text(55, " Contact Information ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 23)(57, "div", 24)(58, "mat-icon");
        \u0275\u0275text(59, "location_on");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div")(61, "p", 25);
        \u0275\u0275text(62, "Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p", 26);
        \u0275\u0275text(64, "123 School Road, Education City, ST 12345");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 23)(66, "div", 24)(67, "mat-icon");
        \u0275\u0275text(68, "phone");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div")(70, "p", 25);
        \u0275\u0275text(71, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p", 26);
        \u0275\u0275text(73, "+1 (234) 567-8900");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 23)(75, "div", 24)(76, "mat-icon");
        \u0275\u0275text(77, "email");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div")(79, "p", 25);
        \u0275\u0275text(80, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "p", 26);
        \u0275\u0275text(82, "info@dailystudentupdates.com");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "div", 23)(84, "div", 24)(85, "mat-icon");
        \u0275\u0275text(86, "access_time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div")(88, "p", 25);
        \u0275\u0275text(89, "Office Hours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "p", 26);
        \u0275\u0275text(91, "Monday - Friday: 8:00 AM - 4:00 PM");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(92, "mat-card", 27)(93, "mat-icon", 28);
        \u0275\u0275text(94, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "h4", 29);
        \u0275\u0275text(96, "Response Time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p", 30);
        \u0275\u0275text(98, " We typically respond within 24-48 hours during business days. For urgent matters, please call us directly. ");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_4_0;
        let tmp_5_0;
        \u0275\u0275advance(15);
        \u0275\u0275property("formGroup", ctx.contactForm);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(24, ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.touched) ? 24 : -1);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(32, ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.touched) ? 32 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.contactTypes);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(43, ((tmp_4_0 = ctx.contactForm.get("subject")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.contactForm.get("subject")) == null ? null : tmp_4_0.touched) ? 43 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(48, ((tmp_5_0 = ctx.contactForm.get("message")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.contactForm.get("message")) == null ? null : tmp_5_0.touched) ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.contactForm.invalid || ctx.isSubmitting);
        \u0275\u0275advance();
        \u0275\u0275conditional(50, ctx.isSubmitting ? 50 : 51);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatCardModule,
      MatCard,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSnackBarModule
    ], styles: ["\n\n.contact-page[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.contact-form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 40px;\n  border: 1px solid #e0e0e0;\n}\n.contact-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.info-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #e3f2fd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.info-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #212121;\n  margin: 0;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\pages\\public\\contact\\contact.component.ts", lineNumber: 42 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-SCGZL5DW.js.map
