import { Suspense, lazy, type FC } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { LoadingFallback } from './LoadingFallback';

const RemoteApp = lazy(() => import('near_social_js/App'));

export const App: FC = () => {
  return (
    <ErrorBoundary
      onError={(error) => {
        console.error('[Host] Failed to load remote app:', error.message);
      }}
      onRetry={() => {
        console.log('[Host] Retrying remote app load...');
      }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <RemoteApp />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
