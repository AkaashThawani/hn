import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsHistoryComponent } from './components/comments-history/comments-history.component';
import { FavoritesHistoryComponent } from './components/favorites-history/favorites-history.component';
import { LandingComponent } from './components/landing/landing.component';
import { StoryComponent } from './components/story/story.component';
import { SubmissionHistoryComponent } from './components/submission-history/submission-history.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path:'',
    component:LandingComponent
  },
  {
    path:'story/:id',
    component:StoryComponent
  },{
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'comments/:id',
    component:CommentsHistoryComponent
  },
  {
    path:'submissions/:id',
    component:SubmissionHistoryComponent
  },
  {
    path:'favorites/:id',
    component:FavoritesHistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true,
    anchorScrolling:'enabled'
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
