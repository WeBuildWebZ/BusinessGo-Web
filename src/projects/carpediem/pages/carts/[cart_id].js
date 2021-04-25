import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getCart } from '../../../../services/ecommerce_api/cart';
import CartItems from '../../components/CartItems';
import Menu from '../../components/menu';

export default function Cart({ cart_id }) {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    getCart(cart_id).then(({ data: givenCart }) => {
      setCart(givenCart);
    });
  }, []);

  return (
    <>
      <Menu />
      <h4 className="title">Detalles del pedido</h4>
      {cart && <CartItems items={cart.items} />}
      <style jsx>
        {`
          .title {
            margin: 14px;
          }
        `}
      </style>
    </>
  );
}

export const getServerSideProps = ({ query }) => {
  const { cart_id } = query;

  return { props: { cart_id } };
};

Cart.propTypes = {
  cart_id: PropTypes.string.isRequired
};
