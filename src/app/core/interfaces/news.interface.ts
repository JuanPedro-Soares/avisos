import { Category } from '#shared/enums/category.enum';

export interface INews {
  id: number;
  titulo: string;
  descricao: string;
  categoriaId: Category;
}

export interface INewsDialog {
  title: string;
  tituloInput: string;
  descricaoInput: string;
  categoriaInput: Category;
  backgroundColor: string;
  id: number;
  inCarousel: boolean;
  isModal: boolean;
  isCarousel: boolean;
}

export interface INewsCard {
  id: number;
  cardBackground: string;
  avisos: number;
  titulo: string;
  descricao: string;
  categoriaId: Category;
}

export interface INewsCardExibition {
  cardBackground: string;
  avisos: number;
  titulo: string;
  descricao: string;
  categoriaId: string;
}
