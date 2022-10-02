import { Component, Input, OnInit } from '@angular/core';
import {
  Card,
  CARD_COLORS,
  TYPE_HUMANIZED,
} from '../../../../../shared/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  color!: string;
  type!: string;

  constructor() {}

  ngOnInit(): void {
    this.color = CARD_COLORS[this.card.type as keyof typeof CARD_COLORS];
    this.type = TYPE_HUMANIZED[this.card.type as keyof typeof CARD_COLORS];
  }
}
