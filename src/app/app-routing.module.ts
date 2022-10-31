import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { StoryComponent } from './components/story/story.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
      {
        path:':id',
        component:LandingComponent,
      },
      {
        path: 'story/:id',
        component: StoryComponent
      }, {
        path: 'user/:id',
        component: UserComponent
      },
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
