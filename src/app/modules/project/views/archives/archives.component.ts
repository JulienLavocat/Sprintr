import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { GetBoardGQL } from '../../../../graphql/generated';
import { Card } from '../../../../shared/models/card.model';
import { State } from '../../../../state';
import { LoadBoard } from '../../utils/load-board.component';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss'],
})
export class ArchivesComponent extends LoadBoard {
  constructor(store: Store<State>, getBoard: GetBoardGQL) {
    super(store, getBoard, 'Archives');
  }
}
