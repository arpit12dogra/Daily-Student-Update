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
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QCDNTCDG.js";

// src/app/pages/public/about/about.component.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.name;
function AboutComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 22)(2, "div", 23)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", feature_r1.bg);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", feature_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(feature_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.desc);
  }
}
function AboutComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 26)(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r2.initial);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.role);
  }
}
var AboutComponent = class _AboutComponent {
  constructor() {
    this.features = [
      { icon: "article", color: "#1976d2", bg: "#e3f2fd", title: "Latest News", desc: "Stay updated with real-time school news and announcements." },
      { icon: "notifications", color: "#f44336", bg: "#fce4ec", title: "Important Notices", desc: "Never miss critical notices and official communications." },
      { icon: "photo_library", color: "#43a047", bg: "#e8f5e9", title: "Photo Gallery", desc: "Relive school events through our curated photo gallery." },
      { icon: "search", color: "#7b1fa2", bg: "#f3e5f5", title: "Easy Search", desc: "Find any news or notice quickly with our powerful search." }
    ];
    this.team = [
      { name: "John Doe", role: "Editor-in-Chief", initial: "JD" },
      { name: "Jane Smith", role: "Web Developer", initial: "JS" },
      { name: "Mike Johnson", role: "Content Writer", initial: "MJ" },
      { name: "Sarah Williams", role: "Photographer", initial: "SW" }
    ];
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(t) {
      return new (t || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 0, consts: [[1, "page-header"], [1, "container"], [1, "about-page"], [1, "about-hero"], [1, "row", "align-items-center"], [1, "col-lg-7"], [2, "font-size", "2.2rem", "font-weight", "800", "color", "#1a237e", "margin-bottom", "16px"], [2, "font-size", "1.1rem", "color", "#424242", "line-height", "1.8", "margin-bottom", "24px"], [2, "color", "#757575", "line-height", "1.8", "margin-bottom", "24px"], ["routerLink", "/contact", "mat-raised-button", "", "color", "primary"], [1, "col-lg-5", "text-center", "d-none", "d-lg-block"], [2, "font-size", "180px", "width", "180px", "height", "180px", "color", "#1976d2", "opacity", "0.15"], [1, "mb-5"], [1, "section-title", "text-center"], [1, "section-subtitle", "text-center"], [1, "row", "g-4", "mt-2"], [1, "col-lg-3", "col-md-6"], [1, "stats-banner"], [1, "row"], [1, "col-md-3", "col-6"], [1, "stat-num"], [1, "stat-lbl"], [1, "feature-card"], [1, "feature-icon"], [2, "font-size", "16px", "font-weight", "600", "margin-bottom", "8px"], [2, "font-size", "14px", "color", "#757575", "margin", "0"], [1, "team-card"], [1, "team-avatar"], [2, "font-size", "16px", "font-weight", "600", "margin-bottom", "4px"], [2, "font-size", "13px", "color", "#757575", "margin", "0"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1")(3, "mat-icon");
        \u0275\u0275text(4, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " About Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Learn more about Daily Student Updates");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 2)(9, "div", 1)(10, "div", 3)(11, "div", 4)(12, "div", 5)(13, "h2", 6);
        \u0275\u0275text(14, " Your School's Digital News Platform ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p", 7);
        \u0275\u0275text(16, " Daily Student Updates is a comprehensive digital platform designed to keep students, parents, and faculty connected with the latest news, events, and important announcements from our school. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 8);
        \u0275\u0275text(18, " Founded with a mission to bridge the information gap in school communities, we provide timely, accurate and relevant content that matters to everyone in our school ecosystem. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 9)(20, "mat-icon");
        \u0275\u0275text(21, "contact_mail");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Get in Touch ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10)(24, "mat-icon", 11);
        \u0275\u0275text(25, "school");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "div", 12)(27, "h2", 13);
        \u0275\u0275text(28, "What We Offer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p", 14);
        \u0275\u0275text(30, "Everything you need to stay connected");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 15);
        \u0275\u0275repeaterCreate(32, AboutComponent_For_33_Template, 9, 7, "div", 16, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 17)(35, "div", 18)(36, "div", 19)(37, "span", 20);
        \u0275\u0275text(38, "500+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 21);
        \u0275\u0275text(40, "Articles Published");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 19)(42, "span", 20);
        \u0275\u0275text(43, "50+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 21);
        \u0275\u0275text(45, "Categories");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 19)(47, "span", 20);
        \u0275\u0275text(48, "10K+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 21);
        \u0275\u0275text(50, "Monthly Readers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 19)(52, "span", 20);
        \u0275\u0275text(53, "5+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "span", 21);
        \u0275\u0275text(55, "Years Active");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(56, "div", 12)(57, "h2", 13);
        \u0275\u0275text(58, "Our Team");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 14);
        \u0275\u0275text(60, "The people behind Daily Student Updates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 15);
        \u0275\u0275repeaterCreate(62, AboutComponent_For_63_Template, 8, 3, "div", 16, _forTrack1);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(32);
        \u0275\u0275repeater(ctx.features);
        \u0275\u0275advance(30);
        \u0275\u0275repeater(ctx.team);
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink, MatCardModule, MatButtonModule, MatAnchor, MatIconModule, MatIcon, MatDividerModule], styles: ['\n\n.about-page[_ngcontent-%COMP%] {\n  padding: 60px 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.about-hero[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-radius: 20px;\n  padding: 60px 40px;\n  margin-bottom: 60px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 32px 24px;\n  border: 1px solid #e0e0e0;\n  text-align: center;\n  height: 100%;\n}\n.feature-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px;\n}\n.feature-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.team-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  border: 1px solid #e0e0e0;\n  text-align: center;\n}\n.team-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1976d2,\n      #42a5f5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 12px;\n  color: white;\n  font-size: 28px;\n  font-weight: 700;\n  font-family: "Poppins", sans-serif;\n}\n.stats-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1976d2,\n      #1565c0);\n  border-radius: 20px;\n  padding: 50px 40px;\n  color: white;\n  text-align: center;\n  margin: 60px 0;\n}\n.stat-num[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  display: block;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=about.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\pages\\public\\about\\about.component.ts", lineNumber: 28 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-H47RLVX4.js.map
