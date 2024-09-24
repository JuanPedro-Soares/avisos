import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigFormComponent } from './config-form/config-form.component';
import { SharedModule } from '#shared/shared.module';
import { ConfigTableComponent } from './config-table/config-table.component';
import { EditModalComponent } from './config-table/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './config-table/delete-modal/delete-modal.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ConfigFormComponent, ConfigTableComponent, EditModalComponent, DeleteModalComponent],
  exports:[ConfigFormComponent,ConfigTableComponent]
})
export class ComponentsModule { }
