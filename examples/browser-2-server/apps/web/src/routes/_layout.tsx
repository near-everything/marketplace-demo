import Header from "@/components/header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
