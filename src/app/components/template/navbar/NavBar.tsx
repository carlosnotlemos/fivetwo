import { IconBrandProducthunt, IconFreeRights } from "@tabler/icons-react";
import NavItem from "./NavItem";

export default function NavBar(){
  return (
    <header
      className="bg-cover bg-center w-full text-white select-none"
      style={{
        backgroundImage: "url('/banner.png')",
        height: '717px',
      }}
    >
      <nav className="flex items-center gap-8 bg-black/20 py-4 px-6 rounded-lg backdrop-blur-md shadow-md max-w-6xl mx-auto mt-8">
        <IconFreeRights className="text-white text-2xl"/>
        <NavItem texto="Femininos"  url="/" />
        <NavItem
          texto="Masculinos" url="/"
          subitens={[
            { texto: "Camisas", url: "/masculinos/camisas" },
            { texto: "Calças", url: "/masculinos/calcas" },
            { texto: "Acessórios", url: "/masculinos/acessorios" },
          ]}
        />
        <NavItem texto="Promoções"  url="/" />
        <NavItem texto="Namorados"  url="/" />
      </nav>
    </header>
  )
}