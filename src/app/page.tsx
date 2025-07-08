import MaisUsadosLista from './(public)/home/MaisUsadosLista';
import OutrosProdutosLista from './(public)/home/OutrosProdutosLista';
import ProdutoLista from './(public)/home/ProdutoLista';
import PromoLista from './(public)/home/PromoLista';
import SlideText from './(public)/home/SlideText';
import BannerLg from './components/shared/BannerLg';
import MainLayout from './components/template/MainLayout'
import NavBarIcon from './components/template/navbar/NavBarIcon';

export default function Home() {
  return (
    <MainLayout>
      <BannerLg />
      <NavBarIcon />
      <PromoLista />
      <MaisUsadosLista />
      <PromoLista />
      <SlideText />
      <OutrosProdutosLista />
      <ProdutoLista />
    </MainLayout>
  );
}
