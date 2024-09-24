import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticesComponent } from './notices.component';
import { SharedModule } from '#shared/shared.module';
import { NoticesRoutingModule } from './notices-routing.module';
import { ComponentsModule } from './components/components.module';
import { NoticesService } from '#shared/services/notices/notices.service';

@NgModule({
  declarations: [NoticesComponent],
  imports: [CommonModule, SharedModule, NoticesRoutingModule, ComponentsModule],
  providers: [NoticesService],
})
export class NoticesModule {}
