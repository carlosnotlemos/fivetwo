import obterTodosBeneficios from "./beneficio/obterTodosBeneficios"
import obterCategoriaComProdutos from "./categoria/obterCategoriaComProdutos"
import obterTodosProdutos from "./produto/obterTodosProdutos"
import obterSlideText from "./slidetext/obterSlideText"

export default class Backend {
  
  static readonly produtos = {
    // salvar: salvarProduto,
    obter: obterTodosProdutos,
    // excluir: excluirProduto
  }
  static readonly beneficio = {
    obter: obterTodosBeneficios,
  }

  static readonly slidetext = {
    obter: obterSlideText,
  }

  static readonly categoria = {
    obterComProdutos: obterCategoriaComProdutos,
  }
}