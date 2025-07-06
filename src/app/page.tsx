import InstagramVideoLista from './(public)/home/InstagramVideoLista';
import MaisUsadosLista from './(public)/home/MaisUsadosLista';
import PromoLista from './(public)/home/PromoLista';
import MainLayout from './components/template/MainLayout'
import NavBarIcon from './components/template/navbar/NavBarIcon';

export default function Home() {
  return (
    <MainLayout>
      <NavBarIcon />
      <PromoLista />
      <MaisUsadosLista />
      <InstagramVideoLista />
    </MainLayout>
  );
}
