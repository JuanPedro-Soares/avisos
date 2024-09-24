import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconModule } from '#shared/icons/Icon.module';
import { MaterialModule } from '#shared/material.module';
import { ButtonComponent } from './button/button.component';
import { GenericModalComponent } from './generic-modal/generic-modal-modal.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [ButtonComponent, GenericModalComponent, SpinnerComponent],
  imports: [CommonModule, IconModule, FormsModule, MaterialModule],
  exports: [ButtonComponent, GenericModalComponent, SpinnerComponent],
})
export class ComponentsModule {}
