import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintComponent } from './modules/project/views/sprint/sprint.component';
import { ProjectComponent } from './modules/project/project.component';
import { BacklogComponent } from './modules/project/views/backlog/backlog.component';

const routes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectComponent,
    children: [
      {
        path: '',
        component: SprintComponent,
      },
      {
        path: 'backlog',
        component: BacklogComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
