import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { ThemeProvider } from './lib/contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

// Import page components for static rendering (no lazy-loading on SSR)
import RenovationHaussmannien from './pages/RenovationHaussmannien';
import PeintreDecorateur from './pages/PeintreDecorateur';
import RenovationSalleDeBain from './pages/RenovationSalleDeBain';
import PoseParquet from './pages/PoseParquet';
import DevisRenovation from './pages/DevisRenovation';

// Map of static routes for SSR rendering
const PAGE_MAP: Record<string, React.ReactElement> = {
  '/': <App />,
  '/renovation-haussmannien-paris': (
    <ThemeProvider>
      <RenovationHaussmannien />
    </ThemeProvider>
  ),
  '/peintre-decorateur-paris': (
    <ThemeProvider>
      <PeintreDecorateur />
    </ThemeProvider>
  ),
  '/renovation-salle-de-bain-paris': (
    <ThemeProvider>
      <RenovationSalleDeBain />
    </ThemeProvider>
  ),
  '/pose-parquet-paris': (
    <ThemeProvider>
      <PoseParquet />
    </ThemeProvider>
  ),
  '/devis-renovation-paris': (
    <ThemeProvider>
      <DevisRenovation />
    </ThemeProvider>
  ),
};

export function render(url: string = '/'): string {
  const pageElement = PAGE_MAP[url];

  if (!pageElement) {
    // Fallback to homepage for unknown routes
    return ReactDOMServer.renderToString(
      <React.StrictMode>
        <ErrorBoundary>
          <ThemeProvider>
            <StaticRouter location="/">
              <App />
            </StaticRouter>
          </ThemeProvider>
        </ErrorBoundary>
      </React.StrictMode>
    );
  }

  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <ErrorBoundary>
        {url === '/' ? (
          <ThemeProvider>
            <StaticRouter location="/">
              <App />
            </StaticRouter>
          </ThemeProvider>
        ) : (
          <StaticRouter location={url}>
            {pageElement}
          </StaticRouter>
        )}
      </ErrorBoundary>
    </React.StrictMode>
  );
}

export const routes = Object.keys(PAGE_MAP);
