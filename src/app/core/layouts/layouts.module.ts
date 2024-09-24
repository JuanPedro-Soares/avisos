import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { SharedModule } from '#shared/shared.module';

@NgModule({
  declarations: [CommonLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [CommonLayoutComponent],
})
export class LayoutsModule {}
