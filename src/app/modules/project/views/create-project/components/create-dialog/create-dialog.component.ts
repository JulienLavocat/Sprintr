import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProject } from '../../../../../../features/project.feature';
import { CreateProjectGQL } from '../../../../../../graphql/generated';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss'],
})
export class CreateDialogComponent {
  form = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private dialog: MatDialogRef<any>,
    private router: Router,
    private createProjectMutation: CreateProjectGQL
  ) {}

  onSubmit() {
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
