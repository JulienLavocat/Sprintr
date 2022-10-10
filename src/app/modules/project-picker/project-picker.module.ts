import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPickerComponent } from './project-picker.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectPickerComponent],
  imports: [CommonModule, MatCardModule, RouterModule],
})
export class ProjectPickerModule {}
