import { IconFlameFilled } from "@tabler/icons-react";
import NavItem from "./NavItem";
import InputTexto from "../../shared/ImputTexto";

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
        <IconFlameFilled className="text-white text-2xl"/>
        <NavItem texto="Femininos"  url="/" />
        <NavItem texto="Masculinos" url="/"/>
        <NavItem texto="Promoções"  url="/" />
        <NavItem texto="Namorados"  url="/" />

        <form className="ml-auto" role="search">
          <InputTexto 
            className="px-4 py-2 w-96 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Procure por categoria..."
          />
        </form>

      </nav>
    </header>
  )
}