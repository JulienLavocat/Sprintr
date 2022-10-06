import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EndSprintGQL } from '../../../../graphql/generated';
import { State } from '../../../../state';

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss'],
})
export class SprintComponent {
  projectId!: string;

  constructor(
    private store: Store<State>,
    private endSprintQuery: EndSprintGQL
  ) {
    this.store
      .select((state) => state.project?.id)
      .subscribe((projectId) => (this.projectId = projectId));
  }

  endSprint() {
    this.endSprintQuery
      .mutate({
        projectId: this.projectId,
      })
      .subscribe(() => {
        // TODO: Handle this
      });
  }
}
