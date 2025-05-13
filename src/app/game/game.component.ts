import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IconContainerComponent } from '../icon-container/icon-container.component';

@Component({
  selector: 'app-game',
  imports: [IconContainerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  @Output() userSelection = new EventEmitter();

  setValue(userSelectionInp: string) {
    this.userSelection.emit(userSelectionInp);
  }
}
