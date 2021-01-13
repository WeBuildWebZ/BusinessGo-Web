import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from '../../layouts/Main';
import ShoppingCart from '../../components/shopping-cart';
import { getCart } from '../../../../services/ecommerce_api/cart';
import { setCartItems } from '../../actions/cartItems';

export async function getServerSideProps({ query }) {
  const { cart_id } = query;

  const { data: cart } = await getCart(cart_id);

  return { props: { cart } };
}

const Cart = props => {
  const { cart } = props;
  const dispatch = useDispatch();

  dispatch(setCartItems(cart.items));

  return (
    <Layout>
      <ShoppingCart />
    </Layout>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired
};

export default Cart;
