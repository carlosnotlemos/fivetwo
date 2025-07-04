import { Produto } from "@/core/model/Produto";

export async function obterProdutos(): Promise<Produto[]> {
  return [
    { id: 1, nome: "Camiseta Básica", preco: 49.9, imagemUrl: "/camisa1.png" },
    { id: 2, nome: "Camiseta Estampada", preco: 69.9, imagemUrl: "/camisa2.png" },
    { id: 3, nome: "Camiseta Oversized", preco: 59.9, imagemUrl: "/camisa3.png" },
    { id: 4, nome: "Camiseta Manga Longa", preco: 89.9, imagemUrl: "/camisa4.png" },
  ]
}