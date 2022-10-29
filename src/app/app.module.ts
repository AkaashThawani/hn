import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from './material/core.module';
import { LandingComponent } from './components/landing/landing.component';
import { APIService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { StoryComponent } from './components/story/story.component';
import { HeadingComponent } from './components/heading/heading.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserComponent } from './components/user/user.component';
import { CommentsHistoryComponent } from './components/comments-history/comments-history.component';
import { SubmissionHistoryComponent } from './components/submission-history/submission-history.component';
import { FavoritesHistoryComponent } from './components/favorites-history/favorites-history.component';
import { MultiModeViewComponent } from './components/multi-mode-view/multi-mode-view.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ShowComponent } from './components/show/show.component';
import { AskComponent } from './components/ask/ask.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StoryComponent,
    HeadingComponent,
    CommentsComponent,
    UserComponent,
    CommentsHistoryComponent,
    SubmissionHistoryComponent,
    FavoritesHistoryComponent,
    MultiModeViewComponent,
    JobsComponent,
    ShowComponent,
    AskComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
