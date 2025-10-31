# marketplace-demo

A NEAR-powered marketplace demo showcasing multi-vendor e-commerce with authentication, product management, and analytics.

Built with React, Node.js, oRPC, Better-Auth, and NEAR Protocol integration.

## Setup

1. `docker compose up -d` - Start PostgreSQL database
2. `bun db:migrate` - Run database migrations
3. `bun dev` - Start both web client and server

## Tech Stack

- **Frontend**: React + TanStack Router + TanStack Query
- **Backend**: Node.js + Hono.js + oRPC
- **Auth**: Better-Auth + NEAR Protocol
- **Database**: PostgreSQL + Drizzle ORM
- **Platform**: NEAR blockchain integration

## Available Scripts

- `bun dev` - Start development servers
- `bun dev:web` - Start frontend only
- `bun dev:server` - Start backend only
- `bun build` - Build all applications
- `bun db:migrate` - Run database migrations
- `bun db:studio` - Open database UI
