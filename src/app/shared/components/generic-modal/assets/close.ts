import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-close',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 16 15"
      fill="none">
      <path
        d="M1.74146 14L8.24146 7.5M14.7415 1L8.24146 7.5M8.24146 7.5L14.7415 14L1.74146 1"
        stroke="#7D7D7D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  `,
})
export class SvgCloseComponent {
  @Input() width = '16';
  @Input() height = '15';
  @Input() color = '';
}
