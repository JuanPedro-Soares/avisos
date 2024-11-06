import { ICategoria } from '#core/interfaces/categoria.interface';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {
  isLoading = false;
  formData!:ICategoria;
  categoriaForm!:FormGroup
  selectedColor: string = '#000000';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateModalComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly categoriaService:ConfiguracoesService,
  ) {
  this.categoriaForm = this.formBuilder.group({
    nome:['',[Validators.required] ],
    cor:[this.selectedColor, Validators.required],
  })
}

  @ViewChild('colorPicker') colorPicker!: ElementRef<HTMLInputElement>;

  openColorPicker() {
    this.colorPicker.nativeElement.click();
  }

  updateColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedColor = input.value;
    
  }

  Salvar(){
    this.isLoading=true
    const formData = new FormData();
    formData.append('Nome',this.categoriaForm.value.nome)
    formData.append('Cor',this.categoriaForm.value.cor)
    this.categoriaService.createCategoria(formData).subscribe({
      next:()=>{
        this.dialogRef.close({
         createCategoria:true
        })
        Swal.fire({
          title: "Concluído!",
          text: "Categoria atualizada com sucesso!",
          icon: "success"
        });
      },
      error: response=>{
        this.dialogRef.close({
          createCategoria:false
         })
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
