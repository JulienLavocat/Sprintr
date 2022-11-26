import { DialogRef } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProject } from '../../../../../../features/project.feature';
import {
  CreateProjectGQL,
  ListProjectsGQL,
  Project,
} from '../../../../../../graphql/generated';

@Component({
  selector: 'app-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.scss'],
})
export class ProjectSelectorComponent implements OnInit {
  projects!: Project[];
  ready: boolean;
  form = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private listProjects: ListProjectsGQL,
    private createProjectMutation: CreateProjectGQL,
    private dialog: DialogRef
  ) {
    this.ready = false;
  }
  ngOnInit() {
    this.listProjects
      .fetch({}, { fetchPolicy: 'no-cache' })
      .subscribe((value) => {
        this.ready = !value.loading;

        const result = value.data.listProjects;
        if (!result) return;

        this.projects = result as Project[];
      });
  }

  setProject({ value }: { value: string }) {
    this.router.navigateByUrl(`/projects/${value}`);
    this.dialog.close();
  }

  createProject() {
    this.createProjectMutation
      .mutate({
        name: this.form.value.name as string,
      })
      .subscribe((result) => {
        if (!result.data) return;
        this.dialog.close();
        this.store.dispatch(setProject(result.data.createProject));
        this.router.navigateByUrl(
          `/projects/${result.data?.createProject.id || 'create'}`
        );
      });
  }
}
