import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from '../../layouts/Main';
import ShoppingCart from '../../components/shopping-cart';
import { getCart } from '../../../../services/ecommerce_api/cart';
import { setCartItems } from '../../actions/cartItems';

const Cart = props => {
  const dispatch = useDispatch();

  getCart(props.query.cart_id).then(({ data: cart }) => {
    dispatch(setCartItems(cart.items));
  });

  return (
    <Layout>
      <ShoppingCart />
    </Layout>
  );
};

Cart.getInitialProps = ({ query }) => ({ query });

Cart.propTypes = {
  query: PropTypes.object.isRequired
};

export default Cart;
