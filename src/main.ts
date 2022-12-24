import { enableProdMode} from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { throwError } from 'rxjs';
import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


// bootstrapApplication(AppComponent,{
//   providers:[
//     importProvidersFrom(AppRoutingModule)
//   ]
// }).catch(err=>console.log(err))

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));