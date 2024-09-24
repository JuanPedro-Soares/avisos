import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ICustomerModalData } from '#core/interfaces/dialog.interface';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss'],
})
export class DeleteUserDialogComponent {
  constructor(
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: Omit<ICustomerModalData, 'customer'>,
    public dialogRef: MatDialogRef<DeleteUserDialogComponent>
  ) {}

  onSubmit() {
    const customerID = this.data.customerID;
    if (customerID !== undefined) {
      this.customerService.removeCustomer(customerID).subscribe({
        next: () => {
          this.dialogRef.close({
            deletedCustomer: true,
          });
        },
        error: response => {
          this.dialogRef.close({
            deletedCustomer: false,
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
          });
        },
      });
    }
  }
}
