import { describe, it, expect } from "vitest";
import { sanitizeText, escapeHtml } from "../src/lib/sanitize";

describe("Sanitize Helpers", () => {
  it("strips harmful script tags and javascript pseudo-protocols", () => {
    const malicious = '<script>alert("hacked")</script>Hello World';
    expect(sanitizeText(malicious)).toBe("Hello World");

    const iframeAttack = '<iframe src="evil.com"></iframe>Clean';
    expect(sanitizeText(iframeAttack)).toBe("Clean");

    const jsProtocol = 'javascript:alert(1)';
    expect(sanitizeText(jsProtocol)).toBe("alert(1)");
  });

  it("escapes raw HTML entities", () => {
    const raw = '<div class="test">& \'Hello\'</div>';
    const escaped = escapeHtml(raw);
    expect(escaped).toBe("&lt;div class=&quot;test&quot;&gt;&amp; &#039;Hello&#039;&lt;/div&gt;");
  });
});
