import { Component, OnInit } from '@angular/core';
import { ListProjectsGQL, Project } from '../../graphql/generated';

@Component({
  selector: 'app-project-picker',
  templateUrl: './project-picker.component.html',
  styleUrls: ['./project-picker.component.scss'],
})
export class ProjectPickerComponent {
  projects: Pick<Project, 'id' | 'name'>[] = [];

  constructor(private listProjectsQuery: ListProjectsGQL) {
    this.listProjectsQuery
      .fetch()
      .subscribe((res) => (this.projects = res.data.listProjects));
  }
}
