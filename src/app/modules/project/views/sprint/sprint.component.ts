import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/models/card.model';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss'],
})
export class SprintComponent {
  columnsContent$: Observable<Record<string, Card[]>>;
  columns$: Observable<string[]>;

  constructor() {
    this.columnsContent$ = new Observable((subscriber) => {
      subscriber.next({
        Todo: [
          {
            id: '11',
            content: 'TODO Card',
            title: 'Mises au point graphiques',
            score: '1',
            scoreType: 'feature',
            type: 'sprint_objective',
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
            type: 'investigation',
          },
          {
            id: '13',
            content: 'TODO Card',
            title: 'TODO 3',
            score: '1',
            scoreType: 'feature',
            type: 'bug',
          },
          {
            id: '13',
            content: 'TODO Card',
            title: 'TODO 3',
            score: '1',
            scoreType: 'feature',
            type: 'debt',
          },
          {
            id: '13',
            content: 'TODO Card',
            title: 'TODO 3',
            score: '1',
            scoreType: 'feature',
            type: 'support',
          },
          {
            id: '13',
            content: 'TODO Card',
            title: 'TODO 3',
            score: '1',
            scoreType: 'feature',
            type: 'marketing',
          },
          {
            id: '13',
            content: 'TODO Card',
            title: 'TODO 3',
            score: '1',
            scoreType: 'feature',
            type: 'misc',
          },
        ],
        'In progress': [],
        'To test': [],
        'To review': [],
        Done: [],
      });
      subscriber.complete();
    });

    this.columns$ = new Observable((subscriber) => {
      subscriber.next(['Todo', 'In progress', 'To test', 'To review', 'Done']);
      subscriber.complete();
    });
  }
}
