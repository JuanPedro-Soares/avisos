import { Categoria, ICategoria_Modal } from '#core/interfaces/categoria.interfase';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent  {
  isLoading = false;
  formData!:Categoria;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICategoria_Modal,
    public dialogRef: MatDialogRef<EditModalComponent>,
    private categoriaService:ConfiguracoesService,
  ) {
  }

  
  selectedColor: string = '#000000';

  @ViewChild('colorPicker') colorPicker!: ElementRef<HTMLInputElement>;

  openColorPicker() {
    this.colorPicker.nativeElement.click();
  }
 

  updateColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedColor = input.value;
    this.data.data.cor=this.selectedColor
  }
  closeColorPicker() {
   
  }
  updateCategoria(categoria: Categoria) {
    const categoriaData = {
      Nome: categoria.nome,
      Cor: categoria.cor,
      Id: this.data.data.id, 
    }; 
    const formData = new FormData();
    formData.append('Nome', categoriaData.Nome);
    formData.append('Cor', categoriaData.Cor);
    formData.append('Id', categoriaData.Id.toString()); 
    this.categoriaService.updateCategoria(this.data.data.id, formData).subscribe({
      next: () => {
        this.dialogRef.close({
          updateCategoria: true,
        });
        Swal.fire({
          title: "Concluído!",
          text: "Categoria atualizada com sucesso!",
          icon: "success"
        });
      },
      error: response => {
        this.dialogRef.close({
          updateCategoria: false
        });
        if (response.status === 401) {
          return;
        }
        console.log(response);
        const message = response.error['erros'];
        Swal.fire({
          title: 'Oops...',
          text: message,
          icon: 'error',
          confirmButtonColor: '#2F9E41',
        }).then();
      },
    });
  
    this.isLoading = true;
  }
  
}
