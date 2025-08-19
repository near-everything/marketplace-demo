import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import type { Profile } from "better-near-auth"; 

interface NearProfileProps {
  accountId?: string;
  showAvatar?: boolean;
  showName?: boolean;
  className?: string;
}

export default function NearProfile({ 
  accountId, 
  showAvatar = true, 
  showName = true,
  className = ""
}: NearProfileProps) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const profileResponse = await authClient.near.getProfile(accountId);
        setProfile(profileResponse.data || null);
      } catch (err) {
        console.error("Failed to fetch NEAR profile:", err);
        setError("Failed to load profile");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [accountId]);

  if (isLoading) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        {showAvatar && <Skeleton className="h-8 w-8 rounded-full" />}
        {showName && <Skeleton className="h-4 w-24" />}
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        {showAvatar && <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">?</div>}
        {showName && <span className="text-sm text-gray-500">{accountId}</span>}
      </div>
    );
  }

  const displayName = profile?.name || accountId;
  const avatarUrl = profile?.image?.url || profile?.image?.ipfs_cid 
    ? `https://ipfs.near.social/ipfs/${profile.image.ipfs_cid}` 
    : null;

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {showAvatar && (
        <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={`${displayName} avatar`}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-xs font-medium text-gray-600">
              {displayName?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      )}
      {showName && (
        <span className="text-sm font-medium truncate">
          {displayName}
        </span>
      )}
    </div>
  );
}