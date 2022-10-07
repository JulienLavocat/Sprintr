import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { BeginSprintGQL, EndSprintGQL } from '../../../../graphql/generated';
import { State } from '../../../../state';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent {
  projectId!: string;

  constructor(
    private store: Store<State>,
    private beginSprintQuery: BeginSprintGQL
  ) {
    this.store
      .select((state) => state.project?.id)
      .subscribe((projectId) => (this.projectId = projectId));
  }

  beginSprint() {
    this.beginSprintQuery
      .mutate({
        projectId: this.projectId,
      })
      .subscribe(() => {
        // TODO: Handle this
      });
  }
}
