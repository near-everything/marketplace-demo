import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Link } from "@tanstack/react-router";

interface Profile {
  name?: string;
  description?: string;
  image?: {
    url?: string;
    ipfs_cid?: string;
  };
  backgroundImage?: {
    url?: string;
    ipfs_cid?: string;
  };
  linktree?: Record<string, string>;
}

export default function UserMenu() {
  const navigate = useNavigate();
  const { data: session, isPending } = authClient.useSession();
  const [nearProfile, setNearProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!session) return;

    const fetchProfile = async () => {
      try {
        const response = await authClient.near.getProfile();
        console.log("My profile:", response);
        setNearProfile(response.data);
      } catch (err) {
        console.log("No NEAR profile found for user");
        setNearProfile(null);
      }
    };

    fetchProfile();
  }, [session]);

  if (isPending) {
    return <Skeleton className="h-9 w-24" />;
  }

  if (!session) {
    return (
      <Button variant="outline" asChild>
        <Link to="/login">Sign In</Link>
      </Button>
    );
  }

  const displayName = nearProfile?.name || session.user.name;
  const avatarUrl = nearProfile?.image?.url || nearProfile?.image?.ipfs_cid 
    ? `https://ipfs.near.social/ipfs/${nearProfile.image.ipfs_cid}` 
    : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          {avatarUrl && (
            <img 
              src={avatarUrl} 
              alt="Profile" 
              className="h-5 w-5 rounded-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
          <span>{displayName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
        {nearProfile && (
          <DropdownMenuItem>
            <div className="flex items-center space-x-2">
              {avatarUrl && (
                <img 
                  src={avatarUrl} 
                  alt="NEAR Profile" 
                  className="h-4 w-4 rounded-full object-cover"
                />
              )}
              <span className="text-xs text-muted-foreground">
                NEAR: {nearProfile.name || "Connected"}
              </span>
            </div>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild>
          <Button
            variant="destructive"
            className="w-full"
            onClick={() => {
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    navigate({
                      to: "/",
                    });
                  },
                },
              });
            }}
          >
            Sign Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
