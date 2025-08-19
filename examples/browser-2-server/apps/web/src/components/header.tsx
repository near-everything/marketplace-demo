import { Link } from "@tanstack/react-router";
import { useTRPC } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";

import { ModeToggle } from "./mode-toggle";
import UserMenu from "./user-menu";

export default function Header() {
  const trpc = useTRPC();
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());
  
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Demo" },
  ];

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        <nav className="flex gap-4 text-lg">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} to={to}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          {/* API Status Indicator */}
          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${
                healthCheck.data ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="text-xs text-muted-foreground">
              {healthCheck.isLoading
                ? "Checking..."
                : healthCheck.data
                ? "API Connected"
                : "API Disconnected"}
            </span>
          </div>
          <ModeToggle />
          <UserMenu />
        </div>
      </div>
      <hr />
    </div>
  );
}
