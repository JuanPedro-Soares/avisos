import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { Categoria } from '#core/interfaces/categoria.interfase';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';



const ELEMENT_DATA: Categoria[] = [
  {categoria:'Evento'},
];

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent {
constructor(
  private dialog:MatDialog
){

}
  displayedColumns: string[] = ['Categorias','Ações'];
  dataSource = ELEMENT_DATA;
  updateAviso(element:Categoria){
      const dialog = this.dialog.open(EditModalComponent,
      {
        data:{
          title: 'Editar Categoria',
          icon:'edit',
          data:element,
        }
      });
     

  }
  apagarAviso(element:Categoria){
    const dialog = this.dialog.open(DeleteModalComponent,
    {
      data:{
        title: 'Editar Categoria',
        icon:'edit',
        data:element,
      }
    });
   

}
}
