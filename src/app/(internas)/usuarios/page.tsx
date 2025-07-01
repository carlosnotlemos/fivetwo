'use client'
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/Formulario";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import data_usuarios from "@/app/data/constants/usuarios";
import Backend from "@/backend";
import { Usuario } from "@/core/model/Usuario";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Page(){
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null)

  function salvar(){
    if(!usuario) return
    Backend.usuarios.salvar(usuario)
  }

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo principal="Usuários" secundario="Cadastro Usuários" icone={IconUser}/>

      {usuario ? (
        <FormularioUsuario 
          usuario={usuario} 
          onChange={setUsuario} 
          salvar={salvar}
          cancelar={() => setUsuario(null)}
        />
      ) : (
        <ListaUsuario onClick={setUsuario}/> 
      )}

    </Pagina>
  );
}