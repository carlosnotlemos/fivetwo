import NavBarIconItem from "./NavBarIconItem";

export default function NavBarIcon() {
  return (
    <div className="overflow-x-auto px-4 ">
      <nav className="flex gap-6 sm:gap-7 py-6 mb-10 w-fit min-w-max mx-auto">
        <NavBarIconItem texto="Masculino" url="#" imageUrl="/camisa1.png" />
        <NavBarIconItem texto="Feminino"  url="#" imageUrl="/camisa2.png" />
        <NavBarIconItem texto="Promoção"  url="#" imageUrl="/camisa3.png" />
        <NavBarIconItem texto="Masculino" url="#" imageUrl="/camisa1.png" />
        <NavBarIconItem texto="Masculino" url="#" imageUrl="/camisa1.png" />
        <NavBarIconItem texto="Namorados" url="#" imageUrl="/camisa4.png" />
      </nav>
    </div>
  );
}

