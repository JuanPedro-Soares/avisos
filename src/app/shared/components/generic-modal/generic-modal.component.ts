import { Component, Input, TemplateRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss'],
})
export class GenericModalComponent {
  @Input() readonly contentTemplate!: TemplateRef<Element>;
  @Input() readonly headerTemplate!: TemplateRef<Element>;

  constructor(protected dialogRef: MatDialogRef<GenericModalComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
