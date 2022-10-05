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
  MoveCardToColumnGQL,
  SubscribeToBoardUpdatesGQL,
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
  boardId!: string;

  constructor(
    private store: Store<State>,
    private getBoard: GetBoardGQL,
    private subscribeToBoardUpdates: SubscribeToBoardUpdatesGQL,
    private moveCardToColumn: MoveCardToColumnGQL
  ) {
    this.project$.subscribe((project) => {
      if (!project) return;

      this.getBoard$ = this.getBoard.watch({
        projectId: project.id,
        name: this.boardName,
      });

      this.getBoard$.valueChanges.subscribe((result) => {
        const board = result.data.getBoard;
        this.boardId = board.id;
        this.store.dispatch(setBoard(board));
        this.columns = board.columns.map((e) => ({
          ...e,
          cards: [...e.cards], // Array is non-writable, create a new one
        }));

        this.subscribeToBoardUpdates
          .subscribe({
            boardId: board.id,
          })
          .subscribe((v) => {
            if (!v.data) return;
            this.columns = v.data.subscribeToBoardUpdates || [];
          });
      });
    });
  }

  drop(event: CdkDragDrop<any>) {
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

    if (!origin || !destination) return;

    console.log({
      boardId: this.boardId,
      cardId: origin[event.previousIndex].id,
      destinationColumnId: event.container.data,
    });

    this.moveCardToColumn
      .mutate({
        boardId: this.boardId,
        cardId: origin[event.previousIndex].id,
        destinationColumnId: event.container.data,
      })
      .subscribe(() => {
        // TODO: Handle this
      });

    transferArrayItem(
      origin,
      destination,
      event.previousIndex,
      event.currentIndex
    );
  }
}
