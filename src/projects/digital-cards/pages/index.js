import Banner from '../components/banner';
import MainText from '../components/main-text';
import RedesSvg from '../components/redes-svg';
import Paragraphs from '../components/paragraphs';
import ImageBackground from '../components/image-bottom';

import Layout from './layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <RedesSvg />
        <MainText />
        <Paragraphs />
        <ImageBackground />
      </Layout>
    </>
  );
}
