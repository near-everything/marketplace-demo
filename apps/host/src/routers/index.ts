import type { RouterClient } from 'every-plugin/orpc'
import { os } from 'every-plugin/orpc'
import type { Plugins } from '../runtime'

export function createRouter(plugins: Plugins) {
  return {
    health: os
      .route({ method: 'GET', path: '/health' })
      .handler(() => 'OK'),
    ...plugins.plugin.router,
  } as const
}

export type AppRouter = ReturnType<typeof createRouter>
export type AppRouterClient = RouterClient<AppRouter>
