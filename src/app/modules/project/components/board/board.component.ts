import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../shared/models/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() columns!: string[] | null;
  @Input() columnsContent!: Record<string, Card[]> | null;

  constructor() {}

  drop(event: CdkDragDrop<any>) {
    if (!this.columnsContent) return;

    // Follwing container.data contains the columns key

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
