import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { QueryRef } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { setBoard } from '../../../../features/board.feature';
import {
  Board,
  BoardColumn,
  Card,
  GetBoardGQL,
  GetBoardQuery,
} from '../../../../graphql/generated';
import { State } from '../../../../state';
import { CreateCardComponent } from './create-card/create-card.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() boardName!: string;
  @Input() hasActions: boolean = true;
  @Input() beginSprint: boolean = false;
  @Input() endSprint: boolean = false;
  @Input() addColumn: boolean = false;

  project$ = this.store.select((state) => state.project);

  getBoard$!: QueryRef<GetBoardQuery, any>;
  columns: BoardColumn[] = [];

  constructor(
    private store: Store<State>,
    private dialog: MatDialog,
    private getBoard: GetBoardGQL
  ) {
    this.project$.subscribe((project) => {
      if (!project) return;

      this.getBoard$ = this.getBoard.watch({
        projectId: project.id,
        name: this.boardName,
      });

      this.getBoard$.valueChanges.subscribe((result) => {
        const board = result.data.getBoard;
        this.store.dispatch(setBoard(board));
        this.columns = board.columns.map((e) => ({
          ...e,
          cards: [...e.cards], // Array is non-writable, create a new one
        }));
      });
    });
  }

  openCreateCardDialog(columnId: string) {
    const dialogRef = this.dialog.open<CreateCardComponent, any, Card>(
      CreateCardComponent,
      {}
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.columns.find((e) => e.id === columnId)?.cards.push(result);
    });
  }

  drop(event: CdkDragDrop<any>) {
    // container.data contains the columns key
    if (event.previousContainer === event.container) {
      const origin = this.columns.find(
        (e) => e.id === event.container.data
      )?.cards;
      origin &&
        moveItemInArray(origin, event.previousIndex, event.currentIndex);
      return;
    }

    const origin = this.columns.find(
      (e) => e.id === event.previousContainer.data
    )?.cards;
    const destination = this.columns.find(
      (e) => e.id === event.container.data
    )?.cards;

    origin &&
      destination &&
      transferArrayItem(
        origin,
        destination,
        event.previousIndex,
        event.currentIndex
      );
  }

  refetchBoard() {
    this.getBoard$.refetch();
  }
}
