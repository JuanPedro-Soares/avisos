export interface Categoria {
 
  id:number;
  nome: string;
  cor:string;
  ativo:boolean;
}
export interface ICategoria_Modal {
  title: string;
  icon: string;
  data: Categoria;
}