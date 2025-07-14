import MaisUsadosLista from './(public)/home/MaisUsadosLista';
import OutrosProdutosLista from './(public)/home/OutrosProdutosLista';
import ProdutoLista from './(public)/home/ProdutoLista';
import PromoLista from './(public)/home/PromoLista';
import SlideText from './(public)/home/SlideText';
import HeaderBanner from './components/shared/HeaderBanner';
import Faq from './components/shared/Faq';
import FooterBanner from './components/shared/FooterBanner';
import MainLayout from './components/template/MainLayout'
import NavBarIcon from './components/template/navbar/NavBarIcon';

export default function Home() {
  return (
    <MainLayout>
      <HeaderBanner />
      <NavBarIcon />
      <PromoLista categoria_id={1} />
      <MaisUsadosLista />
      <PromoLista categoria_id={2} />
      <SlideText />
      <OutrosProdutosLista />
      <ProdutoLista />
      <FooterBanner/>
      <Faq />
    </MainLayout>
  );
}
