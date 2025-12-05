import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import ComponentShowcase from './ComponentShowcase';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const pathname = window.location.pathname;

const RootComponent = pathname === '/components' ? ComponentShowcase : App;

createRoot(rootElement).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
);
