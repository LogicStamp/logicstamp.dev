# LogicStamp Landing Page

A standalone Next.js landing page application.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables (if needed):

Create a `.env.local` file in the root directory for any environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
standalone-landing/
├── src/
│   ├── app/              # Next.js app directory (pages and routes)
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   └── styles/           # Global styles
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Features

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Responsive design
- Dark mode support

## License

Private - All rights reserved

