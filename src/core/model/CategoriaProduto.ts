import { Categoria } from "./Categoria"
import { Produto } from "./Produto"

export interface CategoriaProduto {
  id: number
  produto_id: number
  categoria_id: number
  produto?: Produto
  categoria?: Categoria
}