# gateway

This is based on this [Railway Template](https://github.com/railwayapp-templates/caddy-reverse-proxy/tree/main).

The main domain (`demo.everything.market`) points to this proxy server, which then handles the following routing:

- `/rpc/*`: [Marketplace Backend](../server) - RPC API endpoints
- `/*`: [Marketplace Web App](../web) - Next.js frontend with ORPC client

## Railway Environment Variables

Set these environment variables on your Railway Gateway service:

```bash
# Gateway Configuration
PORT=443

# Backend (Server) Service URLs
SERVER_DOMAIN=b2sserver-production.up.railway.app
SERVER_PORT=443

# Web (Frontend) Service URLs
WEB_DOMAIN=web-production-15e3b.up.railway.app
```

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
