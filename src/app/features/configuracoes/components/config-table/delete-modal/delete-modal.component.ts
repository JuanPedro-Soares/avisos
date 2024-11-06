import { ICategoriaModal } from '#core/interfaces/categoria.interface';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  isLoading: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICategoriaModal,
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    public categoriaService:ConfiguracoesService
  ){

  }

  onSubmit(){
   const id=this.data.data.id
    this.isLoading = true;
    this.categoriaService.removeCategoria(id).subscribe({
      next:()=>{
        this.dialogRef.close({
          deleteCategoria: true,
        });
        Swal.fire({
          title: "Concluido!",
          text: "Categoria excluída com sucesso!",
          icon: "success"
        });
        
      },
      error: response =>{
        this.dialogRef.close({
          deleteCategoria: false,
        });
        if (response.status === 401) {
          return;
        }
          const message = response.error['erros'];
          Swal.fire({
            title: 'Oops...',
            text: message,
            icon: 'error',
            confirmButtonColor: '#2F9E41',
          }).then();
        
      }
    })
  }
}

