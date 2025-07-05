import ProdutosLista from './(public)/home/ProdutoLista';
import MainLayout from './components/template/MainLayout'
import NavBarIcon from './components/template/navbar/NavBarIcon';

export default function Home() {
  return (
    <MainLayout>
      <NavBarIcon />
      <ProdutosLista />
    </MainLayout>
  );
}
