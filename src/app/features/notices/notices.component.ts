import { Component, OnInit, inject } from '@angular/core';
import { INewsCard } from '#core/interfaces/news.interface';
import { CardCategoriaBackgrounds } from '#shared/utils/card-backgrounds'; // Importação correta do array
import { NoticesService } from '#shared/services/notices/notices.service';
import { BuscarAvisos } from '#core/entities/busca/buscar-avisos';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
})
export class NoticesComponent implements OnInit {
  protected cardsData: INewsCard[] = [];
  private readonly cardCategoriaBackgrounds = CardCategoriaBackgrounds;
  private readonly noticesService = inject(NoticesService);

  ngOnInit(): void {
    this.CarouselData();
  }

  CarouselData(): void {
    this.noticesService.buscar({} as BuscarAvisos).subscribe(data => {
      this.cardsData = data.map((item, index) => {
        const categoryBackground = this.cardCategoriaBackgrounds.find(bg => bg.avisos === item.categoriaId) || this.cardCategoriaBackgrounds[0];
        return {
          id: item.id,
          cardBackground: categoryBackground.background,
          avisos: index + 1,
          titulo: item.titulo,
          descricao: item.descricao,
          categoriaId: item.categoriaId,
        };
      });
    });
  }
}
