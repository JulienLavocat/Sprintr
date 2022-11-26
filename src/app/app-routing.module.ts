import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPickerComponent } from './modules/project-picker/project-picker.component';
import { ProjectComponent } from './modules/project/project.component';
import { ArchivesComponent } from './modules/project/views/archives/archives.component';
import { BacklogComponent } from './modules/project/views/backlog/backlog.component';
import { CreateProjectComponent } from './modules/project/views/create-project/create-project.component';
import { SprintComponent } from './modules/project/views/sprint/sprint.component';

const routes: Routes = [
  {
    path: 'projects/create',
    component: ProjectComponent,
    children: [
      {
        path: '',
        component: CreateProjectComponent,
      },
    ],
  },
  {
    path: 'projects/:id',
    component: ProjectComponent,
    children: [
      {
        path: '',
        redirectTo: 'sprint',
        pathMatch: 'full',
      },
      {
        path: 'sprint',
        component: SprintComponent,
      },
      {
        path: 'backlog',
        component: BacklogComponent,
      },
      {
        path: 'archives',
        component: ArchivesComponent,
      },
    ],
  },
  {
    path: '',
    component: ProjectPickerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
