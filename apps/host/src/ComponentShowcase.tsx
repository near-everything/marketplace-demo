import { Suspense, lazy, type FC, type ComponentType } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { LoadingFallback } from './LoadingFallback';

const SocialProvider = lazy(() =>
  import('near_social_js/providers').then((m) => ({ default: m.SocialProvider }))
);

const componentModules = {
  ProfileCard: lazy(() =>
    import('near_social_js/components').then((m) => ({ default: m.ProfileCard }))
  ),
  ProfileAvatar: lazy(() =>
    import('near_social_js/components').then((m) => ({ default: m.ProfileAvatar }))
  ),
  WalletButton: lazy(() =>
    import('near_social_js/components').then((m) => ({ default: m.WalletButton }))
  ),
  Logo: lazy(() =>
    import('near_social_js/components').then((m) => ({ default: m.Logo }))
  ),
  JsonViewer: lazy(() =>
    import('near_social_js/components').then((m) => ({ default: m.JsonViewer }))
  ),
  MethodCard: lazy(() =>
    import('near_social_js/components').then((m) => ({ default: m.MethodCard }))
  ),
  ResponsePanel: lazy(() =>
    import('near_social_js/components').then((m) => ({ default: m.ResponsePanel }))
  ),
};

const defaultProps: Record<string, Record<string, unknown>> = {
  ProfileCard: { accountId: 'root.near', profile: { name: 'Demo User' } },
  ProfileAvatar: { accountId: 'root.near', size: 64 },
  WalletButton: {},
  Logo: {},
  JsonViewer: { data: { message: 'Hello from Module Federation', version: '1.0.0' } },
  MethodCard: { title: 'getData', description: 'Fetches data from the social contract' },
  ResponsePanel: { response: { success: true, data: { key: 'value' } } },
};

interface ComponentCardProps {
  name: string;
  Component: ComponentType<Record<string, unknown>>;
  props: Record<string, unknown>;
}

const ComponentCard: FC<ComponentCardProps> = ({ name, Component, props }) => (
  <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
    <h3 className="mb-3 text-sm font-medium text-muted-foreground">{name}</h3>
    <div className="flex min-h-20 items-center justify-center rounded-md bg-muted/50 p-4">
      <ErrorBoundary
        fallback={
          <span className="text-xs text-destructive">Failed to load component</span>
        }
      >
        <Suspense
          fallback={<span className="text-sm text-muted-foreground">Loading...</span>}
        >
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    </div>
    <pre className="mt-3 overflow-auto rounded-md bg-muted p-2 text-xs text-muted-foreground">
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

export const ComponentShowcase: FC = () => {
  const components = Object.entries(componentModules);

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback message="Loading providers..." />}>
        <SocialProvider network="mainnet">
          <div className="mx-auto max-w-6xl p-8">
            <header className="mb-8">
              <h1 className="text-2xl font-semibold text-foreground">
                Component Showcase
              </h1>
              <p className="mt-2 text-muted-foreground">
                Remote components loaded from <code className="rounded bg-muted px-1.5 py-0.5 text-sm">near_social_js</code>
              </p>
            </header>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {components.map(([name, Component]) => (
                <ComponentCard
                  key={name}
                  name={name}
                  Component={Component as ComponentType<Record<string, unknown>>}
                  props={defaultProps[name] || {}}
                />
              ))}
            </div>
          </div>
        </SocialProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ComponentShowcase;
