import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AskComponent } from './components/ask/ask.component';
// import { CommentsHistoryComponent } from './components/comments-history/comments-history.component';
// import { FavoritesHistoryComponent } from './components/favorites-history/favorites-history.component';
import { HeadingComponent } from './components/heading/heading.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LandingComponent } from './components/landing/landing.component';
import { NewsComponent } from './components/news/news.component';
import { ShowComponent } from './components/show/show.component';
import { StoryComponent } from './components/story/story.component';
// import { SubmissionHistoryComponent } from './components/submission-history/submission-history.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
      {
        path:'',
        redirectTo:'news',
        pathMatch:'full'
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'ask',
        component: AskComponent
      },
      {
        path: 'show',
        component: ShowComponent
      },
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'story/:id',
        component: StoryComponent
      }, {
        path: 'user/:id',
        component: UserComponent
      },
      // {
      //   path: 'comments/:id',
      //   component: CommentsHistoryComponent
      // },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
    // enableTracing:true
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
