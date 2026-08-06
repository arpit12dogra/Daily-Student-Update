import {
  MatMenuModule,
  MatToolbarModule
} from "./chunk-R6ZRTLG6.js";
import "./chunk-MWPM3UMD.js";
import "./chunk-MD6GV2ZI.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-DD47GPG5.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-LNKNWSPJ.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet
} from "./chunk-J3LJ2RQZ.js";
import {
  A11yModule,
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  AriaDescriber,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  Inject,
  Input,
  InputFlags,
  InteractivityChecker,
  MatCommonModule,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  ViewEncapsulation$1,
  booleanAttribute,
  createComponent,
  filter,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QCDNTCDG.js";

// node_modules/@angular/material/fesm2022/badge.mjs
var nextId = 0;
var BADGE_CONTENT_CLASS = "mat-badge-content";
var badgeApps = /* @__PURE__ */ new Set();
var _MatBadgeStyleLoader = class __MatBadgeStyleLoader {
  static {
    this.\u0275fac = function _MatBadgeStyleLoader_Factory(t) {
      return new (t || __MatBadgeStyleLoader)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: __MatBadgeStyleLoader,
      selectors: [["ng-component"]],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function _MatBadgeStyleLoader_Template(rf, ctx) {
      },
      styles: [".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:var(--mat-badge-text-font);font-weight:var(--mat-badge-text-weight);border-radius:var(--mat-badge-container-shape)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size, var(--mat-badge-small-size-container-size));padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size, var(--mat-badge-container-size));padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size);margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size, var(--mat-badge-large-size-container-size));padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size);margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatBadgeStyleLoader, [{
    type: Component,
    args: [{
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;transition:transform 200ms ease-in-out;transform:scale(0.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:var(--mat-badge-text-font);font-weight:var(--mat-badge-text-weight);border-radius:var(--mat-badge-container-shape)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-above .mat-badge-content{bottom:100%}.mat-badge-below .mat-badge-content{top:100%}.mat-badge-before .mat-badge-content{right:100%}[dir=rtl] .mat-badge-before .mat-badge-content{right:auto;left:100%}.mat-badge-after .mat-badge-content{left:100%}[dir=rtl] .mat-badge-after .mat-badge-content{left:auto;right:100%}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:var(--mat-badge-legacy-small-size-container-size, unset);height:var(--mat-badge-legacy-small-size-container-size, unset);min-width:var(--mat-badge-small-size-container-size, unset);min-height:var(--mat-badge-small-size-container-size, unset);line-height:var(--mat-badge-legacy-small-size-container-size, var(--mat-badge-small-size-container-size));padding:var(--mat-badge-small-size-container-padding);font-size:var(--mat-badge-small-size-text-size);margin:var(--mat-badge-small-size-container-offset)}.mat-badge-small.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-small-size-container-overlap-offset)}.mat-badge-medium .mat-badge-content{width:var(--mat-badge-legacy-container-size, unset);height:var(--mat-badge-legacy-container-size, unset);min-width:var(--mat-badge-container-size, unset);min-height:var(--mat-badge-container-size, unset);line-height:var(--mat-badge-legacy-container-size, var(--mat-badge-container-size));padding:var(--mat-badge-container-padding);font-size:var(--mat-badge-text-size);margin:var(--mat-badge-container-offset)}.mat-badge-medium.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-container-overlap-offset)}.mat-badge-large .mat-badge-content{width:var(--mat-badge-legacy-large-size-container-size, unset);height:var(--mat-badge-legacy-large-size-container-size, unset);min-width:var(--mat-badge-large-size-container-size, unset);min-height:var(--mat-badge-large-size-container-size, unset);line-height:var(--mat-badge-legacy-large-size-container-size, var(--mat-badge-large-size-container-size));padding:var(--mat-badge-large-size-container-padding);font-size:var(--mat-badge-large-size-text-size);margin:var(--mat-badge-large-size-container-offset)}.mat-badge-large.mat-badge-overlap .mat-badge-content{margin:var(--mat-badge-large-size-container-overlap-offset)}"]
    }]
  }], null, null);
})();
var MatBadge = class _MatBadge {
  /** The color of the badge. Can be `primary`, `accent`, or `warn`. */
  get color() {
    return this._color;
  }
  set color(value) {
    this._setColor(value);
    this._color = value;
  }
  /** The content for the badge */
  get content() {
    return this._content;
  }
  set content(newContent) {
    this._updateRenderedContent(newContent);
  }
  /** Message used to describe the decorated element via aria-describedby */
  get description() {
    return this._description;
  }
  set description(newDescription) {
    this._updateDescription(newDescription);
  }
  constructor(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    this._renderer = _renderer;
    this._animationMode = _animationMode;
    this._color = "primary";
    this.overlap = true;
    this.position = "above after";
    this.size = "medium";
    this._id = nextId++;
    this._isInitialized = false;
    this._interactivityChecker = inject(InteractivityChecker);
    this._document = inject(DOCUMENT);
    const appRef = inject(ApplicationRef);
    if (!badgeApps.has(appRef)) {
      badgeApps.add(appRef);
      const componentRef = createComponent(_MatBadgeStyleLoader, {
        environmentInjector: inject(EnvironmentInjector)
      });
      appRef.onDestroy(() => {
        badgeApps.delete(appRef);
        if (badgeApps.size === 0) {
          componentRef.destroy();
        }
      });
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const nativeElement = _elementRef.nativeElement;
      if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
        throw Error("matBadge must be attached to an element node.");
      }
      const matIconTagName = "mat-icon";
      if (nativeElement.tagName.toLowerCase() === matIconTagName && nativeElement.getAttribute("aria-hidden") === "true") {
        console.warn(`Detected a matBadge on an "aria-hidden" "<mat-icon>". Consider setting aria-hidden="false" in order to surface the information assistive technology.
${nativeElement.outerHTML}`);
      }
    }
  }
  /** Whether the badge is above the host or not */
  isAbove() {
    return this.position.indexOf("below") === -1;
  }
  /** Whether the badge is after the host or not */
  isAfter() {
    return this.position.indexOf("before") === -1;
  }
  /**
   * Gets the element into which the badge's content is being rendered. Undefined if the element
   * hasn't been created (e.g. if the badge doesn't have content).
   */
  getBadgeElement() {
    return this._badgeElement;
  }
  ngOnInit() {
    this._clearExistingBadges();
    if (this.content && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
      this._updateRenderedContent(this.content);
    }
    this._isInitialized = true;
  }
  ngOnDestroy() {
    if (this._renderer.destroyNode) {
      this._renderer.destroyNode(this._badgeElement);
      this._inlineBadgeDescription?.remove();
    }
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
  }
  /** Gets whether the badge's host element is interactive. */
  _isHostInteractive() {
    return this._interactivityChecker.isFocusable(this._elementRef.nativeElement, {
      ignoreVisibility: true
    });
  }
  /** Creates the badge element */
  _createBadgeElement() {
    const badgeElement = this._renderer.createElement("span");
    const activeClass = "mat-badge-active";
    badgeElement.setAttribute("id", `mat-badge-content-${this._id}`);
    badgeElement.setAttribute("aria-hidden", "true");
    badgeElement.classList.add(BADGE_CONTENT_CLASS);
    if (this._animationMode === "NoopAnimations") {
      badgeElement.classList.add("_mat-animation-noopable");
    }
    this._elementRef.nativeElement.appendChild(badgeElement);
    if (typeof requestAnimationFrame === "function" && this._animationMode !== "NoopAnimations") {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          badgeElement.classList.add(activeClass);
        });
      });
    } else {
      badgeElement.classList.add(activeClass);
    }
    return badgeElement;
  }
  /** Update the text content of the badge element in the DOM, creating the element if necessary. */
  _updateRenderedContent(newContent) {
    const newContentNormalized = `${newContent ?? ""}`.trim();
    if (this._isInitialized && newContentNormalized && !this._badgeElement) {
      this._badgeElement = this._createBadgeElement();
    }
    if (this._badgeElement) {
      this._badgeElement.textContent = newContentNormalized;
    }
    this._content = newContentNormalized;
  }
  /** Updates the host element's aria description via AriaDescriber. */
  _updateDescription(newDescription) {
    this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
    if (!newDescription || this._isHostInteractive()) {
      this._removeInlineDescription();
    }
    this._description = newDescription;
    if (this._isHostInteractive()) {
      this._ariaDescriber.describe(this._elementRef.nativeElement, newDescription);
    } else {
      this._updateInlineDescription();
    }
  }
  _updateInlineDescription() {
    if (!this._inlineBadgeDescription) {
      this._inlineBadgeDescription = this._document.createElement("span");
      this._inlineBadgeDescription.classList.add("cdk-visually-hidden");
    }
    this._inlineBadgeDescription.textContent = this.description;
    this._badgeElement?.appendChild(this._inlineBadgeDescription);
  }
  _removeInlineDescription() {
    this._inlineBadgeDescription?.remove();
    this._inlineBadgeDescription = void 0;
  }
  /** Adds css theme class given the color to the component host */
  _setColor(colorPalette) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove(`mat-badge-${this._color}`);
    if (colorPalette) {
      classList.add(`mat-badge-${colorPalette}`);
    }
  }
  /** Clears any existing badges that might be left over from server-side rendering. */
  _clearExistingBadges() {
    const badges = this._elementRef.nativeElement.querySelectorAll(`:scope > .${BADGE_CONTENT_CLASS}`);
    for (const badgeElement of Array.from(badges)) {
      if (badgeElement !== this._badgeElement) {
        badgeElement.remove();
      }
    }
  }
  static {
    this.\u0275fac = function MatBadge_Factory(t) {
      return new (t || _MatBadge)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(AriaDescriber), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatBadge,
      selectors: [["", "matBadge", ""]],
      hostAttrs: [1, "mat-badge"],
      hostVars: 20,
      hostBindings: function MatBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx.content)("mat-badge-disabled", ctx.disabled);
        }
      },
      inputs: {
        color: [InputFlags.None, "matBadgeColor", "color"],
        overlap: [InputFlags.HasDecoratorInputTransform, "matBadgeOverlap", "overlap", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "matBadgeDisabled", "disabled", booleanAttribute],
        position: [InputFlags.None, "matBadgePosition", "position"],
        content: [InputFlags.None, "matBadge", "content"],
        description: [InputFlags.None, "matBadgeDescription", "description"],
        size: [InputFlags.None, "matBadgeSize", "size"],
        hidden: [InputFlags.HasDecoratorInputTransform, "matBadgeHidden", "hidden", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBadge, [{
    type: Directive,
    args: [{
      selector: "[matBadge]",
      host: {
        "class": "mat-badge",
        "[class.mat-badge-overlap]": "overlap",
        "[class.mat-badge-above]": "isAbove()",
        "[class.mat-badge-below]": "!isAbove()",
        "[class.mat-badge-before]": "!isAfter()",
        "[class.mat-badge-after]": "isAfter()",
        "[class.mat-badge-small]": 'size === "small"',
        "[class.mat-badge-medium]": 'size === "medium"',
        "[class.mat-badge-large]": 'size === "large"',
        "[class.mat-badge-hidden]": "hidden || !content",
        "[class.mat-badge-disabled]": "disabled"
      },
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: AriaDescriber
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    color: [{
      type: Input,
      args: ["matBadgeColor"]
    }],
    overlap: [{
      type: Input,
      args: [{
        alias: "matBadgeOverlap",
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "matBadgeDisabled",
        transform: booleanAttribute
      }]
    }],
    position: [{
      type: Input,
      args: ["matBadgePosition"]
    }],
    content: [{
      type: Input,
      args: ["matBadge"]
    }],
    description: [{
      type: Input,
      args: ["matBadgeDescription"]
    }],
    size: [{
      type: Input,
      args: ["matBadgeSize"]
    }],
    hidden: [{
      type: Input,
      args: [{
        alias: "matBadgeHidden",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatBadgeModule = class _MatBadgeModule {
  static {
    this.\u0275fac = function MatBadgeModule_Factory(t) {
      return new (t || _MatBadgeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatBadgeModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [A11yModule, MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBadgeModule, [{
    type: NgModule,
    args: [{
      // Note: we _shouldn't_ have to import `_MatBadgeStyleLoader`,
      // but it seems to be necessary for tests.
      imports: [A11yModule, MatCommonModule, MatBadge, _MatBadgeStyleLoader],
      exports: [MatBadge, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/shared/components/navbar/navbar.component.ts
var _forTrack0 = ($index, $item) => $item.path;
function NavbarComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isActive(link_r1.path));
    \u0275\u0275property("routerLink", link_r1.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r1.label, " ");
  }
}
function NavbarComponent_Conditional_22_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 15)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isActive(link_r3.path));
    \u0275\u0275property("routerLink", link_r3.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r3.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", link_r3.label, " ");
  }
}
function NavbarComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "ul");
    \u0275\u0275repeaterCreate(2, NavbarComponent_Conditional_22_For_3_Template, 5, 5, "li", null, _forTrack0);
    \u0275\u0275elementStart(4, "li")(5, "a", 14)(6, "mat-icon");
    \u0275\u0275text(7, "admin_panel_settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Admin Panel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.navLinks);
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.router = inject(Router);
    this.isScrolled = signal(false);
    this.isMobileMenuOpen = signal(false);
    this.currentRoute = signal("");
    this.navLinks = [
      { label: "Home", path: "/", icon: "home" },
      { label: "News", path: "/news", icon: "article" },
      { label: "Notices", path: "/notices", icon: "notifications" },
      { label: "Gallery", path: "/gallery", icon: "photo_library" },
      { label: "About", path: "/about", icon: "info" },
      { label: "Contact", path: "/contact", icon: "contact_mail" }
    ];
  }
  ngOnInit() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        this.isScrolled.set(window.scrollY > 20);
      });
    }
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.currentRoute.set(event.urlAfterRedirects);
      this.isMobileMenuOpen.set(false);
    });
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
  }
  isActive(path) {
    if (path === "/") {
      return this.currentRoute() === "/";
    }
    return this.currentRoute().startsWith(path);
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 23, vars: 4, consts: [[1, "navbar"], [1, "container"], [1, "navbar-content"], ["routerLink", "/", 1, "navbar-brand"], [1, "brand-icon"], [1, "brand-text"], [1, "brand-title"], [1, "brand-subtitle"], [1, "nav-links"], [1, "navbar-actions"], ["routerLink", "/admin", "mat-stroked-button", "", "color", "primary", 1, "admin-btn"], ["mat-icon-button", "", 1, "menu-toggle", 3, "click"], [1, "mobile-menu"], [1, "nav-link", 3, "routerLink"], ["routerLink", "/admin", 1, "mobile-nav-link", "admin-link"], [1, "mobile-nav-link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "mat-icon", 4);
        \u0275\u0275text(5, "school");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "span", 6);
        \u0275\u0275text(8, "Daily Student");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 7);
        \u0275\u0275text(10, "Updates");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "ul", 8);
        \u0275\u0275repeaterCreate(12, NavbarComponent_For_13_Template, 3, 4, "li", null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "a", 10)(16, "mat-icon");
        \u0275\u0275text(17, "admin_panel_settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Admin ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_19_listener() {
          return ctx.toggleMobileMenu();
        });
        \u0275\u0275elementStart(20, "mat-icon");
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(22, NavbarComponent_Conditional_22_Template, 9, 0, "div", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("scrolled", ctx.isScrolled());
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.navLinks);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.isMobileMenuOpen() ? "close" : "menu");
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.isMobileMenuOpen() ? 22 : -1);
      }
    }, dependencies: [
      CommonModule,
      RouterModule,
      RouterLink,
      MatToolbarModule,
      MatButtonModule,
      MatAnchor,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatBadgeModule
    ], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  background: white;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  border-bottom: 1px solid #e0e0e0;\n  transition: box-shadow 0.3s ease;\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.navbar[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.navbar-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 70px;\n  gap: 20px;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  color: inherit;\n  flex-shrink: 0;\n}\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.navbar-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: #1976d2;\n}\n.navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1976d2;\n  font-family: "Poppins", sans-serif;\n}\n.navbar-brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #ff4081;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  gap: 4px;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 8px 14px;\n  color: #424242;\n  font-weight: 500;\n  font-size: 14px;\n  text-decoration: none;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  position: relative;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: #e3f2fd;\n  color: #1976d2;\n  text-decoration: none;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #1976d2;\n  background: #e3f2fd;\n  font-weight: 600;\n}\n.nav-links[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 20px;\n  height: 3px;\n  background: #1976d2;\n  border-radius: 2px;\n}\n.navbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.navbar-actions[_ngcontent-%COMP%]   .admin-btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.navbar-actions[_ngcontent-%COMP%]   .admin-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-right: 4px;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid #e0e0e0;\n  padding: 12px 0;\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 24px;\n  color: #424242;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  color: #1976d2;\n  text-decoration: none;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link.active[_ngcontent-%COMP%] {\n  color: #1976d2;\n  background: #e3f2fd;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-link.admin-link[_ngcontent-%COMP%] {\n  color: #ff4081;\n  border-top: 1px solid #eee;\n  margin-top: 8px;\n  padding-top: 16px;\n}\n@media (max-width: 960px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .admin-btn[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\shared\\components\\navbar\\navbar.component.ts", lineNumber: 32 });
})();

// src/app/shared/components/footer/footer.component.ts
var _forTrack02 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.path;
function FooterComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const social_r1 = ctx.$implicit;
    \u0275\u0275property("href", social_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", social_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(social_r1.icon);
  }
}
function FooterComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 24)(2, "mat-icon");
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r2.path);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", link_r2.label, " ");
  }
}
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.quickLinks = [
      { label: "Home", path: "/" },
      { label: "News", path: "/news" },
      { label: "Notices", path: "/notices" },
      { label: "Gallery", path: "/gallery" },
      { label: "About Us", path: "/about" },
      { label: "Contact", path: "/contact" }
    ];
    this.socialLinks = [
      { icon: "facebook", url: "#", label: "Facebook" },
      { icon: "twitter", url: "#", label: "Twitter" },
      { icon: "instagram", url: "#", label: "Instagram" },
      { icon: "youtube_activity", url: "#", label: "YouTube" }
    ];
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 1, consts: [[1, "footer"], [1, "footer-main"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "footer-brand"], [1, "brand-icon"], [1, "footer-desc"], [1, "social-links"], [1, "social-link", 3, "href"], [1, "col-lg-2", "col-md-6", "mb-4"], [1, "footer-heading"], [1, "footer-links"], [1, "col-lg-3", "col-md-6", "mb-4"], [1, "contact-info"], [1, "newsletter-text"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", 1, "newsletter-input"], ["mat-flat-button", "", "color", "accent", 1, "newsletter-btn"], [1, "footer-bottom"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2"], [1, "footer-bottom-links"], ["href", "#"], ["routerLink", "/admin/login"], [3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "mat-icon", 6);
        \u0275\u0275text(7, "school");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "h3");
        \u0275\u0275text(9, "Daily Student Updates");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p", 7);
        \u0275\u0275text(11, " Your go-to source for the latest school news, notices, events, and important announcements. Stay connected with your school community. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275repeaterCreate(13, FooterComponent_For_14_Template, 3, 3, "a", 9, _forTrack02);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10)(16, "h4", 11);
        \u0275\u0275text(17, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "ul", 12);
        \u0275\u0275repeaterCreate(19, FooterComponent_For_20_Template, 5, 2, "li", null, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 13)(22, "h4", 11);
        \u0275\u0275text(23, "Contact Info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "ul", 14)(25, "li")(26, "mat-icon");
        \u0275\u0275text(27, "location_on");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29, "123 School Road, Education City, ST 12345");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "li")(31, "mat-icon");
        \u0275\u0275text(32, "phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34, "+1 (234) 567-8900");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "li")(36, "mat-icon");
        \u0275\u0275text(37, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "info@dailystudentupdates.com");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "li")(41, "mat-icon");
        \u0275\u0275text(42, "access_time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44, "Mon - Fri: 8:00 AM - 4:00 PM");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "div", 13)(46, "h4", 11);
        \u0275\u0275text(47, "Stay Updated");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 15);
        \u0275\u0275text(49, "Subscribe to receive the latest news and notices directly to your inbox.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 16);
        \u0275\u0275element(51, "input", 17);
        \u0275\u0275elementStart(52, "button", 18);
        \u0275\u0275text(53, " Subscribe ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275element(54, "mat-divider");
        \u0275\u0275elementStart(55, "div", 19)(56, "div", 2)(57, "div", 20)(58, "p");
        \u0275\u0275text(59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 21)(61, "a", 22);
        \u0275\u0275text(62, "Privacy Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span");
        \u0275\u0275text(64, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "a", 22);
        \u0275\u0275text(66, "Terms of Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span");
        \u0275\u0275text(68, "|");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "a", 23);
        \u0275\u0275text(70, "Admin");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275repeater(ctx.socialLinks);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.quickLinks);
        \u0275\u0275advance(40);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " Daily Student Updates. All rights reserved.");
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, MatIconModule, MatIcon, MatButtonModule, MatButton, MatDividerModule, MatDivider], styles: ['\n\n.footer[_ngcontent-%COMP%] {\n  background: #1a237e;\n  color: rgba(255, 255, 255, 0.85);\n  margin-top: auto;\n}\n.footer-main[_ngcontent-%COMP%] {\n  padding: 60px 0 40px;\n}\n.footer-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.footer-brand[_ngcontent-%COMP%]   .brand-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: #ff4081;\n}\n.footer-brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n  font-family: "Poppins", sans-serif;\n}\n.footer-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 20px;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  transition: background 0.2s, transform 0.2s;\n}\n.social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  background: #ff4081;\n  transform: translateY(-2px);\n  text-decoration: none;\n}\n.footer-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: white;\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #ff4081;\n  display: inline-block;\n  font-family: "Poppins", sans-serif;\n}\n.footer-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  transition: color 0.2s;\n  text-decoration: none;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  color: #ff4081;\n}\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  text-decoration: none;\n  padding-left: 4px;\n}\n.contact-info[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.contact-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 12px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.7);\n}\n.contact-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #ff4081;\n  flex-shrink: 0;\n}\n.newsletter-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 16px;\n  line-height: 1.6;\n}\n.newsletter-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.newsletter-form[_ngcontent-%COMP%]   .newsletter-input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.newsletter-form[_ngcontent-%COMP%]   .newsletter-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.newsletter-form[_ngcontent-%COMP%]   .newsletter-input[_ngcontent-%COMP%]:focus {\n  border-color: #ff4081;\n}\n.newsletter-form[_ngcontent-%COMP%]   .newsletter-btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 10px;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  background: rgba(0, 0, 0, 0.2);\n}\n.footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\shared\\components\\footer\\footer.component.ts", lineNumber: 15 });
})();

// src/app/pages/public/public-layout/public-layout.component.ts
var PublicLayoutComponent = class _PublicLayoutComponent {
  static {
    this.\u0275fac = function PublicLayoutComponent_Factory(t) {
      return new (t || _PublicLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicLayoutComponent, selectors: [["app-public-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "main-content"]], template: function PublicLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "app-footer");
      }
    }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=public-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicLayoutComponent, { className: "PublicLayoutComponent", filePath: "src\\app\\pages\\public\\public-layout\\public-layout.component.ts", lineNumber: 28 });
})();
export {
  PublicLayoutComponent
};
//# sourceMappingURL=chunk-QBLP6TWK.js.map
