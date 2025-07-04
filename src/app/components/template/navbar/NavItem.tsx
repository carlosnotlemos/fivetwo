import Link from "next/link"

export interface NavItemProps{
  texto: string
  url: string
}

export default function NavItem(props: NavItemProps){
  return (
    <Link href={props.url} className="text-sm">
      <span>{props.texto}</span>
    </Link>
  )
}