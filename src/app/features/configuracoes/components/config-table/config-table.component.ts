import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { Categoria } from '#core/interfaces/categoria.interfase';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';
import { MatTableDataSource } from '@angular/material/table';





@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent implements OnInit{
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource<Categoria>(
    []
  );
constructor(
  private dialog:MatDialog,
  private ConfigService:ConfiguracoesService,
){

}
displayedColumns: string[] = ['Categorias','Ações'];
  ngOnInit(): void {
   this.getAllCategory()
  }
  getAllCategory(){
    this.ConfigService.getAllCategorias().subscribe({
      next:(data:Categoria[])=>{
        this.dataSource.data=data.filter(
          categoria => categoria.ativo != false
        )
      }
    })
  }
  
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
