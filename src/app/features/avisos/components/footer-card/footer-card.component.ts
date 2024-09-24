import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-card',
  templateUrl: './footer-card.component.html',
  styleUrls: ['./footer-card.component.scss'],
})
export class FooterCardComponent implements OnInit {
  protected readonly email = 'http://ifce.edu.br/maracanau';
  protected readonly telephone = '(85) 3512-8701';

  ngOnInit() {
    this.showDate();
    this.showHour();
  }

  showDate() {
    const date = new Date();
    const formattedDate = date.getDate().toString().padStart(2, '0');
    const formattedMonth = (date.getMonth() + 1).toString().padStart(2, '0');

    return `${formattedDate}/${formattedMonth}/${date.getFullYear()}`;
  }

  showHour() {
    const hour = new Date();
    const formattedHour = hour.getHours().toString().padStart(2, '0');
    const formattedMinutes = hour.getMinutes().toString().padStart(2, '0');

    return `${formattedHour}:${formattedMinutes}`;
  }
}
