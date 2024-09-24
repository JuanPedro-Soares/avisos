import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material.module';
import { IconModule } from './icons/Icon.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ComponentsModule,
    IconModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ComponentsModule,
    IconModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
