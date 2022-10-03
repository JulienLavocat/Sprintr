import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Card, GetBoardGQL } from '../../../graphql/generated';
import { State } from '../../../state';

export class LoadBoard {
  project$ = this.store.select((state) => state.project);

  columnsContent$: Observable<Record<string, Card[]>>;
  columns$: Observable<string[]>;

  constructor(
    protected store: Store<State>,
    protected getBoard: GetBoardGQL,
    boardName: string
  ) {
    this.project$.subscribe((project) => {
      if (project)
        this.getBoard
          .watch({
            projectId: project.id,
            name: boardName,
          })
          .valueChanges.subscribe((result) => {
            const board = result.data.getBoard;
            this.columnsContent$ = of(
              Object.fromEntries(
                board.columns.map((e) => [e.name, [...e.cards]]) || []
              )
            );
            this.columns$ = of(board.columns.map((e) => e.name) || []);
          });
    });

    this.columnsContent$ = of({});
    this.columns$ = of([]);
  }
}
