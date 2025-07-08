import { Produto } from "@/core/model/Produto";

export async function obterProdutos(): Promise<Produto[]> {
  return [
    { id: 1, nome: "Camiseta Básica", preco: 49.9, imagemUrl: "/produto1.png" },
    { id: 2, nome: "Camiseta Estampada", preco: 69.9, imagemUrl: "/produto1.png" },
    { id: 3, nome: "Camiseta Oversized", preco: 59.9, imagemUrl: "/produto1.png" },
    { id: 4, nome: "Camiseta Básica", preco: 49.9, imagemUrl: "/produto1.png" },
    { id: 5, nome: "Camiseta Estampada", preco: 69.9, imagemUrl: "/produto1.png" },
    { id: 6, nome: "Camiseta Oversized", preco: 59.9, imagemUrl: "/produto1.png" },
    { id: 7, nome: "Camiseta Básica", preco: 49.9, imagemUrl: "/produto1.png" },
    { id: 8, nome: "Camiseta Estampada", preco: 69.9, imagemUrl: "/produto1.png" },
    { id: 9, nome: "Camiseta Oversized", preco: 59.9, imagemUrl: "/produto1.png" },
    { id: 10, nome: "Camiseta Básica", preco: 49.9, imagemUrl: "/produto1.png" },
    { id: 12, nome: "Camiseta Estampada", preco: 69.9, imagemUrl: "/produto1.png" },
    { id: 13, nome: "Camiseta Oversized", preco: 59.9, imagemUrl: "/produto1.png" },
    // { id: 4, nome: "Camiseta Manga Longa", preco: 89.9, imagemUrl: "/camisa4.png" },
  ]
}

export async function obterProdutos2(): Promise<Produto[]> {
  return [
    { id: 1, nome: "Camiseta Básica", preco: 49.9, imagemUrl: "/produto1.png" },
    { id: 2, nome: "Camiseta Estampada", preco: 69.9, imagemUrl: "/produto1.png" },
    { id: 3, nome: "Camiseta Oversized", preco: 59.9, imagemUrl: "/produto1.png" },
  ]
}