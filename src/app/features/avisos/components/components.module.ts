import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { FooterCardComponent } from './footer-card/footer-card.component';

@NgModule({
  declarations: [CarouselCardComponent, FooterCardComponent],
  imports: [CommonModule],
  exports: [CarouselCardComponent],
})
export class ComponentsModule {}
