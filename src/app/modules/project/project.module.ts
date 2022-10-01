import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProjectNavbarComponent } from './components/project-navbar/project-navbar.component';
import { SprintComponent } from './components/sprint/sprint.component';
import { RouterModule } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardComponent } from './components/board/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    DragDropModule,
  ],
  declarations: [
    ProjectComponent,
    ProjectNavbarComponent,
    SprintComponent,
    BoardComponent,
    CardComponent,
  ],
})
export class ProjectModule {}
