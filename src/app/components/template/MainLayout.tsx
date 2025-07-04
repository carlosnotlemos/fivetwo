import NavBar from "./navbar/NavBar";

export interface MainLayoutProps {
  children: any
  className?: string
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className={`flex-1 p-7 ${props.className ?? ""} `}>{props.children}</main>
    </div>
  );
}