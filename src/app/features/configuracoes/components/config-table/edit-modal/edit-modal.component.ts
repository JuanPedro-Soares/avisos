import { Categoria, ICategoria_Modal } from '#core/interfaces/categoria.interfase';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
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
    private categoriaService:ConfiguracoesService,
    private formBuilder: FormBuilder
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
    if (this.categoriaForm.invalid) {
      Swal.fire({
        title: 'Erro',
        text: 'Por favor, preencha todos os campos corretamente.',
        icon: 'error'
      });
      return;
    }
    const formData = new FormData();
    formData.append('Nome', categoria.nome);
    formData.append('Cor', categoria.cor);
    formData.append('Id', categoria.id.toString()); 
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
