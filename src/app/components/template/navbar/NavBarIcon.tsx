import NavBarIconItem from "./NavBarIconItem";

export default function NavBarIcon() {
  return (
    <nav className="overflow-x-auto px-4">
      <ul className="flex gap-6 sm:gap-7 py-6 mb-5 lg:mb-30  w-fit min-w-max mx-auto">
        <li><NavBarIconItem texto="Masculino" url="#" imageUrl="/camisa1.png" /></li>
        <li><NavBarIconItem texto="Feminino"  url="#" imageUrl="/camisa2.png" /></li>
        <li><NavBarIconItem texto="Promoção"  url="#" imageUrl="/camisa3.png" /></li>
        <li><NavBarIconItem texto="Masculino" url="#" imageUrl="/camisa1.png" /></li>
        <li><NavBarIconItem texto="Masculino" url="#" imageUrl="/camisa1.png" /></li>
        <li><NavBarIconItem texto="Namorados" url="#" imageUrl="/camisa4.png" /></li>
      </ul>
    </nav>
  );
}

