import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { INews, INewsDialog } from "#core/interfaces/news.interface";
import { FontSize } from "#shared/enums/font-size";
import { CardCategoriaBackgrounds } from "#shared/utils/card-backgrounds";
import { Category } from "#shared/enums/category.enum";

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss'],
})
export class EditNewsComponent {
  protected readonly FontSize = FontSize;
  protected tituloInput: string;
  protected descricaoInput = '';
  protected categoriaInput = Category.Comunicação;
  protected background = '';
  @Output() dadosAtualizados = new EventEmitter<INews>();
  @Output() categoriaAtualizada = new EventEmitter<Category>();

  private readonly cardCategoriaBackgrounds = CardCategoriaBackgrounds;
   protected readonly selectCategorias = [
    'Eventos',
    'Saúde',
    'Assistência Estudantil',
    'Gestão',
    'Ensino',
    'Calendário',
    'Comunicação',
    'Servidor',
    'Seleção',
    'Repercutiu',
  ];

  constructor(
    public dialogRef: MatDialogRef<EditNewsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: INewsDialog
  ) {
    this.tituloInput = data.tituloInput;
    this.descricaoInput = data.descricaoInput;
    this.categoriaInput = data.categoriaInput;
    this.background = data.backgroundColor;
  }
  
  limitCaractere = 140;

  contaCaracterer(event: Event) {
    const element = event.target as HTMLTextAreaElement;
    const cursorStart = element.selectionStart;
    const cursorEnd = element.selectionEnd;

    if (this.descricaoInput.length > this.limitCaractere) {
      this.descricaoInput = this.descricaoInput.slice(0, this.limitCaractere);
      element.value = this.descricaoInput;
      element.setSelectionRange(cursorStart, cursorEnd);
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') event.preventDefault();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  salvar() {
    this.data.tituloInput = this.tituloInput;
    this.data.descricaoInput = this.descricaoInput;
    this.data.categoriaInput = this.categoriaInput;

    const dadosAtualizados = {
      titulo: this.tituloInput,
      descricao: this.descricaoInput,
      categoriaId: this.categoriaInput,
      id: this.data.id,
    };

    this.dadosAtualizados.emit(dadosAtualizados);
    this.categoriaAtualizada.emit(this.categoriaInput);
    this.dialogRef.close(this.data);
  }

  onCategoriaChange(categoriaId: Category) {
    this.categoriaInput = categoriaId;
    const categoryBackground = CardCategoriaBackgrounds.find(bg => bg.avisos === categoriaId) || this.cardCategoriaBackgrounds[0];
    this.background = categoryBackground.background;
  }
}
