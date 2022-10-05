import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, fromEvent, Subscription, take } from 'rxjs';
import {
  BoardColumn,
  Card,
  CreateCardGQL,
  DeleteColumnGQL,
} from '../../../../../graphql/generated';
import { CreateCardComponent } from '../create-card/create-card.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Output() onDrop = new EventEmitter<CdkDragDrop<any, any, any>>();
  @Output() refreshBoard = new EventEmitter<void>();

  @Input() column!: BoardColumn;

  @ViewChild('columnContextMenu') contextMenu!: TemplateRef<any>;

  overlayRef: OverlayRef | null = null;
  closeSubscription?: Subscription;

  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    private deleteColumn: DeleteColumnGQL,
    private createCard: CreateCardGQL,
    private dialog: MatDialog
  ) {}

  /**
   * Source: https://netbasal.com/context-menus-made-easy-with-angular-cdk-963797e679fc
   */
  openContextMenu(e: MouseEvent) {
    e.preventDefault();

    const { x, y } = e;

    this.closeContextMenu();

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo({ x, y })
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(), // Close overlay on scroll
    });

    // Attach template to overlay
    this.overlayRef.attach(
      new TemplatePortal(this.contextMenu, this.viewContainerRef)
    );

    // Close on click outside of context menu
    this.closeSubscription = fromEvent<MouseEvent>(document, 'click')
      .pipe(
        filter(
          (event) =>
            !this.overlayRef?.overlayElement.contains(
              event.target as HTMLElement
            )
        ),
        take(1)
      )
      .subscribe(() => this.closeContextMenu());
  }

  closeContextMenu() {
    this.closeSubscription && this.closeSubscription.unsubscribe();
    if (!this.overlayRef) return;
    this.overlayRef.dispose();
    this.overlayRef = null;
  }

  openCreateCardDialog() {
    const dialogRef = this.dialog.open<CreateCardComponent, any, Card>(
      CreateCardComponent,
      {}
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;

      this.createCard
        .mutate({
          ...result,
          columnId: this.column.id,
        })
        .subscribe(() => this.refreshBoard.emit());
    });
  }

  onDelete() {
    this.deleteColumn
      .mutate({ columnId: this.column.id })
      .subscribe(() => this.refreshBoard.emit());
  }
}
