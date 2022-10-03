import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { GetBoardGQL } from '../../../../graphql/generated';
import { Card } from '../../../../shared/models/card.model';
import { State } from '../../../../state';
import { LoadBoard } from '../../utils/load-board.component';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss'],
})
export class SprintComponent extends LoadBoard {
  constructor(store: Store<State>, getBoard: GetBoardGQL) {
    super(store, getBoard, 'Sprint');
  }
}
