import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Layout from '../../layouts/Main';
import ShoppingCart from '../../components/shopping-cart';
import { getCart } from '../../../../services/ecommerce_api/cart';
import { setCartItems } from '../../actions/cartItems';

const Cart = () => {
  const dispatch = useDispatch();
  const query = useSelector(store => store.queryParams);

  useEffect(() => {
    if (!query.cart_id) return;
    getCart(query.cart_id).then(({ data: cart }) => {
      dispatch(setCartItems(cart.items));
    });
  }, [query.cart_id]);

  return (
    <Layout>
      <ShoppingCart />
    </Layout>
  );
};

export default Cart;
