import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../../../graphql/generated';
import { ProjectSelectorComponent } from './components/project-selector/project-selector.component';

export interface ProjectNavbarLink {
  name: string;
  link: string;
  active: boolean;
}

@Component({
  selector: 'app-project-navbar',
  templateUrl: './project-navbar.component.html',
  styleUrls: ['./project-navbar.component.scss'],
})
export class ProjectNavbarComponent {
  @Input() project!: Project | null;

  links!: ProjectNavbarLink[];

  constructor(private router: Router, private dialog: Dialog) {
    router.events.subscribe(() => this.setLinks());
    this.setLinks();
  }

  setLinks() {
    const currentView = this.router.url.split('/').pop() as string;
    this.links = [
      {
        name: 'Backlog',
        link: '/backlog',
        active: currentView === 'backlog',
      },
      {
        name: 'Sprint',
        link: '/sprint',
        active: currentView === 'sprint',
      },
      {
        name: 'Archives',
        link: '/archives',
        active: currentView === 'archives',
      },
    ];
  }

  selectProject() {
    this.dialog.open(ProjectSelectorComponent);
  }
}
