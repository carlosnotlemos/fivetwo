import Backend from "@/backend";
import { Faq } from "@/generated/prisma";
import { useEffect, useState } from "react";

export default function useFaq(){
  const [faqs, setFaqs] = useState<Faq[]>([])

  useEffect(() => {
    Backend.faq.obter().then(setFaqs)
  }, [])

  return {
    faqs
  }
}

