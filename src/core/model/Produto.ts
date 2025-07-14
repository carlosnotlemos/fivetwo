import { CategoriaProduto } from "./CategoriaProduto"

export interface Produto {
  id: number
  nome: string
  preco: number
  imagemurl: string
  categorias?: CategoriaProduto[]
}