import { FooterBannerImg } from "@/generated/prisma";

export default function Carousel({imagens, indice}: {imagens: FooterBannerImg[]; indice: number; }) {
  return (
    <>
      {imagens.map((imagem, i) => (
        <img
          key={imagem.id}
          src={imagem.imagemurl}
          alt=""
          draggable={false}
          className={`
            absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out
            ${indice === i ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 z-10'}
            select-none
          `}
        />
      ))}
    </>
  )
}
