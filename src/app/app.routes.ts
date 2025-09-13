import { Routes } from '@angular/router';
import { MultiModeViewComponent } from './components/multi-mode-view/multi-mode-view.component';
import { StoryComponent } from './components/story/story.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: ':id',
    component: MultiModeViewComponent
  },
  {
    path: 'story/:id',
    component: StoryComponent
  }, {
    path: 'user/:id',
    component: UserComponent
  },
];