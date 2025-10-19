export interface Env {
  // Cloudflare Workers environment variables
  DATABASE_URL?: string
  GOOGLE_CLIENT_ID?: string
  GOOGLE_CLIENT_SECRET?: string
  SESSION_SECRET?: string
  ENVIRONMENT?: string
}