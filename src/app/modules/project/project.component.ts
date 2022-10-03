import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProject } from '../../features/project.feature';
import { GetprojecGQL } from '../../graphql/generated';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  project$ = this.store.select((state) => state.project);
  ready: boolean;

  constructor(
    private store: Store<{ project: Project }>,
    private route: ActivatedRoute,
    private getProject: GetprojecGQL
  ) {
    this.route.params.subscribe((params) => {
      this.loadProject(params['id']);
    });
    this.ready = false;
  }

  async loadProject(projectId: string) {
    this.getProject
      .watch({
        id: projectId,
      })
      .valueChanges.subscribe((value) => {
        this.ready = !value.loading;

        const result = value.data.getProject;
        if (!result) return;

        this.store.dispatch(setProject({ id: result.id, name: result.name }));
      });
  }
}
