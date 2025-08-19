import NearProfile from "@/components/near-profile";
import { createFileRoute, useRouteContext } from "@tanstack/react-router";

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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg mb-8">Welcome {session?.user.name}</p>

      <div className="bg-card rounded-lg p-6 border">
        <h2 className="text-xl font-semibold mb-4">NEAR Profile</h2>
        <NearProfile showAvatar={true} showName={true} className="mb-4" />
      </div>
    </div>
  );
}
