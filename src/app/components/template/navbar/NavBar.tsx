import { IconFlameFilled, IconSearch, IconShoppingCart, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Topbar laranja */}
      <div className="bg-orange-500 text-black text-sm font-semibold py-2 text-center flex justify-center gap-4 whitespace-nowrap overflow-x-auto">
        <span>Frete Fixo para todas as regiões</span>
        <span className="hidden sm:inline">•</span>
        <span>1ª troca grátis mesmo sendo personalizado</span>
      </div>

      {/* Header principal */}
      <div className="bg-light-odd px-6 py-8 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="text-2xl font-extrabold italic text-gray-800 relative left-50">FiveTwo</div>

        {/* Navegação */}
        <nav className="hidden md:flex gap-6 font-semibold text-sm text-gray-800">
          <NavItem texto={"DIA DOS PAIS 🔥"} url={"#"} />
          <NavItem texto={"MAIS VENDIDAS 💜"} url={"#"} />
          <NavItem texto={"OCASIÕES"} url={"#"} />
          <NavItem texto={"PRODUTOS"} url={"#"} />
          <NavItem texto={"CREATORS"} url={"#"} />
          <NavItem texto={"ATACADO"} url={"#"} />
          <NavItem texto={"REVIEWS"} url={"#"} />
        </nav>

        {/* Ícones */}
        <div className="flex items-center gap-4">
          <button aria-label="Pesquisar">
            <IconSearch size={20} />
          </button>
          <button aria-label="Usuário">
            <IconUser size={20} />
          </button>
          <button aria-label="Carrinho">
            <IconShoppingCart size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
