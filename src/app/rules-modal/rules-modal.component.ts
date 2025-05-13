import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rules-modal',
  imports: [],
  templateUrl: './rules-modal.component.html',
  styleUrl: './rules-modal.component.css',
})
export class RulesModalComponent {
  @Output() show = new EventEmitter(false);

  hideModal() {
    this.show.emit(false);
  }
}
