import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { ICategoria } from '#core/interfaces/categoria.interface';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent implements OnInit {
  dataSource: MatTableDataSource<ICategoria> = new MatTableDataSource<ICategoria>([]);

  constructor(
    private readonly dialog: MatDialog,
    private readonly configService: ConfiguracoesService,
  ) {}

  displayedColumns: string[] = ['Categorias', 'Ações'];

  ngOnInit(): void {
    this.getAllCategory();


    this.configService.updateTable$.subscribe((categorias: ICategoria[]) => {
      this.dataSource.data = categorias.filter(categoria => categoria.ativo !== false);
    });
  }

  getAllCategory() {
    this.configService.getAllCategorias().subscribe({
      next: (data: ICategoria[]) => {
        this.dataSource.data = data.filter(categoria => categoria.ativo !== false);
      },
      error: (error) => {
        console.error('Erro ao carregar categorias:', error);
      }
    });
  }

  updateAviso(element: ICategoria) {
    const dialog = this.dialog.open(EditModalComponent, {
      data: {
        title: 'Editar Categoria',
        icon: 'edit',
        data: element,
      }
    });

    dialog.afterClosed().subscribe({
      next: (result: any) => {
        if (result.updateCategoria) {
          this.getAllCategory(); 
        }
      }
    });
  }

  deleteAviso(element: ICategoria) {
    const dialog = this.dialog.open(DeleteModalComponent, {
      data: {
        title: 'Editar Categoria',
        icon: 'edit',
        data: element,
      }
    });

    dialog.afterClosed().subscribe({
      next: (result: any) => {
        if (result.deleteCategoria) {
          this.getAllCategory();
        }
      }
    });
  }
}
