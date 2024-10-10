import { Categoria, ICategoria_Modal } from '#core/interfaces/categoria.interface';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  categoriaForm!:FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICategoria_Modal,
    public dialogRef: MatDialogRef<EditModalComponent>,
    private readonly categoriaService:ConfiguracoesService,
    private readonly formBuilder: FormBuilder
  ) {
    this.categoriaForm = this.formBuilder.group({
      nome:[data.data.nome,[Validators.required] ],
      cor:[data.data.cor, Validators.required],
      id:[data.data.id]
    })
    
  }
  nome:string=this.data.data.nome
  @ViewChild('colorPicker') colorPicker!: ElementRef<HTMLInputElement>;

  openColorPicker() {
    this.colorPicker.nativeElement.click();
  }
 
  updateColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.data.data.cor=input.value
  }
  
  updateCategoria(categoria: Categoria) {
    this.isLoading = true;
    if (this.categoriaForm.invalid) {
      Swal.fire({
        title: 'Erro',
        text: 'Por favor, preencha todos os campos corretamente.',
        icon: 'error'
      });
      return;
    }
    const categoriaData={
      Nome: this.categoriaForm.value.nome,
      Cor: categoria.cor,
      Id: this.data.data.id
    }
    const formData = new FormData();
    formData.append('Nome', categoriaData.Nome);
    formData.append('Cor', categoriaData.Cor);
    formData.append('Id', categoriaData.Id.toString()); 
    this.categoriaService.updateCategoria(this.data.data.id, formData).subscribe({
      next: (response) => {
        this.dialogRef.close({
          updateCategoria: true,
        });
        console.log(response)
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
      
        const message = response.error['erros'];
        Swal.fire({
          title: 'Oops...',
          text: message,
          icon: 'error',
          confirmButtonColor: '#2F9E41',
        }).then();
      },
    });
  
  }
  
}
