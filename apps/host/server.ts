import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { createRsbuild, logger } from '@rsbuild/core';
import config from './rsbuild.config';

async function startServer() {
  const port = 3001;
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const rsbuild = await createRsbuild({
      cwd: import.meta.dirname,
      rsbuildConfig: config,
    });

    await rsbuild.startDevServer();
  } else {
    const app = new Hono();

    app.use('/*', serveStatic({ root: './dist' }));
    app.get('*', serveStatic({ root: './dist', path: 'index.html' }));

    serve({ fetch: app.fetch, port }, (info) => {
      logger.info(`Host production server running at http://localhost:${info.port}`);
    });
  }
}

startServer().catch((err) => {
  logger.error('Failed to start server');
  logger.error(err);
  process.exit(1);
});
