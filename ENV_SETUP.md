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

## GitHub API Configuration (Optional)

To avoid rate limiting on GitHub API calls (60 requests/hour without token, 5000/hour with token):

```env
# Optional: GitHub personal access token for higher rate limits (server-side only, kept secure)
# Create one at: https://github.com/settings/tokens
# Select only "public_repo" scope for public repository stats
# Example: GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_TOKEN=ghp_your_github_token_here
```

**Note:** The token is stored server-side only (no `NEXT_PUBLIC_` prefix) to keep it secure. The API route at `/api/github-stats` handles all GitHub API calls with 5-minute caching and request deduplication to prevent rate limit issues.