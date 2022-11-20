import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { APIService } from './services/api.service';

export const myRoutes: Routes = [
      {
        path:':id',
        loadComponent:() => import('./components/multi-mode-view/multi-mode-view.component').then(c=>c.MultiModeViewComponent),
        // providers:[
        //   APIService
        // ]
      },
      {
        path: 'story/:id',
        loadComponent: () => import('./components/story/story.component').then(c=>c.StoryComponent) 
      }, {
        path: 'user/:id',
        loadComponent: () => import('./components/user/user.component').then(c=>c.UserComponent) 
      },
];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes, {
    useHash: true,
    anchorScrolling: 'enabled',
    onSameUrlNavigation:'reload'
    // enableTracing:true
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
