# gateway

This is based on this [Railway Template](https://github.com/railwayapp-templates/caddy-reverse-proxy/tree/main).

The main domain (`demo.everything.market`) points to this proxy server, which then handles the following routing:

- `/rpc/*`: [Marketplace Backend](../server) - RPC API endpoints
- `/*`: [Marketplace Web App](../web) - Next.js frontend with ORPC client

## Railway Environment Variables

Set these environment variables on your Railway Gateway service (using Railway internal networking):

```bash
# Gateway Configuration
PORT=443

# Backend (Server) Service - Railway Internal
SERVER_DOMAIN=b2sserver.railway.internal
SERVER_PORT=3000

# Frontend (Web) Service - Railway Internal
WEB_DOMAIN=marketplace-plugin.railway.internal
WEB_PORT=3000
```

**Note:** Port 3000 is Railway's default. Check your actual service settings if different.

## Architecture

```
User → demo.everything.market
         ↓
    Railway Gateway (Caddy)
         ↓
    ├─ /          → Marketplace Web (TanStack Start)
    └─ /rpc/*     → Marketplace Server (Hono + ORPC)
```

## Authentication Flow

With this gateway setup:
- Cookies are **same-site** (much more secure!)
- Auth works with `sameSite: "lax"` (prevents CSRF)
- No more cross-domain cookie issues
- Frontend and backend share the same origin

## Deployment

1. Deploy gateway service from this directory
2. Add `demo.everything.market` as custom domain
3. Update DNS to point to Railway gateway URL
4. Update backend and web services with new environment variables
5. Redeploy all services
