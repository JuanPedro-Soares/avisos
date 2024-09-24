import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '#shared/shared.module';
import { MaterialModule } from '#shared/material.module';
import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { ComponentsModule } from './components/components.module';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ComponentsModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [ManagerComponent],
  providers: [CustomerService],
})
export class ManagerModule {}
