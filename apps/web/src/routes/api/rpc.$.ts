import { createFileRoute } from '@tanstack/react-router'

async function handle({ request }: { request: Request }) {
  console.log('🔥 HANDLE CALLED for:', request.url);

  const url = new URL(request.url)
  const serverUrl = process.env.VITE_SERVER_URL || import.meta.env.VITE_SERVER_URL;
  const targetUrl = `${serverUrl}${url.pathname.replace('/api', '')}`

  console.log('🎯 Forwarding to:', targetUrl);

  // Forward headers
  const forwardHeaders: Record<string, string> = {
    'Content-Type': request.headers.get('content-type') || 'application/json',
    'Cookie': request.headers.get('cookie') || '',
  };

  // Forward authorization if present
  const auth = request.headers.get('authorization');
  if (auth) forwardHeaders['Authorization'] = auth;

  const response = await fetch(targetUrl, {
    method: request.method,
    headers: forwardHeaders,
    body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
  });

  console.log('📥 Response status:', response.status);

  return response;
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
