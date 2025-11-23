# Environment Variables

Create a `.env.local` file in the root directory for environment-specific configuration.

## Site Configuration

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Supabase Configuration

Get these from: https://supabase.com/dashboard/project/_/settings/api

```env
# For the API route (server)
SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY
```
