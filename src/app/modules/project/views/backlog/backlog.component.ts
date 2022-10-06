import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { EndSprintGQL } from '../../../../graphql/generated';
import { State } from '../../../../state';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent {}
