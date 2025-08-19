import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import NearProfile from "./near-profile";
import * as fastintear from "fastintear";

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
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [nearProfile, setNearProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchSessionAndProfile = async () => {
      try {
        const { data: sessionData } = await authClient.getSession();
        setSession(sessionData);
        
        if (sessionData) {
          try {
            const { data: response } = await authClient.near.getProfile();
            setNearProfile(response);
          } catch (err) {
            console.log("No NEAR profile found for user");
            setNearProfile(null);
          }
        }
      } catch (error) {
        console.error("Failed to fetch session:", error);
        setSession(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionAndProfile();
  }, []);

  if (isLoading) {
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
  const avatarUrl =
    nearProfile?.image?.url || nearProfile?.image?.ipfs_cid
      ? `https://ipfs.near.social/ipfs/${nearProfile.image.ipfs_cid}`
      : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          <NearProfile variant="badge" showAvatar={true} showName={true} />
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
            onClick={async () => {
              try {
                // Sign out from auth session
                await authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      navigate({
                        to: "/",
                      });
                    },
                  },
                });
              } catch (error) {
                console.error("Sign out error:", error);
                // Still navigate even if wallet disconnect fails
                navigate({
                  to: "/",
                });
              }
            }}
          >
            Sign Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
