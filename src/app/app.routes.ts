import { Routes } from '@angular/router';
// We no longer need to import the components at the top level

export const routes: Routes = [
  {
    path: ':id',
    loadComponent: () => import('./components/multi-mode-view/multi-mode-view.component').then(c => c.MultiModeViewComponent)
  },
  {
    path: 'story/:id',
    loadComponent: () => import('./components/story/story.component').then(c => c.StoryComponent)
  }, {
    path: 'user/:id',
    loadComponent: () => import('./components/user/user.component').then(c => c.UserComponent)
  },
];