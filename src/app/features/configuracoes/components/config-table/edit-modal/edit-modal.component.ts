import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ICustomerModalData } from '#core/interfaces/dialog.interface';
import { ICustomer } from '#core/interfaces/customer.interface';


@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
})
export class EditModalComponent implements OnInit {
  formData!: ICustomer;

  constructor(

    @Inject(MAT_DIALOG_DATA) public data: ICustomerModalData,
    public dialogRef: MatDialogRef<EditModalComponent>
  ) {}

  ngOnInit(): void {
    this.formData = { ...this.data.customer, id: this.data.customerID };
  }

}
