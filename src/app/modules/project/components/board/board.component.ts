import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { QueryRef } from 'apollo-angular';
import { setBoard } from '../../../../features/board.feature';
import {
  BoardColumn,
  GetBoardGQL,
  GetBoardQuery,
  MoveCardToColumnGQL,
  Project,
  SetCardsOrderGQL,
  SubscribeToBoardUpdatesGQL,
} from '../../../../graphql/generated';
import { State } from '../../../../state';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  @Input() boardName!: string;
  @Input() hasActions = true;
  @Input() beginSprint = false;
  @Input() endSprint = false;
  @Input() addColumn = false;

  @Output() onEndSprint = new EventEmitter<void>();
  @Output() onBeginSprint = new EventEmitter<void>();

  project$ = this.store.select((state) => state.project);

  getBoard$!: QueryRef<GetBoardQuery, any>;
  columns: BoardColumn[] = [];
  boardId!: string;

  constructor(
    private store: Store<State>,
    private getBoard: GetBoardGQL,
    private subscribeToBoardUpdates: SubscribeToBoardUpdatesGQL,
    private moveCardToColumn: MoveCardToColumnGQL,
    private setCardsOrder: SetCardsOrderGQL
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
      this.moveCardInColumn(event);
      return;
    }

    this.transferCardToColumn(event);
  }

  moveCardInColumn(event: CdkDragDrop<any>) {
    const origin = this.columns.find(
      (e) => e.id === event.container.data
    )?.cards;

    if (!origin || event.previousIndex === event.currentIndex) return;

    this.setCardsOrder
      .mutate({
        boardId: this.boardId,
        columnId: event.container.data,
        cardId: origin[event.previousIndex].id,
        originIndex: event.previousIndex,
        destinationIndex: event.currentIndex,
      })
      .subscribe(() => {
        // TODO: Handle this
      });

    moveItemInArray(origin, event.previousIndex, event.currentIndex);
  }

  transferCardToColumn(event: CdkDragDrop<any>) {
    const origin = this.columns.find(
      (e) => e.id === event.previousContainer.data
    )?.cards;
    const destination = this.columns.find(
      (e) => e.id === event.container.data
    )?.cards;

    if (!origin || !destination) return;

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
