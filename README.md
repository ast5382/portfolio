## Tech Stack (curr)

- Next.js 15 (App Router) with React 19

- Material UI (MUI v7) + Emotion for component styling

- Tailwind CSS v4 with PostCSS

- Google Fonts via next/font

- ESLint + Prettier for linting and formatting
(Express is listed in dependencies but not currently used by the frontend.)

## Build / Run

- Dev: npm run dev

- Build: npm run build

- Start: npm run start

- Run from the project root (…/CodingProjects/portfolio).

## What’s Already Working

- Next.js App Router structure in place (app/layout.js, app/page.js).

- Global fonts correctly set up through next/font/google.

- Tailwind + PostCSS pipeline installed and functional.

- Basic homepage layout created using MUI Grid, Typography, and a header component.

- ESLint + Prettier operational.

## Current Issues / Tasks Completed

- Hydration errors identified, caused by missing or incorrect MUI SSR ThemeRegistry integration.

- Grid component had incorrect props (size={8} and maxWidth on Grid); fixed with proper MUI layout props.

- Planned cleanup of Tailwind + MUI style overlap and ensuring consistent SSR output.

- Progress made toward adding a proper ThemeProvider / Emotion cache to eliminate hydration mismatches.


-----------------------
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
