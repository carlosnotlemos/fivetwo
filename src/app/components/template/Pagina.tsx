import NavBar from "./navbar/NavBar";

export interface PaginaProps {
  children: any
  className?: string
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className={`flex-1 p-7 ${props.className ?? ""} `}>{props.children}</main>
    </div>
  );
}