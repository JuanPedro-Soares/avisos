import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { SharedModule } from '#shared/shared.module';
import { ComponentsModule } from '../configuracoes/components/components.module';


@NgModule({
  declarations: [
    ConfiguracoesComponent,
  ],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    SharedModule,
    ComponentsModule
  ],


})
export class ConfiguracoesModule { 

}
