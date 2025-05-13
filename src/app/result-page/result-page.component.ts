import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconContainerComponent } from '../icon-container/icon-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-page',
  imports: [IconContainerComponent, CommonModule],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css',
})
export class ResultPageComponent implements OnInit {
  @Input() userSelection = '';
  @Input() isWon = false;
  @Output() tryAgain = new EventEmitter(false);
  @Output() computerFinalSelection = new EventEmitter();
  showResult = false;
  showBlankCircle = true;
  selections = ['Scissors', 'Paper', 'Rock', 'Lizard', 'Spock'];
  computerSelection = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.showBlankCircle = true;
      const interval = setInterval(() => {
        this.showBlankCircle = false;
        this.computerSelection =
          this.selections[Math.floor(Math.random() * 4)].toLowerCase();
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        this.computerFinalSelection.emit(this.computerSelection);
        this.showResult = true;
      }, 2000);
    }, 500);
  }

  handleTryAgain() {
    this.tryAgain.emit(true);
  }
}
