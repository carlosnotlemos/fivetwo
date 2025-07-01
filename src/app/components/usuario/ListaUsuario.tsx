import data_usuarios from "@/app/data/constants/usuarios";
import LinhaUsuario from "./LinhaUsuario";
import { Usuario } from "@/core/model/Usuario";

export interface ListaUsuarioProps{
  onClick?: (usuario: Usuario) => void
}

export default function ListaUsuario(props: ListaUsuarioProps){
  return (
    <div className="flex flex-col gap-4">
      {data_usuarios.map((usuario: Usuario) => {
        return <LinhaUsuario key={usuario.id} usuario={usuario} onClick={props.onClick} />
      })}

    </div>
  )
}