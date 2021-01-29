import Footer from '../components/footer';
import { Banner } from '../components/banner';
import { Tags } from '../components/tags';
import Slide from '../components/slider';
import { Jumbo } from '../components/jumbotron';
import Layout from '../Layout';

const index = () => (
  <Layout>
    <Banner />
    <Jumbo />
    <Tags />
    <Slide />
    <Footer />
  </Layout>
);

export default index;
