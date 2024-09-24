import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
  booleanAttribute,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonTitle = '';
  @Input() buttonIconPath = '';
  @Input() routerLink = '';
  @Input() disabled = false;
  @Input() isLoading = false;
  @Input({ transform: booleanAttribute }) isButtonCancel? = false;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  isMobile = false;

  constructor() {
    this.checkIfMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkIfMobile();
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth < 768;
  }
}
