import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    this.columnsContent$ = of({
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

    this.columns$ = of(['Sprint +1', 'Sprint +2']);
  }

  loadEpics() {}
}
