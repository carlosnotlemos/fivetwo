import obterTodosProdutos from "./produto/obterTodosProdutos"

export default class Backend {
  
  static readonly produtos = {
    // salvar: salvarProduto,
    obter: obterTodosProdutos,
    // excluir: excluirProduto
  }
}