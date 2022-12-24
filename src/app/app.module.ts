import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from './core.module';
import { APIService } from './services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommentsComponent } from './components/comments/comments.component';
import { StoryComponent } from './components/story/story.component';
import { UserComponent } from './components/user/user.component';
import { MultiModeViewComponent } from './components/multi-mode-view/multi-mode-view.component';
import { HeadingComponent } from './components/heading/heading.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { ManageHttpInterceptor } from './services/http-interceptor.service';
import { HttpCancelService } from './services/http-cancel.service';


@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    StoryComponent,
    UserComponent,
    MultiModeViewComponent,
    HeadingComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    RouterModule
  ],
  providers: [
    APIService,
    LoaderService,
    HttpCancelService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ManageHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('APP')
  }
}
