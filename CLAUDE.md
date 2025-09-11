# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 application with Supabase authentication using the App Router pattern. The project uses TypeScript, Tailwind CSS, and shadcn/ui components.

### Key Directories

- `app/` - Next.js App Router pages and layouts
  - `app/auth/` - Authentication pages (login, sign-up, forgot password, etc.)
  - `app/protected/` - Protected routes requiring authentication
- `lib/` - Shared utilities and configurations
  - `lib/supabase/` - Supabase client configurations for different environments
    - `client.ts` - Browser client
    - `server.ts` - Server client 
    - `middleware.ts` - Session management utilities
- `middleware.ts` - Next.js middleware for session handling

### Authentication Flow

- Uses Supabase SSR package for cookie-based authentication
- Middleware runs on all routes except static assets and images
- Session updates handled automatically via `updateSession` utility
- Protected routes use layout-based protection in `app/protected/`

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Auth**: Supabase with cookie-based sessions
- **Styling**: Tailwind CSS with shadcn/ui components
- **State**: React 19 with built-in hooks
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

### Environment Variables Required

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase publishable key

### Development Notes

- Path aliases configured: `@/*` maps to project root
- TypeScript strict mode enabled
- ESLint configured with Next.js rules
- Uses pnpm as package manager (based on existing setup)