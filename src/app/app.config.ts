import { ApplicationConfig, APP_INITIALIZER, inject } from '@angular/core';
import { provideRouter, withDebugTracing, withHashLocation, withRouterConfig, withInMemoryScrolling, Router, ActivationStart } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { filter } from 'rxjs/operators';

import { routes } from './app.routes';
import { APIService } from './services/api.service';
import { LoaderService } from './services/loader.service';
import { HttpCancelService } from './services/http-cancel.service';
import { loaderInterceptor } from './interceptor/loader.interceptor';
import { manageHttpInterceptor } from './services/http-interceptor.service';

// This function sets up the subscription to router events
function initializeHttpCancelService(): () => void {
  const router = inject(Router);
  const httpCancelService = inject(HttpCancelService);
  
  return () => {
    router.events.pipe(
      filter((event): event is ActivationStart => event instanceof ActivationStart)
    ).subscribe(() => {
      // On every new route navigation, cancel pending HTTP requests
      httpCancelService.cancelPendingRequests();
    });
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    // Router Configuration
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ anchorScrolling: 'enabled' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withDebugTracing(),
    ),

    // Browser Animations
    provideAnimations(),

    // HttpClient with our new Functional Interceptors
    provideHttpClient(
      withInterceptors([loaderInterceptor, manageHttpInterceptor])
    ),

    // Application-wide Singleton Services
    APIService,
    LoaderService,
    HttpCancelService,

    // ** NEW PROVIDER **
    // This runs the router event subscription logic once when the app starts
    {
      provide: APP_INITIALIZER,
      useFactory: initializeHttpCancelService,
      multi: true
    }
  ]
};