import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationRoutingModule } from './aviso-routing.module';
import { AvisoComponent } from './aviso.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AvisoComponent],
  imports: [CommonModule, PresentationRoutingModule, ComponentsModule],
})
export class AvisosModule {}
