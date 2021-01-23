import Banner from '../componentss/banner';
import Testimonial from '../componentss/testimonial';
import Examples from '../componentss/examples';
import Frase from '../componentss/frase';
import TresCards from '../componentss/trescards';
import Empresa from '../componentss/empresa';
import Copyright from '../componentss/copyrigth';
import Footer from '../componentss/footer';
import Navbar from '../componentss/navbar';
import Ashtags from '../componentss/ashtags';

const index = () => (
  <main>
    <Navbar />
    <Banner />
    <Examples />
    <Testimonial />
    <Frase />
    <TresCards />
    <Ashtags />
    <Empresa />
    <Footer />
    <Copyright />
  </main>
);

export default index;
