import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
// import { APIService } from './app/services/api.service';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent,{
  providers:[
    importProvidersFrom(AppRoutingModule)
  ]
}).catch(err=>console.log(err))