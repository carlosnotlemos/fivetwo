import Backend from "@/backend"
import { Produto } from "@/core/model/Produto"
import { useEffect, useState } from "react"

export default function useProdutos(){
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [produto, setProduto] = useState<Partial<Produto> | null>(null)

  useEffect(() => {
    Backend.produtos.obter().then(setProdutos)
  }, [])

  return {
    produto,
    produtos,
  }
}