import { Component, Input } from '@angular/core';

@Component({
  selector: "app-carousel-card",
  templateUrl: "./carousel-card.component.html",
  styleUrls: ["./carousel-card.component.scss"],
})
export class CarouselCardComponent {
  @Input() avisos: number = 0;
  @Input() categoriaInput: string = '';
  @Input() tituloInput = "Adicione um Titulo";
  @Input() descricaoInput = "Adicione uma descrição";
  @Input() background = "";
  @Input() id = "";
  @Input() duration?: string = '10s';
}
