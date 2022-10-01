import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/models/card.model';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent {
  columnsContent$: Observable<Record<string, Card[]>>;
  columns$: Observable<string[]>;

  constructor() {
    this.columnsContent$ = new Observable((subscriber) => {
      subscriber.next({
        'Sprint +1': [
          {
            id: '11',
            content: 'TODO Card',
            title: 'Mises au point graphiques',
            score: '1',
            scoreType: 'feature',
            type: 'story',
          },
          {
            id: '12',
            content: 'TODO Card',
            title: 'TODO 2',
            score: '1',
            scoreType: 'feature',
            type: 'story',
          },
          {
            id: '13',
            content: 'TODO Card',
            title: 'TODO 3',
            score: '1',
            scoreType: 'feature',
            type: 'story',
          },
        ],
        'Sprint +2': [],
        Done: [],
      });
      subscriber.complete();
    });

    this.columns$ = new Observable((subscriber) => {
      subscriber.next(['Sprint +1', 'Sprint +2']);
      subscriber.complete();
    });
  }

  loadEpics() {}
}
