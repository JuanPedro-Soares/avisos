import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ICustomerModalData } from '#core/interfaces/dialog.interface';
import { ICustomer } from '#core/interfaces/customer.interface';
import { Categoria } from '#core/interfaces/categoria.interfase';



@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent  {
  isLoading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditModalComponent>
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
