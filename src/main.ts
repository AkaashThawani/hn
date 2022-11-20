import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { AppRoutingModule, myRoutes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { APIService } from './app/services/api.service';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [ 
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    importProvidersFrom(AppRoutingModule)
  ]
}).catch(err => console.error(err));

