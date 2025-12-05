import type { FC } from 'react';

interface LoadingFallbackProps {
  message?: string;
}

export const LoadingFallback: FC<LoadingFallbackProps> = ({
  message = 'Loading application...',
}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-muted border-t-primary" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 rounded-full bg-background" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium text-foreground">{message}</p>
          <p className="text-sm text-muted-foreground">
            Connecting to remote module...
          </p>
        </div>
        <LoadingSkeleton />
      </div>
    </div>
  );
};

const LoadingSkeleton: FC = () => (
  <div className="mt-8 w-full max-w-md space-y-4 px-4">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
      </div>
    </div>
    <div className="space-y-3">
      <div className="h-3 w-full animate-pulse rounded bg-muted" />
      <div className="h-3 w-5/6 animate-pulse rounded bg-muted" />
      <div className="h-3 w-4/6 animate-pulse rounded bg-muted" />
    </div>
    <div className="flex gap-2 pt-2">
      <div className="h-8 w-20 animate-pulse rounded-lg bg-muted" />
      <div className="h-8 w-20 animate-pulse rounded-lg bg-muted" />
    </div>
  </div>
);

export const LoadingDots: FC = () => (
  <span className="inline-flex gap-1">
    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current" />
  </span>
);

export default LoadingFallback;
