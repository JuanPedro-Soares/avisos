import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ICustomerModalData } from '#core/interfaces/dialog.interface';
import { ICustomer } from '#core/interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
})
export class EditUserDialogComponent implements OnInit {
  formData!: ICustomer;

  constructor(
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: ICustomerModalData,
    public dialogRef: MatDialogRef<EditUserDialogComponent>
  ) {}

  ngOnInit(): void {
    this.formData = { ...this.data.customer, id: this.data.customerID };
  }

  updateCustomer(customer: ICustomer) {
    const customerData = { ...customer, id: this.data.customer.id };
    this.customerService
      .updateCustomer(this.data.customer.id, customerData)
      .subscribe({
        next: () => {
          this.dialogRef.close({
            updatedCustomer: true,
          });
        },
        error: response => {
          this.dialogRef.close({
            updatedCustomer: false,
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
