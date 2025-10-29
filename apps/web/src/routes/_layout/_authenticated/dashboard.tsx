import UserProfile from "@/components/user-profile";
import AccountLinking from "@/components/account-linking";
import { Guestbook } from "@/components/guestbook";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { authClient } from "@/lib/auth-client";
import { orpc } from "@/utils/orpc";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_layout/_authenticated/dashboard")({
  loader: async ({ context }) => {
    const queryOptions = context.orpc.privateData.queryOptions();
    return context.queryClient.ensureQueryData(queryOptions);
  },
  errorComponent: ({ error, reset }) => (
    <div className="container mx-auto p-4 sm:p-6 max-w-7xl">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard</h1>
      </div>
      <div className="bg-destructive/10 border border-destructive rounded-lg p-6">
        <h2 className="text-xl font-semibold text-destructive mb-2">
          Failed to Load Dashboard
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          {error.message || "An error occurred while loading your dashboard data."}
        </p>
        <Button onClick={reset} variant="outline">
          Try Again
        </Button>
      </div>
    </div>
  ),
  component: RouteComponent,
});

function RouteComponent() {
  const { orpc, queryClient } = Route.useRouteContext();
  const initialData = Route.useLoaderData();
  const queryOptions = orpc.privateData.queryOptions();

  const privateData = useQuery({
    ...queryOptions,
    initialData: initialData,
  });

  const { data: session } = authClient.useSession();

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-7xl">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-base sm:text-lg text-muted-foreground">Welcome back, {session?.user.name}</p>
      </div>

      {/* Main Content Grid - Stack on mobile, side-by-side on larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Profile Card - Full width on mobile, 1 column on desktop */}
        <div className="lg:col-span-1 order-1 lg:order-1 space-y-4 sm:space-y-6">
          <UserProfile />
          <AccountLinking />
        </div>

        {/* Main Content Area - Full width on mobile, 2 columns on desktop */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-2">
          {/* Private Data Card */}
          <div className="bg-card rounded-lg border p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Private Data</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              {privateData.data?.message ?? "Failed to Load"}
            </p>
          </div>

          {/* Guestbook Card */}
          <Guestbook />
        </div>
      </div>
    </div>
  );
}
