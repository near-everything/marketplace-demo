import { QueryCache, QueryClient } from "@tanstack/react-query";
import { createORPCClient } from "@orpc/client";
import type { RouterClient } from "@orpc/server";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";
import { BatchLinkPlugin } from "@orpc/client/plugins";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { createIsomorphicFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { onError } from "@orpc/server";
import type { AppRouter } from "../../../host/src/routers";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(error.message, {
        action: {
          label: "retry",
          onClick: () => {
            queryClient.invalidateQueries();
          },
        },
      });
    },
  }),
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

/**
 * This creates an isomorphic oRPC client that works correctly in both
 * SSR (server-side rendering) and client-side environments.
 */
const getORPCClient = createIsomorphicFn()
  .server(() => {
    // Server-side: Use full server URL and forward headers/cookies
    const link = new RPCLink({
      url: `${process.env.VITE_SERVER_URL}/rpc`,
      headers: () => getRequestHeaders(), // Forward request headers
      interceptors: [
        onError((error) => {
          console.error("oRPC Server Error:", error);
          throw error;
        }),
      ],
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: "include",
        });
      },
    });

    return createORPCClient(link);
  })
  .client(() => {
    // Client-side: Use browser relative URL with cookies
    const link = new RPCLink({
      url: `${window.location.origin}/rpc`,
      plugins: [
        new BatchLinkPlugin({
          // Batch requests to reduce network overhead
          exclude: ({ path }) => path[0] === 'sse', // Don't batch SSE calls
          groups: [{
            condition: () => true,
            context: {},
          }],
        }),
      ],
      interceptors: [
        onError((error) => {
          console.error("oRPC Client Error:", error);
        }),
      ],
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: "include",
        });
      },
    });

    return createORPCClient(link);
  });

export const client: RouterClient<AppRouter> = getORPCClient();

export const orpc = createTanstackQueryUtils(client);
