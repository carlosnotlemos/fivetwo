import Backend from "@/backend"
import { useEffect, useState } from "react"
import { Categoria } from "@/core/model/Categoria"

export default function useCategoriaComProdutos(categoria_id: number) {
  const [categoria, setCategoria] = useState<Categoria | null>(null)

  useEffect(() => {
    if (!categoria_id) return

    Backend.categoria.obterComProdutos(categoria_id).then(setCategoria)
  }, [categoria_id])

  return { categoria }
}
