import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import { orpc, queryClient } from "./utils/orpc";

// Create the router instance
export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload: "intent",
    context: {
      orpc,
      queryClient,
    },
  });

  // Setup SSR query integration
  setupRouterSsrQueryIntegration({
    router,
    queryClient,
  });

  return router;
}


// Register the router for TypeScript
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
