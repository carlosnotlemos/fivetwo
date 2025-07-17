import MaisUsadosLista from './(public)/home/MaisUsadosLista';
// import OutrosProdutosLista from './(public)/home/OutrosProdutosLista';
import ProdutoLista from './(public)/home/ProdutoLista';
import PromoLista from './(public)/home/PromoLista';
import SlideText from './(public)/home/SlideText';
import HeaderBanner from './components/shared/HeaderBanner';
import Faq from './components/shared/faq/Faq';
import FooterBanner from './components/shared/footerbanner/FooterBanner';
import MainLayout from './components/template/MainLayout'
import CategoryNav from './components/template/navbar/CategoryNav';

export default function Home() {
  return (
    <MainLayout>
      <HeaderBanner />
      <CategoryNav />
      <PromoLista categoria_id={1} />
      <MaisUsadosLista />
      <PromoLista categoria_id={2} />
      <SlideText />
      {/* <OutrosProdutosLista /> */}
      <ProdutoLista />
      <FooterBanner/>
      <Faq />
    </MainLayout>
  );
}
