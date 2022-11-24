import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProject } from '../../../../../../../features/project.feature';
import {
  ListProjectsGQL,
  Project,
} from '../../../../../../../graphql/generated';

@Component({
  selector: 'app-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.scss'],
})
export class ProjectSelectorComponent {
  @Input('projectId') projectId!: string;

  projects!: Project[];
  ready: boolean;

  constructor(private router: Router, private listProjects: ListProjectsGQL) {
    this.ready = false;

    this.listProjects.fetch().subscribe((value) => {
      this.ready = !value.loading;

      const result = value.data.listProjects;
      if (!result) return;

      this.projects = result as Project[];
    });
  }

  setProject({ value }: { value: string }) {
    this.router.navigateByUrl(`/projects/${value}`);
  }
}
