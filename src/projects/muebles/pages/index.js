import Footer from '../components/footer';
import { Banner } from '../components/banner';
import { Tags } from '../components/tags';
import Slide from '../components/slider';
import { Jumbo } from '../components/jumbotron';
import Layout from '../Layout';
import Identidad from '../components/identidad';
import LogoContainer from '../components/navbar/logo-container';

const index = () => (
  <>
    <LogoContainer />
    <Layout>
      <Banner />
      <Jumbo />
      <Slide />
      <Identidad />
      <Tags />
    </Layout>
  </>
);

export default index;
