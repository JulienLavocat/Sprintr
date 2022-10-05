import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProjectNavbarComponent } from './components/project-navbar/project-navbar.component';
import { SprintComponent } from './views/sprint/sprint.component';
import { RouterModule } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardComponent } from './components/board/card/card.component';
import { BoardActionsComponent } from './components/board/board-actions/board-actions.component';
import { BacklogComponent } from './views/backlog/backlog.component';
import { ArchivesComponent } from './views/archives/archives.component';
import { CreateCardComponent } from './components/board/create-card/create-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateColumnComponent } from './components/board/board-actions/create-column/create-column.component';
import { ColumnComponent } from './components/board/column/column.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule,
    RouterModule,
    DragDropModule,
  ],
  declarations: [
    ProjectComponent,
    ProjectNavbarComponent,
    SprintComponent,
    BoardComponent,
    CardComponent,
    BoardActionsComponent,
    BacklogComponent,
    ArchivesComponent,
    CreateCardComponent,
    CreateColumnComponent,
    ColumnComponent,
  ],
})
export class ProjectModule {}
