import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICustomerModalData } from '#core/interfaces/dialog.interface';
import { ICustomer } from '#core/interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss'],
})
export class CreateUserDialogComponent {
  constructor(
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA)
    public data: Omit<ICustomerModalData, 'customerID' | 'customer'>,
    public dialogRef: MatDialogRef<CreateUserDialogComponent>
  ) {}

  saveCustomer(customerData: ICustomer) {
    this.customerService
      .saveCustomer({ ...customerData, ativo: true })
      .subscribe({
        next: () => {
          this.dialogRef.close({
            createdCustomer: true,
          });
        },
        error: response => {
          this.dialogRef.close({
            createdCustomer: false,
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
