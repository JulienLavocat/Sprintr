import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Project } from '../../../../graphql/generated';

@Component({
  selector: 'app-project-navbar',
  templateUrl: './project-navbar.component.html',
  styleUrls: ['./project-navbar.component.scss'],
})
export class ProjectNavbarComponent {
  @Input() project!: Project | null;

  constructor() {}
}
