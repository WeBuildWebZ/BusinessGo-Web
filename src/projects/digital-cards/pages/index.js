import Navbar from '../components/navbar';
import Banner from '../components/banner';
import MainText from '../components/main-text';
import RedesSvg from '../components/redes-svg';
import Paragraphs from '../components/paragraphs';
import ImageBackground from '../components/image-bottom';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <RedesSvg />
      <MainText />
      <Paragraphs />
      <ImageBackground />
      <Footer />
    </>
  );
}
