import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { APIService } from './app/services/api.service';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent,{
  providers:[
    APIService,
    importProvidersFrom(AppRoutingModule)
  ]
})