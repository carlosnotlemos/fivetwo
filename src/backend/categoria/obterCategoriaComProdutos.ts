'use server'

import RepositorioCategoria from "./RepositorioCategoria"

export default async function obterCategoriaComProdutos(id: number) {
  return await RepositorioCategoria.obterCategoriaComProdutos(id)
}
