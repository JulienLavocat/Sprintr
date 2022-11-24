import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListProjectsGQL, Project } from '../../graphql/generated';
import { CreateProjectComponent } from './components/create-project/create-project.component';

@Component({
  selector: 'app-project-picker',
  templateUrl: './project-picker.component.html',
  styleUrls: ['./project-picker.component.scss'],
})
export class ProjectPickerComponent {
  projects: Pick<Project, 'id' | 'name'>[] = [];

  constructor(
    private listProjectsQuery: ListProjectsGQL,
    private dialog: MatDialog
  ) {
    this.fetchProjects();
  }

  createProject() {
    this.dialog
      .open(CreateProjectComponent)
      .afterClosed()
      .subscribe(() => {
        this.fetchProjects();
      });
  }

  private fetchProjects() {
    this.listProjectsQuery
      .fetch({}, { fetchPolicy: 'no-cache' })
      .subscribe((res) => {
        this.projects = res.data.listProjects;
      });
  }
}
