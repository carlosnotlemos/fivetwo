import NavBar from "./navbar/NavBar";

export interface MainLayoutProps {
  children: any
  className?: string
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full">
        <NavBar />
        <img
          src="/bclaro.png"
          alt="Descrição da imagem"
          className="w-full h-auto object-cover "
          style={{ maxHeight: '717px' }}
        />
      </header>
      <div className="bg-neutral-100 text-center text-sm sm:text-base font-medium text-gray-800 h-[30px] py-1 shadow">
        🎉 FiveTwo: 100% de desconto na primeira compra! 🎁
      </div>
      <main className={`flex-1 p-7 ${props.className ?? ""} `}>{props.children}</main>
    </div>
  );
}