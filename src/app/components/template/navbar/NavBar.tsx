import { IconFlameFilled } from "@tabler/icons-react";
import NavItem from "./NavItem";
import InputTexto from "../../shared/ImputTexto";

export default function NavBar() {
  return (
    <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10
                    w-[95%] max-w-6xl
                    flex flex-wrap items-center justify-between gap-4
                    bg-black/20 py-4 px-6 rounded-lg
                    backdrop-blur-md shadow-md">
      
      <div className="flex items-center gap-4 flex-wrap text-white">
        <IconFlameFilled className="text-2xl" />
        <NavItem texto="Femininos" url="/" />
        <NavItem texto="Masculinos" url="/" />
        <NavItem texto="Promoções" url="/" />
        <NavItem texto="Namorados" url="/" />
      </div>

      <form className="hidden sm:block sm:ml-auto" role="search">
        <InputTexto 
          className="px-4 py-2 w-full sm:w-96 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Procure por categoria..."
        />
      </form>
    </nav>
  );
}
