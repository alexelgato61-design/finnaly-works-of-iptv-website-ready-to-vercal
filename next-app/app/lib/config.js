// Shared API URL configuration
// Uses relative URL '/api' for Next.js proxy in both dev and production
// The proxy destination is configured in next.config.js rewrites
export function getApiUrl() {
  // Always use relative URL - Next.js proxy handles routing to backend
  // In development: /api -> localhost:5000/api
  // In production: /api -> your backend API URL (set in Vercel env vars)
  return '/api';
}

export function getApiBase() {
  const apiUrl = getApiUrl();
  return apiUrl.replace('/api', '');
}

// Legacy exports - kept for compatibility but components should use getApiUrl() function
export const API_URL = getApiUrl();
export const API_BASE = getApiBase();
