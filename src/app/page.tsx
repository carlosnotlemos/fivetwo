import InstagramVideoLista from './(public)/home/InstagramVideoLista';
import MaisUsadosLista from './(public)/home/MaisUsadosLista';
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
      <InstagramVideoLista />
    </MainLayout>
  );
}
