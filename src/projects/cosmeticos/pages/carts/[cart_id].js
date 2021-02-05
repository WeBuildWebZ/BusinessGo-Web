import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { getCart } from '../../../../services/ecommerce_api/cart';
import { setCartItems } from '../../../../shared/actions/cartItems';
import Navbar from '../../componentss/navbar';
import Footer from '../../componentss/footer';
import CartMessage from '../../componentss/CartMessage';
import RequestCart from '../../componentss/RequestCart';
import Copyright from '../../componentss/Copyright';
import Breadcrumb from '../../../../components/Breadcrumb';
import Cart from '../../../../components/Cart';

export async function getServerSideProps({ query }) {
  const { cart_id } = query;

  const { data: cart } = await getCart(cart_id);

  return { props: { cart } };
}

const Carrito = ({ cart }) => {
  const dispatch = useDispatch();

  dispatch(setCartItems(cart.items));

  return (
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
};

Carrito.propTypes = {
  cart: PropTypes.object.isRequired
};

export default Carrito;
