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
import RenovationAppartement from './pages/RenovationAppartement';
import RenovationCuisine from './pages/RenovationCuisine';
import PlomberieElectricite from './pages/PlomberieElectricite';
import MaconnerieCloisonsPlatrerie from './pages/MaconnerieCloisonsPlatrerie';
import RenovationAppartementAncien from './pages/RenovationAppartementAncien';
import RenovationStudio from './pages/RenovationStudio';

// Map of static routes for SSR rendering
const PAGE_MAP: Record<string, React.ReactElement> = {
  '/': <App />,
  '/renovation-appartement-paris': (
    <ThemeProvider>
      <RenovationAppartement />
    </ThemeProvider>
  ),
  '/renovation-cuisine-paris': (
    <ThemeProvider>
      <RenovationCuisine />
    </ThemeProvider>
  ),
  '/plomberie-electricite-paris': (
    <ThemeProvider>
      <PlomberieElectricite />
    </ThemeProvider>
  ),
  '/maconnerie-cloisons-platrerie-paris': (
    <ThemeProvider>
      <MaconnerieCloisonsPlatrerie />
    </ThemeProvider>
  ),
  '/renovation-appartement-ancien-paris': (
    <ThemeProvider>
      <RenovationAppartementAncien />
    </ThemeProvider>
  ),
  '/renovation-studio-paris': (
    <ThemeProvider>
      <RenovationStudio />
    </ThemeProvider>
  ),
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
