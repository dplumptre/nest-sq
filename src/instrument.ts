// Loaded before anything else so Sentry can patch Node's internals before the
// app's own modules are imported. See the import at the top of main.ts.
import 'dotenv/config';
import * as Sentry from '@sentry/nestjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV ?? 'development',

  // Capture a performance trace for every request. Fine for a demo; a busy
  // production service would sample a fraction of this.
  tracesSampleRate: 1.0,

  // v11 replaced `sendDefaultPii` with `dataCollection`, and flipped the
  // defaults: every field below is ON unless named here. Set explicitly so an
  // SDK upgrade can never silently widen what leaves this machine.
  dataCollection: {
    userInfo: false,
    cookies: false,
    httpHeaders: { request: { allow: ['content-type'] }, response: false },
    httpBodies: [],
    urlQueryParams: false,
    databaseQueryData: false,
    queues: false,
    stackFrameVariables: false,
  },
});
