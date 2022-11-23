import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateProjectGQL } from '../../../../graphql/generated';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent {
  form = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialogRef<any>,
    private createProjectMutation: CreateProjectGQL
  ) {}

  onSubmit() {
    this.createProjectMutation
      .mutate({
        name: this.form.value.name as string,
      })
      .subscribe(() => this.dialog.close());
  }
}
