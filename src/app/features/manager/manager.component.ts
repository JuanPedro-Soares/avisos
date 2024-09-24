import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ICustomer } from 'src/app/core/interfaces/customer.interface';
import { CustomerService } from './services/customer.service';
import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';
import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';
import { EditUserDialogComponent } from './components/edit-user-dialog/edit-user-dialog.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  allUsers!: ICustomer[];
  dataSource: MatTableDataSource<ICustomer> = new MatTableDataSource<ICustomer>(
    []
  );
  displayedColumns = ['description', 'email', 'action'];

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    const active = false;
    this.customerService.getAllCustomers().subscribe({
      next: (data: ICustomer[]) => {
        this.allUsers = data;
        this.dataSource.data = this.allUsers.filter(
          customer => customer.ativo != active
        );
      },
    });
  }

  saveCustomer() {
    const dialog = this.dialog.open(CreateUserDialogComponent, {
      data: {
        title: 'Novo Administrador',
        icon: 'add',
      },
    });
    dialog.afterClosed().subscribe(data => {
      if (typeof data === 'undefined' || !data.createdCustomer) return;
      Swal.fire({
        text: 'Usuário criado com sucesso!',
        icon: 'success',
        confirmButtonColor: '#2F9E41',
      });
      this.getAllCustomers();
    });
  }

  updateCustomer(customerData: ICustomer) {
    const dialog = this.dialog.open(EditUserDialogComponent, {
      data: {
        title: 'Editar Administrador',
        icon: 'edit',
        customer: customerData,
      },
    });
    dialog.afterClosed().subscribe(data => {
      if (typeof data === 'undefined' || !data.updatedCustomer) return;
      Swal.fire({
        text: 'Usuário atualizado com sucesso!',
        icon: 'success',
        confirmButtonColor: '#2F9E41',
      });
      this.getAllCustomers();
    });
  }

  removeCustomer(customerID: number) {
    const dialog = this.dialog.open(DeleteUserDialogComponent, {
      data: {
        title: 'Excluir Administrador',
        icon: 'add',
        customerID: customerID,
      },
    });
    dialog.afterClosed().subscribe(data => {
      if (typeof data === 'undefined' || !data.deletedCustomer) return;
      Swal.fire({
        text: 'Usuário removido com sucesso!',
        icon: 'success',
        confirmButtonColor: '#2F9E41',
      });
      this.getAllCustomers();
    });
  }
}
