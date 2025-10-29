#!/bin/sh

set -euo pipefail

# strip https:// from domains if necessary
export WEB_HOST=${WEB_DOMAIN##*://}
export SERVER_HOST=${SERVER_DOMAIN##*://}

echo using SERVER: ${SERVER_DOMAIN} with port: ${SERVER_PORT}
echo using WEB: ${WEB_DOMAIN}

exec caddy run --config Caddyfile --adapter caddyfile 2>&1
