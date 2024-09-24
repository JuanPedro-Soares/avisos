import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import {INews, INewsCardExibition,
} from '#core/interfaces/news.interface';
import { CardCategoriaBackgrounds } from '#shared/utils';
import { NoticesService } from '#shared/services/notices/notices.service';
import { HubService } from '#shared/services/hub/hub.service';
import { Category } from '#shared/enums/category.enum';

@Component({
  selector: 'app-presentation',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss'],
})
export class AvisoComponent implements OnInit, OnDestroy {
  private intervalSubscription!: Subscription;

  newsCards: INewsCardExibition[] = [];
  currentCardIndex = 0;
  private readonly cardCategoriaBackgrounds = CardCategoriaBackgrounds;
  readonly newsDurationInSeconds = 10;
  protected readonly newsDurationInSecondsString = `${this.newsDurationInSeconds}s`;

  constructor(
    private router: Router,
    private noticesService: NoticesService,
    private hubService: HubService
  ) {}

  ngOnInit() {
    this.loadData();
    this.currentCardIndex = 0;
    this.callNextCardAfterInterval(this.newsDurationInSeconds);
    this.hubService.startConnection();
    this.hubService.avisosUpdate(atualizacoes => {
      if (atualizacoes) {
        this.loadData();
        this.router.navigate(['/avisos']).then();
      }
    });
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
    
    this.hubService.stopConnection();
  }

  loadData(): void {
    this.noticesService.getNotices().subscribe(noticesData => {
      this.updateCardsData(noticesData);
    });
  }

  callNextCardAfterInterval(intervalTimeInSeconds: number): void {
    this.intervalSubscription = interval(intervalTimeInSeconds * 1000).subscribe(() => {
      this.nextCard();
    });
  }

  updateCardsData(cardsData: INews[]): void {
    this.newsCards = cardsData.map(card => {
      const categoryBackground =
        CardCategoriaBackgrounds.find(bg => bg.avisos === card.categoriaId) ||
        this.cardCategoriaBackgrounds[0];
      return {
        cardBackground: categoryBackground.background,
        avisos: categoryBackground.avisos,
        titulo: card.titulo,
        descricao: card.descricao,
        categoriaId: card.categoriaId ? Category[card.categoriaId] : 'Comunicação',
      };
    });
  }

  getCurrentCard(): INewsCardExibition {
    return (
      this.newsCards[this.currentCardIndex] ??
      ({
        cardBackground: this.cardCategoriaBackgrounds[7].background,
        avisos: 7,
        titulo: 'Sem avisos no momento',
        descricao: '',
        categoriaId: "Comunicação",
      } as INewsCardExibition)
    );
  }

  nextCard(): void {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.newsCards.length;
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey() {
    this.router.navigate(['/']).then();
  }
}
