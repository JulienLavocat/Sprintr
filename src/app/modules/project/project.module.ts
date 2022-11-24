import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { BoardActionsComponent } from './components/board/board-actions/board-actions.component';
import { CreateColumnComponent } from './components/board/board-actions/create-column/create-column.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/board/card/card.component';
import { ColumnComponent } from './components/board/column/column.component';
import { CreateCardComponent } from './components/board/create-card/create-card.component';
import { ProjectNavbarComponent } from './components/project-navbar/project-navbar.component';
import { ProjectComponent } from './project.component';
import { ArchivesComponent } from './views/archives/archives.component';
import { BacklogComponent } from './views/backlog/backlog.component';
import { SprintComponent } from './views/sprint/sprint.component';
import { ProjectSelectorComponent } from './components/board/board-actions/components/project-selector/project-selector.component';

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
    MatTooltipModule,
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
    ProjectSelectorComponent,
  ],
})
export class ProjectModule {}
