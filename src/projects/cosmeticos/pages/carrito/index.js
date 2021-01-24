import Navbar from '../../componentss/navbar';
import Footer from '../../componentss/footer';
import CartMessage from '../../componentss/CartMessage';
import RequestCart from '../../componentss/RequestCart';
import Copyright from '../../componentss/Copyright';
import Breadcrumb from '../../../../components/Breadcrumb';
import Cart from '../../../../components/Cart';

const Carrito = () => (
  <>
    <Navbar />
    <Breadcrumb sections={[{ value: 'Carrito', link: '#' }]} />
    <CartMessage />
    <Cart />
    <RequestCart />
    <Footer />
    <Copyright />
  </>
);

export default Carrito;
