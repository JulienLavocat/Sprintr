import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListProjectsGQL } from '../../graphql/generated';

@Component({
  selector: 'app-project-picker',
  templateUrl: './project-picker.component.html',
  styleUrls: ['./project-picker.component.scss'],
})
export class ProjectPickerComponent {
  constructor(private router: Router, private listProjects: ListProjectsGQL) {
    this.listProjects.fetch().subscribe((v) => {
      if (v.loading) return;
      if (!v.data.listProjects || v.data.listProjects.length === 0)
        this.router.navigateByUrl(`/projects/create`);
      else this.router.navigateByUrl(`/projects/${v.data.listProjects[0].id}`);
    });
  }
}
