import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { Role } from "@prisma/client";

export async function getAuthSession() {
  return await getServerSession(authOptions);
}

export async function requireAuth() {
  const session = await getAuthSession();
  if (!session?.user) {
    return null;
  }
  return session.user;
}

export async function requireAdmin() {
  const user = await requireAuth();
  if (!user || user.role !== Role.ADMIN) {
    return null;
  }
  return user;
}

export function isUserAdmin(user: { role: Role } | null | undefined): boolean {
  return user?.role === Role.ADMIN;
}

