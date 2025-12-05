import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onRetry?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  retryCount: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, retryCount: 0 };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[Module Federation] Remote load error:', error);
    console.error('Component stack:', errorInfo.componentStack);
    this.props.onError?.(error, errorInfo);
  }

  handleRetry = () => {
    this.setState((prev) => ({
      hasError: false,
      error: null,
      retryCount: prev.retryCount + 1,
    }));
    this.props.onRetry?.();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const isNetworkError =
        this.state.error?.message?.includes('fetch') ||
        this.state.error?.message?.includes('network') ||
        this.state.error?.message?.includes('Failed to load');

      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-foreground">
          <div className="max-w-md text-center">
            <div className="mb-6 text-6xl">
              {isNetworkError ? '🔌' : '⚠️'}
            </div>
            <h1 className="mb-4 text-2xl font-semibold">
              {isNetworkError
                ? 'Connection Error'
                : 'Something went wrong'}
            </h1>
            <p className="mb-6 text-muted-foreground">
              {isNetworkError
                ? 'Unable to load the remote application. Please check your connection and try again.'
                : 'The application encountered an unexpected error. Our team has been notified.'}
            </p>
            {this.state.error && (
              <details className="mb-6 rounded-lg border border-border bg-muted/50 p-4 text-left">
                <summary className="cursor-pointer text-sm font-medium">
                  Technical Details
                </summary>
                <pre className="mt-2 overflow-auto text-xs text-muted-foreground">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={this.handleRetry}
                className="rounded-lg bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="rounded-lg border border-border px-6 py-2.5 font-medium transition-colors hover:bg-accent"
              >
                Reload Page
              </button>
            </div>
            {this.state.retryCount > 0 && (
              <p className="mt-4 text-sm text-muted-foreground">
                Retry attempts: {this.state.retryCount}
              </p>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
