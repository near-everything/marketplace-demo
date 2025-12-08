import { createFileRoute, Link } from "@tanstack/react-router";
import { Database, Users, ArrowRight, Wallet } from "lucide-react";
import { useWallet } from "../../integrations/near-wallet";
import { useProfile } from "../../integrations/near-social";
import { ProfileCard } from "../../components/profile-card";

export const Route = createFileRoute("/_layout/")({
  component: HomePage,
});

function HomePage() {
  const { accountId, connect } = useWallet();

  return <div className="container mx-auto px-4 py-12 max-w-4xl"></div>;
}
