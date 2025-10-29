import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { orpc, queryClient } from "@/utils/orpc";
import { QueryClientProvider } from "@tanstack/react-query";
import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext
} from "@tanstack/react-router";
import appCss from "../index.css?url";

export interface RouterAppContext {
  orpc: typeof orpc;
  queryClient: typeof queryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  notFoundComponent: () => <p>Not Found</p>,
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
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          storageKey="vite-ui-theme"
        >
          <QueryClientProvider client={queryClient}>
            <div className="grid grid-rows-[auto_1fr] h-svh touch-manipulation">
              {children}
            </div>
          </QueryClientProvider>
          <Toaster richColors />
        </ThemeProvider>
        <TanStackDevtools />
        <Scripts />
      </body>
    </html>
  );
}
