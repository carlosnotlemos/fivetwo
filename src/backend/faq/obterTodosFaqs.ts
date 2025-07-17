'use server'
import RepositorioFaq from "./RepositorioFaq";

export default async function obterTodosFaqs(){
  return RepositorioFaq.obterTodosFaqs()
} 