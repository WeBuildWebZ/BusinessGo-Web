import Menu from '../components/menu';
import Banner from '../components/a-banner';
import Recents from '../components/c-recents';
import Some from '../components/d-some';
import One from '../components/f-one';
import Services from '../components/g-services';
import Footer from '../components/h-footer';
import Cart from '../components/Cart';

export default function Home() {
  return (
    <>
      <Menu />
      <Banner />
      <Recents />
      <Some />
      <One />
      <Services />
      <Cart />
      <Footer />
    </>
  );
}
