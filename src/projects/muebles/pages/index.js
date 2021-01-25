import Footer from '../components/footer';
import { Banner } from '../components/banner';
import { Tags } from '../components/tags';
import Slide from '../components/slider';
import { Jumbo } from '../components/jumbotron';
import Navbar from '../components/navbar';

const index = () => (
  <div>
    <Navbar />
    <Banner />
    <Jumbo />
    <Tags />
    <Slide />
    <Footer />
  </div>
);

export default index;
