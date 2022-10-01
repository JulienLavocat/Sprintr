import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-actions',
  templateUrl: './board-actions.component.html',
  styleUrls: ['./board-actions.component.scss'],
})
export class BoardActionsComponent {
  @Input() beginSprint: boolean = false;
  @Input() endSprint: boolean = false;
}
