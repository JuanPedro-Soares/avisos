import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { INews } from "#core/interfaces/news.interface";
import { FontSize } from "#shared/enums/font-size";
import { NoticesService } from "#shared/services/notices/notices.service";
import { CardCategoriaBackgrounds } from "#shared/utils/card-backgrounds";
import { EditNewsComponent } from "../edit-news/edit-news.component";
import { Category } from "#shared/enums/category.enum";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"],
})
export class NewsCardComponent implements OnInit, OnChanges {
  @Input() modoEdicao = false;
  @Input() avisos: number = 0;
  @Input() tituloInput = "Adicione um Titulo";
  @Input() descricaoInput = "Adicione uma descrição";
  @Input() categoriaInput: Category = 0;
  @Input() background = "";
  @Input() id!: number;
  @Input() showControls = true;
  @Input() fontSize: FontSize = FontSize.Small;
  @Output() dadosAtualizados: EventEmitter<INews> = new EventEmitter<INews>();
  protected categoria!: string;

  protected isModal = false;
  private readonly cardCategoriaBackgrounds = CardCategoriaBackgrounds;

  constructor(
    protected dialog: MatDialog,
    private noticesService: NoticesService,
  ) {}
  
  ngOnInit(): void {
    this.categoria = Category[this.categoriaInput];
  }
  
  ngOnChanges() {
    this.categoria = Category[this.categoriaInput];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditNewsComponent, {
      data: {
        title: this.avisos,
        tituloInput: this.tituloInput,
        descricaoInput: this.descricaoInput,
        categoriaInput: this.categoriaInput,
        backgroundColor: this.background,
        id: this.id,
        isModal: true,
        isCarousel: true,
      },
      width: "80vw",
    });

    this.afterDialogClosedHandling(dialogRef);

    dialogRef.componentInstance.categoriaAtualizada.subscribe(
      (categoriaId: number) => {
        this.updateBackground(categoriaId);
        this.categoria = Category[categoriaId];
      },
    );
  }

  private afterDialogClosedHandling(
    dialogRef: MatDialogRef<EditNewsComponent>,
  ): void {
    dialogRef.componentInstance.dadosAtualizados.subscribe((result: INews) => {
      this.handleDadosAtualizados(result);
    });
  }

  private handleDadosAtualizados(result: INews): void {
    this.tituloInput = result?.titulo || "";
    this.descricaoInput = result?.descricao || "";
    this.categoriaInput = result?.categoriaId || 7;

    this.dadosAtualizados.emit(result);
    
    const payload: Partial<INews> = {
      titulo: result?.titulo,
      descricao: result?.descricao || "",
      categoriaId: result?.categoriaId || 7,
      id: result?.id,
    };

    this.noticesService
      .atualizarDados(result?.id, payload)
      .subscribe((response: INews) => {
        this.dadosAtualizados.emit(response);
      });
  }

  updateBackground(categoriaId: number): void {
    const categoryBackground = CardCategoriaBackgrounds.find((bg) => bg.avisos === categoriaId) || this.cardCategoriaBackgrounds[0];
    this.background = categoryBackground.background;
  }
}
