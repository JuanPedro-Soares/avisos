import { Component } from '@angular/core';

export interface PeriodicElement {
  categoria: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {categoria:'Evento'},
];

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent {

  displayedColumns: string[] = ['Categorias','Ações'];
  dataSource = ELEMENT_DATA;

}
