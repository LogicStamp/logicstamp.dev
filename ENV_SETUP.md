# Environment Variables

Create a `.env.local` file in the root directory for environment-specific configuration.

## Site Configuration

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Optional: Email Service (Future)

When you need to add email functionality, you can add your email service API key here:

```env
# Example for Resend
RESEND_API_KEY=your_resend_api_key

# Or for SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
```
