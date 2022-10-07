import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CreateColumnGQL, GetBoardGQL } from '../../../../../graphql/generated';
import { State } from '../../../../../state';
import { CreateColumnComponent } from './create-column/create-column.component';

@Component({
  selector: 'app-board-actions',
  templateUrl: './board-actions.component.html',
  styleUrls: ['./board-actions.component.scss'],
})
export class BoardActionsComponent {
  @Input() beginSprint: boolean = false;
  @Input() endSprint: boolean = false;
  @Input() addColumn: boolean = false;

  @Output() onEndSprint = new EventEmitter<void>();
  @Output() onBeginSprint = new EventEmitter<void>();

  projectId!: string;
  boardId!: string;
  boardName!: string;

  constructor(
    private store: Store<State>,
    private dialog: MatDialog,
    private createColumn: CreateColumnGQL
  ) {
    this.store
      .select((state) => ({
        projectId: state.project?.id,
        boardId: state.board?.id,
      }))
      .subscribe(({ boardId, projectId }) => {
        this.boardId = boardId;
        this.projectId = projectId;
      });
  }

  onAddColumn() {
    const dialogRef = this.dialog.open<CreateColumnComponent, any, string>(
      CreateColumnComponent
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      this.createColumn
        .mutate({
          boardId: this.boardId,
          projectId: this.projectId,
          name: result,
        })
        .subscribe(() => {
          // TODO: Handle this
        });
    });
  }
}
