export interface ICategoria {
 
  id:number;
  nome: string;
  cor:string;
  ativo:boolean;
}
export interface ICategoriaModal {
  title: string;
  icon: string;
  data: ICategoria;
}