import { createFileRoute } from '@tanstack/react-router'

async function handle({ request }: { request: Request }) {
  // Forward the RPC request to the Hono backend server
  const url = new URL(request.url)
  const serverUrl = process.env.SERVER_URL || import.meta.env.VITE_SERVER_URL;
  const targetUrl = `${serverUrl}${url.pathname.replace('/api', '')}`

  return fetch(targetUrl, {
    method: request.method,
    headers: {
      ...Object.fromEntries(request.headers),
      // Forward cookies and credentials
      'cookie': request.headers.get('cookie') || '',
    },
    body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
  })
}

export const Route = createFileRoute('/api/rpc/$')({
  server: {
    handlers: {
      HEAD: handle,
      GET: handle,
      POST: handle,
      PUT: handle,
      PATCH: handle,
      DELETE: handle,
    },
  },
})
