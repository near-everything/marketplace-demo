import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen -mt-16 w-full flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="text-center space-y-6 animate-in fade-in-0 zoom-in-95 duration-700">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient-x">
          merch store demo
        </h1>
      </div>
    </div>
  );
}
