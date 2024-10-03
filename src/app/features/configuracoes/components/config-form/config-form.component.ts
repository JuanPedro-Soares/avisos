import { Component } from '@angular/core';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent {
  value: { days: number; display: number; time: number } = { days: 90, display: 2, time: 10 };
  buttonsVisible: { days: boolean; display: boolean; time: boolean } = { days: false, display: false, time: false };

  increment(type: 'days' | 'display' | 'time') {
    this.value[type] += 1;
  }

  decrement(type: 'days' | 'display' | 'time') {
    if (this.value[type] > 1) {
      this.value[type] -= 1;
    }
  }

  showButtons(type: 'days' | 'display' | 'time') {
    this.buttonsVisible[type] = true;
  }

  hideButtons(type: 'days' | 'display' | 'time') {
    this.buttonsVisible[type] = false;
  }


  
}


