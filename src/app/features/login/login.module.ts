import { NgModule } from '@angular/core';
import { SharedModule } from '#shared/shared.module';
import { ComponentsModule } from './Components/components.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, ComponentsModule, SharedModule],
})
export class LoginModule {}
