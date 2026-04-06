import * as Sentry from '@sentry/react';

export function initSentry() {
    const dsn = import.meta.env.VITE_SENTRY_DSN;

    if (!dsn) {
        return;
    }

    Sentry.init({
        dsn,
        environment: import.meta.env.PROD ? 'production' : 'development',
        tracesSampleRate: import.meta.env.PROD ? 0.5 : 1.0,
        replaysSessionSampleRate: import.meta.env.PROD ? 0.1 : 0,
        replaysOnErrorSampleRate: import.meta.env.PROD ? 1.0 : 0,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration(),
        ],
        ignoreErrors: [
            'ResizeObserver loop limit exceeded',
            'Non-Error promise rejection captured',
        ],
    });
}
