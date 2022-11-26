import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent {
  constructor(private dialog: MatDialog) {
    this.dialog.open(CreateDialogComponent, { disableClose: true });
  }
}
