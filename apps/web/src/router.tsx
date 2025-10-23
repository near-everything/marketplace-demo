import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { orpc, queryClient } from "./utils/orpc";

// Create the router instance
export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload: "intent",
    context: {
      orpc,
      queryClient,
    },
  });
}


// Register the router for TypeScript
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
