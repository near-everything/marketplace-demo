import { RPCLink } from '@orpc/client/fetch';
import { createORPCClient } from "@orpc/client";
import { QueryClient } from "@tanstack/react-query";
import { createORPCReactQueryUtils } from "@orpc/react-query";

import type { RouterClient } from "@orpc/server";
import type { AppRouter } from "../../../server/src/routers";

const orpcLink = new RPCLink({
  url: "/api/rpc",
  headers: () => ({
    "Content-Type": "application/json",
  }),
});

export const orpc: RouterClient<AppRouter> = createORPCClient(orpcLink);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

export const orpcUtils = createORPCReactQueryUtils(orpc);
