'use client'
import { useEffect, useState } from 'react';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const imagens = ['/bclaro.png', '/bescuro.png'];

export default function FooterBanner() {
  const [indice, setIndice] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [direcao, setDirecao] = useState<'left' | 'right'>('right');
  const [showCursor, setShowCursor] = useState(false); // 👈 controla a exibição da seta

  useEffect(() => {
    const mover = (e: MouseEvent) => {
      if (!showCursor) return;
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      setDirecao(e.clientX < window.innerWidth / 2 ? 'left' : 'right');
    };
    window.addEventListener('mousemove', mover);
    return () => window.removeEventListener('mousemove', mover);
  }, [showCursor]);

  const proxima = () => setIndice((i) => (i + 1) % imagens.length);
  const anterior = () => setIndice((i) => (i - 1 + imagens.length) % imagens.length);

  return (
    <section className="w-full h-full relative">
      <h2 className="text-3xl text-center font-bold py-4"> ;) para todos os corpos </h2>

      <div
        onClick={() => (direcao === 'left' ? anterior() : proxima())}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        className={`relative w-[1920px] h-[717px] mx-auto ${showCursor ? 'cursor-none' : 'cursor-default'}`}
      >
        <img
          src={imagens[indice]}
          alt=""
          className="w-full h-full object-contain select-none"
          draggable={false}
        />
      </div>

      {/* Ícone da seta que simula o cursor */}
      {showCursor && (
        <div
          className="fixed pointer-events-none z-50 text-black transition-transform duration-75"
          style={{
            left: mouseX,
            top: mouseY,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="bg-white rounded-full p-2 shadow-lg border border-neutral-300">
            {direcao === 'left' ? (
              <IconArrowLeft size={24} className="text-black" />
            ) : (
              <IconArrowRight size={24} className="text-black" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
