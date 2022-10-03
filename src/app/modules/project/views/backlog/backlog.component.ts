import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Card, GetBoardGQL, Project } from '../../../../graphql/generated';
import { State } from '../../../../state';
import { LoadBoard } from '../../utils/load-board.component';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent extends LoadBoard {
  constructor(store: Store<State>, getBoard: GetBoardGQL) {
    super(store, getBoard, 'Backlog');
  }
}
