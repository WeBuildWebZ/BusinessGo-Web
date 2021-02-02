import Footer from '../components/footer';
import { Banner } from '../components/banner';
import { Tags } from '../components/tags';
import Slide from '../components/slider';
import { Jumbo } from '../components/jumbotron';
import Layout from '../Layout';
import Identidad from '../components/identidad';
import LogoContainer from '../components/navbar/logo-container';
import MainText from '../components/main-text';

const index = () => (
  <>
    <LogoContainer />
    <Layout>
      <Banner />
      <Jumbo />
      <MainText />
      <Slide />
      <Identidad />
      <Tags />
    </Layout>
  </>
);

export default index;
