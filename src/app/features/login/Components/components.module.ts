import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '#shared/shared.module';
import { InputComponent } from './Input/input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, SharedModule],
  exports: [InputComponent],
})
export class ComponentsModule {}
