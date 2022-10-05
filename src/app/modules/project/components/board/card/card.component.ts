import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { filter, fromEvent, Subscription, take } from 'rxjs';
import { Card, DeleteCardGQL } from '../../../../../graphql/generated';

export const CARD_COLORS = {
  sprint_objective: '#172b4d',
  story: '#7bc86c',
  investigation: '#5ba4cf',
  bug: '#ef7564',
  debt: '#ffaf3f',
  support: '#f5dd29',
  marketing: '#cd8de5',
  misc: '#FF8ED4',
};

export const TYPE_HUMANIZED: Record<keyof typeof CARD_COLORS, string> = {
  sprint_objective: "Sprint's objective",
  story: 'Story',
  investigation: 'Investigation',
  bug: 'Bug',
  debt: 'Debt',
  support: 'Support',
  marketing: 'Marketing',
  misc: 'Misc',
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Input() boardId!: string;

  @ViewChild('cardContextMenu') contextMenu!: TemplateRef<any>;

  color!: string;
  type!: string;

  overlayRef: OverlayRef | null = null;
  closeSubscription?: Subscription;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private deleteCard: DeleteCardGQL
  ) {}

  ngOnInit(): void {
    this.color = CARD_COLORS[this.card.type as keyof typeof CARD_COLORS];
    this.type = TYPE_HUMANIZED[this.card.type as keyof typeof CARD_COLORS];
  }

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

  onDeleteCard() {
    this.deleteCard
      .mutate({
        boardId: this.boardId,
        cardId: this.card.id,
      })
      .subscribe(() => {
        //TODO: Handle this
      });
  }
}
