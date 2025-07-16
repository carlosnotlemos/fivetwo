'use server'
import RepositorioCategoria from "./RepositorioCategoria";

export default async function obterTodasCategorias() {
  return await RepositorioCategoria.obterTodasCategorias()
}