import { CategoriaProduto } from "./CategoriaProduto"

export interface Categoria {
  id: number
  nome: string
  subtitulo: string | null
  imagemurl: string | null
  categoriaProdutos?: CategoriaProduto[]
}