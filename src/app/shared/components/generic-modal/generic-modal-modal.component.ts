// generic-modal.component.ts
import { Component, Inject, Input, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['generic-modal.component.scss'],
})
export class GenericModalComponent<T> {
  @Input() contentTemplate!: TemplateRef<T>;
  @Input() headerTemplate!: TemplateRef<T>;
  dadosAtualizados!: TemplateRef<T>;

  constructor(
    public dialogRef: MatDialogRef<GenericModalComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public data: Component
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  salvar() {
    this.dialogRef.close(this.data);
  }
}
