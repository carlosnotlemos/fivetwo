import ProdutosLista from './(public)/home/ProdutoLista';
import MainLayout from './components/template/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-12 text-center">Produtos em Destaque</h1>
      <ProdutosLista />
    </MainLayout>
  );
}
