import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { sessionUserReducer } from './features/auth/state/auth.reducer';
import { provideEffects } from '@ngrx/effects';

import * as jwtTokenEffects from './features/auth/state/auth.effects';
import * as dashboardEffects from './features/dashboard/state/dashboard/dashboard.effects';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptorInterceptor } from './core/interceptors/auth-interceptor';
import { dashboardReducer } from './features/dashboard/state/dashboard/dashboard.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(),
    provideState('User', sessionUserReducer),
    provideState('Dashboard', dashboardReducer),
    provideEffects(jwtTokenEffects),
    provideEffects(dashboardEffects),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      // trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      // traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      // connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
    provideHttpClient(withInterceptors([authInterceptorInterceptor])),
  ],
};
