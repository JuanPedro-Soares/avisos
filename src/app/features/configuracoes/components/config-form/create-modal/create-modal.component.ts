import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateModalComponent>
  ) {
    console.log(data)
  }

  
  selectedColor: string = '#000000';

  @ViewChild('colorPicker') colorPicker!: ElementRef<HTMLInputElement>;

  openColorPicker() {
    this.colorPicker.nativeElement.click();
  }

  updateColor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedColor = input.value;
    
  }
  closeColorPicker() {
    console.log(`Cor selecionada: ${this.selectedColor}`);
  }
  Salvar(){
    this.isLoading=true
    Swal.fire({
      title: "Concluído!",
      text: "Categoria atualizada com sucesso!",
      icon: "success"
    });
    this.dialogRef.close()

  }
}
