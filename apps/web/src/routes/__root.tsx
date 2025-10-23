import Loader from "@/components/loader";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import appCss from "../index.css?url";
import { queryClient, orpc } from "@/utils/orpc";

export interface RouterAppContext {
  orpc: typeof orpc;
  queryClient: typeof queryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "marketplace-demo",
      },
      {
        name: "description",
        content: "marketplace-demo is a web application",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  }),
});


function RootComponent() {
  // If we want some sort of loading...
  // const isFetching = useRouterState({
  //   select: (s) => s.isLoading,
  // });

  return (
    <>
      <HeadContent />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        storageKey="vite-ui-theme"
      >
        <QueryClientProvider client={queryClient}>
          <div className="grid grid-rows-[auto_1fr] h-svh touch-manipulation">
            {/* {isFetching && <Loader />} */}
            <Outlet />
          </div>
        </QueryClientProvider>
        <Toaster richColors />
      </ThemeProvider>
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
