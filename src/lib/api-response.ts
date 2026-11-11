import { NextResponse } from "next/server";

export function apiSuccess<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

export function apiError(message: string, status = 400, errors?: unknown) {
  return NextResponse.json(
    {
      success: false,
      error: message,
      ...(errors ? { details: errors } : {}),
    },
    { status }
  );
}

export function apiUnauthorized(message = "Authentication required") {
  return apiError(message, 401);
}

export function apiForbidden(message = "You do not have permission to perform this action") {
  return apiError(message, 403);
}

export function apiNotFound(message = "Resource not found") {
  return apiError(message, 404);
}

