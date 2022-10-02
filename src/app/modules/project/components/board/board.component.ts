import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../../../../shared/models/card.model';
import { CreateCardComponent } from './create-card/create-card.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() columns!: string[] | null;
  @Input() columnsContent!: Record<string, Card[]> | null;

  constructor(private dialog: MatDialog) {}

  openCreateCardDialog(column: string) {
    const dialogRef = this.dialog.open(CreateCardComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      if (!result || !this.columnsContent) return;
      this.columnsContent[column].push(result);
    });
  }

  onCardCreated(card: Card) {}

  drop(event: CdkDragDrop<any>) {
    if (!this.columnsContent) return;

    // container.data contains the columns key

    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.columnsContent[event.container.data],
        event.previousIndex,
        event.currentIndex
      );
      return;
    }

    transferArrayItem(
      this.columnsContent[event.previousContainer.data],
      this.columnsContent[event.container.data],
      event.previousIndex,
      event.currentIndex
    );
  }
}
