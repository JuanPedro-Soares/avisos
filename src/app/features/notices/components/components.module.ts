import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '#shared/shared.module';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { NewsCardComponent } from './news-card/news-card.component';

@NgModule({
  declarations: [EditNewsComponent, NewsCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [EditNewsComponent, NewsCardComponent],
})
export class ComponentsModule {}
