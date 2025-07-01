import { Usuario } from "@/core/model/Usuario"
import Image from "next/image"

export interface LinhaUsuarioProps {
  usuario: Usuario
  onClick?: (usuario: Usuario) => void 
}

export default function LinhaUsuario(props: LinhaUsuarioProps){
  return(
    <div className="flex bg-zinc-900 p-4 items-center gap-5 rounded-md cursos-pointer"
      onClick={() => props.onClick?.(props.usuario)}>
      <Image
          src="https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Hulk-icon.png"
          width={80}
          height={80}
          className="rounded-full"
          alt="Avatar"
        />
      <div className="flex flex-col">
        <span className="text-xl font-black">{props.usuario.nome}</span>
        <span className="text-sm text-zinc-400">{props.usuario.email}</span>
      </div>
    </div>
  )
}