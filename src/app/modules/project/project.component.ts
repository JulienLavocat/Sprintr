import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setProject } from '../../features/project.feature';
import { Project } from '../../shared/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  project$ = this.store.select((state) => state.project);

  constructor(private store: Store<{ project: Project }>) {
    store.dispatch(setProject({ id: '1234', name: 'Test Project' }));
  }
}
