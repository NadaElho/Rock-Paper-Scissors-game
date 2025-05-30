import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-header',
  imports: [],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.css',
})
export class GameHeaderComponent {
  @Input() score = +(localStorage.getItem('score') || 0);
}
