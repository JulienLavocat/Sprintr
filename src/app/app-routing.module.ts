import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintComponent } from './modules/project/components/sprint/sprint.component';
import { ProjectComponent } from './modules/project/project.component';

const routes: Routes = [
  {
    path: 'projects/:id',
    component: ProjectComponent,
    children: [
      {
        path: '',
        component: SprintComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
