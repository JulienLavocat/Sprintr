import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../../../../shared/models/card.model';

const CARD_COLORS = {
  sprint_objective: '#172b4d',
  story: '#7bc86c',
  investigation: '#5ba4cf',
  bug: '#ef7564',
  debt: '#ffaf3f',
  support: '#f5dd29',
  marketing: '#cd8de5',
  misc: '#FF8ED4',
};

const TYPE_HUMANIZED: Record<keyof typeof CARD_COLORS, string> = {
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
  color!: string;
  type!: string;

  constructor() {}

  ngOnInit(): void {
    this.color = CARD_COLORS[this.card.type as keyof typeof CARD_COLORS];
    this.type = TYPE_HUMANIZED[this.card.type as keyof typeof CARD_COLORS];
  }
}
