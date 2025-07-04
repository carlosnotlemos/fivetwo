'use client'
import useUsuarios from "@/hooks/useUsuarios";
import MainLayout from "@/app/components/template/MainLayout";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/Formulario";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import { IconPlus, IconUser } from "@tabler/icons-react";

export default function Page(){
  const { usuario, usuarios, salvar, excluir, alterarUsuario } = useUsuarios()

  return (
    <MainLayout className="flex flex-col gap-10">
      <Titulo principal="Usuários" secundario="Cadastro Usuários" icone={IconUser}/>

      {usuario ? (
        <FormularioUsuario 
          usuario={usuario} 
          onChange={alterarUsuario} 
          salvar={salvar}
          cancelar={() => alterarUsuario(null)}
          excluir={excluir}
        />
      ) : (
          <>
            <div className="flex justify-end">
              <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md " onClick={() => alterarUsuario({})}>
                <IconPlus/>
                <span>Novo Usuário</span>
              </button>
            </div>
            <ListaUsuario usuarios={usuarios} onClick={alterarUsuario}/> 
          </>
      )}

    </MainLayout>
  );
}