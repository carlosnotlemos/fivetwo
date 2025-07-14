'use server'

import RepositorioBeneficio from "./RepositorioBeneficio";

export default async function obterTodosBeneficios(){
  return RepositorioBeneficio.obterTodosBeneficios()
}