import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { SharedModule } from '#shared/shared.module';
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    CreateUserDialogComponent,
    DeleteUserDialogComponent,
    EditUserDialogComponent,
    FormComponent,
  ],
  imports: [CommonModule, SharedModule, A11yModule],
  exports: [
    CreateUserDialogComponent,
    DeleteUserDialogComponent,
    EditUserDialogComponent,
  ],
})
export class ComponentsModule {}
