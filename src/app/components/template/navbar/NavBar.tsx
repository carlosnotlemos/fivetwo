import { IconFlameFilled, IconShoppingCart } from "@tabler/icons-react";
import NavItem from "./NavItem";
import InputTexto from "../../shared/ImputTexto";

export default function NavBar() {
  return (
    <nav className="bg-white fixed top-0 w-full bg-white z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex justify-center py-6 items-center gap-4 text-black">
          <h2 className="text-5xl">FiveTwo</h2>
          <IconFlameFilled className="hidden sm:block" />
          <form className="hidden sm:block" role="search">
            <InputTexto 
              className="px-4 py-2 w-full sm:w-96 rounded-lg bg-transparent outline-none ring-2 ring-black"
              placeholder="Procure por categoria..."
            />
          </form>
          <div className="relative ml-6">
            <IconShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto px-4">
        <div className="flex text-md text-gray-700 w-fit min-w-max mx-auto gap-12 py-3 items-center px-4">
          <NavItem texto="Femininos"  url="/"/>
          <NavItem texto="Masculinos" url="/"/>
          <NavItem texto="Promoções"  url="/"/>
          <NavItem texto="Namorados"  url="/"/>
          <NavItem texto="Femininos"  url="/"/>
          <NavItem texto="Masculinos" url="/"/>
          <NavItem texto="Promoções"  url="/"/>
          <NavItem texto="Namorados"  url="/"/>
        </div>
      </div>
    </nav>
  );
}
