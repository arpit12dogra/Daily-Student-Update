import { describe, it, expect } from "vitest";
import { isUserAdmin } from "../src/lib/auth-guard";
import { Role } from "@prisma/client";

describe("Role-Based Access Control", () => {
  it("recognizes ADMIN role as an administrator", () => {
    const adminUser = { role: Role.ADMIN };
    expect(isUserAdmin(adminUser)).toBe(true);
  });

  it("strictly rejects EDITOR from admin-only privileges", () => {
    const editorUser = { role: Role.EDITOR };
    expect(isUserAdmin(editorUser)).toBe(false);
  });

  it("rejects null or undefined users", () => {
    expect(isUserAdmin(null)).toBe(false);
    expect(isUserAdmin(undefined)).toBe(false);
  });
});

