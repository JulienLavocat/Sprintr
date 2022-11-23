import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPickerComponent } from './project-picker.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateProjectComponent } from './components/create-project/create-project.component';

@NgModule({
  declarations: [ProjectPickerComponent, CreateProjectComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class ProjectPickerModule {}
