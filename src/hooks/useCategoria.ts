import Backend from "@/backend"
import { useEffect, useState } from "react"
import { Categoria } from "@/core/model/Categoria"

export default function useCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([])

  useEffect(() => {
    Backend.categoria.obter().then(setCategorias)
  }, [])

  return { categorias }
}
