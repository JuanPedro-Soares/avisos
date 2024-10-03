import { Categoria } from '#core/interfaces/categoria.interfase';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Categoria,
    public dialogRef: MatDialogRef<DeleteModalComponent>
  ){

  }

  onSubmit(){
    Swal.fire({
      title: "Concluido!",
      text: "Categoria excluída com sucesso!",
      icon: "success"
    });
    this.dialogRef.close()
  }
}
