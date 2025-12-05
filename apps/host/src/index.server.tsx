import { renderToString } from 'react-dom/server';
import { StrictMode } from 'react';
import App from './App';
import ComponentShowcase from './ComponentShowcase';

export function render(pathname: string): string {
  const Component = pathname === '/components' ? ComponentShowcase : App;

  return renderToString(
    <StrictMode>
      <Component />
    </StrictMode>
  );
}

export { App, ComponentShowcase };
