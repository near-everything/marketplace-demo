import NearProfile from "@/components/near-profile";
import { useTRPC } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_authenticated/dashboard")({
  loader: ({ context }) => {
    return {
      session: context.session,
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { session } = Route.useLoaderData();
  const trpc = useTRPC();
  const privateData = useQuery(trpc.privateData.queryOptions());

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-lg text-muted-foreground">Welcome back, {session?.user.name}</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card - Takes up 1 column */}
        <div className="lg:col-span-1">
          <NearProfile variant="card" showAvatar={true} showName={true} />
        </div>

        {/* Main Content Area - Takes up 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Private Data Card */}
          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-4">Private Data</h2>
            <p className="text-muted-foreground">
              {privateData.data?.message ?? "Failed to Load"}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
