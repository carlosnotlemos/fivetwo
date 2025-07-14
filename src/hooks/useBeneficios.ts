import Backend from "@/backend"
import { Beneficio } from "@/core/model/Beneficio"
import { useEffect, useState } from "react"

export default function useProdutos(){
  const [beneficios, setBeneficios] = useState<Beneficio[]>([])

  useEffect(() => {
    Backend.beneficio.obter().then(setBeneficios)
  }, [])

  return {
    beneficios,
  }
}