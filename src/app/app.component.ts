import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameHeaderComponent } from './game-header/game-header.component';
import { GameComponent } from './game/game.component';
import { RulesModalComponent } from './rules-modal/rules-modal.component';
import { CommonModule } from '@angular/common';
import { ResultPageComponent } from './result-page/result-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    GameHeaderComponent,
    GameComponent,
    RulesModalComponent,
    CommonModule,
    ResultPageComponent,
  ],
})
export class AppComponent {
  show = false;
  score = +(localStorage.getItem('score') || 0);
  userSelection = '';
  currentStep = 1;
  isWon = false;

  data = [
    ['scissors', 'paper'],
    ['paper', 'rock'],
    ['rock', 'lizard'],
    ['lizard', 'spock'],
    ['spock', 'scissors'],
    ['scissors', 'lizard'],
    ['paper', 'spock'],
    ['rock', 'scissors'],
    ['lizard', 'paper'],
    ['spock', 'rock'],
  ];

  selections = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

  handleShow(showModal: boolean) {
    this.show = showModal;
  }

  handleUserSelection(userSelection: string) {
    this.userSelection = userSelection.toLowerCase();
    this.currentStep = 2;
  }

  handleScore(computerSelection: string) {
    const [userSelection, computerFinalSelection] = [
      this.userSelection,
      computerSelection,
    ];

    this.data.map((option) => {
      if (option[0] === userSelection && option[1] === computerFinalSelection) {
        this.score = +(localStorage.getItem('score') || 0) + 1;
        this.isWon = true;
      }
    });

    localStorage.setItem('score', JSON.stringify(this.score));
    this.currentStep = 3;
  }

  tryAgain() {
    this.currentStep = 1;
  }
}
