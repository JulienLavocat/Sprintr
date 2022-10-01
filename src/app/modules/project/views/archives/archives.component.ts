import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/models/card.model';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss'],
})
export class ArchivesComponent {
  columnsContent$: Observable<Record<string, Card[]>>;
  columns$: Observable<string[]>;

  constructor() {
    this.columnsContent$ = new Observable((subscriber) => {
      subscriber.next({
        'Sprint #1 - 14/09/2022': [
          {
            id: '1234',
            title: 'Start working on Sprintr',
            content: 'Started working on Sprintr',
            type: 'story',
            scoreType: 'story',
            score: '1',
          },
        ],
      });
      subscriber.complete();
    });

    this.columns$ = new Observable((subscriber) => {
      subscriber.next(['Sprint #1 - 14/09/2022']);
      subscriber.complete();
    });
  }

  loadArchives() {}
}
