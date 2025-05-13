import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-icon-container',
  imports: [CommonModule],
  templateUrl: './icon-container.component.html',
  styleUrl: './icon-container.component.css',
})
export class IconContainerComponent implements OnChanges {
  @Output() score = new EventEmitter();
  @Input() className = '';
  @Input() imageName = '';
  @Input() isWon = false;

  imageUrl = '';

  ngOnChanges() {
    this.imageUrl = 'assets/images/' + this.imageName;
  }
}
