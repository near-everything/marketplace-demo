# Better NEAR Auth - Browser to Server Example

This example demonstrates how to implement Sign in with NEAR (SIWN) authentication between a browser application and server using the `better-near-auth` plugin for Better Auth.

## Features

- **NEAR Wallet Authentication** - Sign in with NEAR using NEP-413 standard
- **Better Auth Integration** - Full-featured authentication with session management
- **FastinTEAR Integration** - Browser wallet connectivity via FastinTEAR
- **Profile Integration** - Automatic fetching of user profiles from NEAR Social
- **TypeScript** - Full type safety across client and server
- **Modern Stack** - React, TanStack Router, Hono, Drizzle ORM

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Environment Setup

Copy the example environment files and configure them:

```bash
# Server environment
cp apps/server/.env.example apps/server/.env
# Web environment  
cp apps/web/.env.example apps/web/.env
```

### 3. Database Setup

Start the Postgres service:

```bash
docker compose up -d
```

### 4. Start the Development Server

```bash
bun run dev
```

- **Web App**: [http://localhost:3001](http://localhost:3001)
- **API Server**: [http://localhost:3000](http://localhost:3000)

## How It Works

### Authentication Flow

1. **User clicks "Sign in with NEAR"** in the browser application
2. **FastinTEAR wallet connection** - The browser loads FastinTEAR to connect NEAR wallets
3. **Nonce generation** - Client requests a cryptographic nonce from the server
4. **Message signing** - User signs a NEP-413 compliant message with their NEAR wallet
5. **Signature verification** - Server verifies the signature using `near-sign-verify`
6. **Session creation** - Server creates a session and links the NEAR account to the user
7. **Profile fetching** - Client automatically fetches user profile from NEAR Social

### Key Components

- **Server Plugin** (`apps/server/src/lib/auth.ts`) - Better Auth configuration with `siwn` plugin
- **Client Plugin** (`apps/web/src/lib/auth-client.ts`) - Client-side Better Auth with `siwnClient`
- **Database Schema** (`apps/server/src/db/schema/auth.ts`) - Extended schema with `nearAccount` table
- **NEAR Profile Component** (`apps/web/src/components/near-profile.tsx`) - Displays NEAR Social profiles
- **FastinTEAR Integration** (`apps/web/index.html`) - Browser wallet connectivity

## Project Structure

```cmd
browser-2-server/
├── apps/
│   ├── web/                          # React frontend
│   │   ├── src/components/
│   │   │   ├── sign-in-form.tsx      # Enhanced with NEAR sign-in
│   │   │   ├── user-menu.tsx         # Shows NEAR profile info
│   │   │   └── near-profile.tsx      # NEAR Social profile component
│   │   └── src/lib/auth-client.ts    # Better Auth client with siwnClient
│   └── server/                       # Hono backend
│       ├── src/db/schema/auth.ts     # Database schema with nearAccount table
│       └── src/lib/auth.ts           # Better Auth server with siwn plugin
```

## Configuration Options

### Server Configuration

The `siwn` plugin supports various configuration options:

```typescript
siwn({
  recipient: "localhost:3001",        // NEP-413 recipient domain
  anonymous: true,                    // Allow sign-in without email
  emailDomainName: "example.com",    // Email domain for user accounts
  requireFullAccessKey: false,        // Allow function call keys
})
```

### Client Configuration

```typescript
siwnClient({
  domain: "localhost:3001",          // Must match server recipient
})
```

## Available Scripts

- `bun dev` - Start both web and server in development
- `bun dev:web` - Start only the web application
- `bun dev:server` - Start only the server
- `bun build` - Build all applications
- `bun db:push` - Apply database schema changes
- `bun db:studio` - Open Drizzle Studio database UI

## Learn More

- [Better Auth Documentation](https://better-auth.com)
- [NEAR Protocol](https://near.org)
- [NEP-413: NEAR Sign In](https://github.com/near/NEPs/blob/master/neps/nep-0413.md)
- [FastinTEAR Wallet](https://github.com/fastnear/fastintear)
