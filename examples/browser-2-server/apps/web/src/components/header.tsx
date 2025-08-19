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
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <nav className="flex items-center gap-8">
          {links.map(({ to, label }) => {
            return (
              <Link 
                key={to} 
                to={to}
                className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground [&.active]:text-foreground [&.active]:font-semibold"
              >
                {label}
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                healthCheck.data ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
            <span className="text-sm font-medium text-muted-foreground">
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
    </header>
  );
}
