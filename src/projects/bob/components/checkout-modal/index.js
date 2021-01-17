import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PopoverTitle, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { PROJECT_CODE } from '../../constants';
import Spinnner from '../../../../components/Spinner';
import { createCart } from '../../../../services/ecommerce_api/cart';
import { removeAllCartItems } from '../../actions/cartItems';

const CheckoutModal = props => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    createCart(PROJECT_CODE, 'cart', props.data, cartItems).then(() => {
      setLoading(false);
    });
  }, []);

  const handleGoToStart = () => {
    dispatch(removeAllCartItems());
    window.location.href = '/products';
  };

  return (
    <Modal show backdrop="static" onHide={handleGoToStart}>
      <Modal.Header closeButton>
        <PopoverTitle>Creación de pedido</PopoverTitle>
      </Modal.Header>
      <Modal.Body>
        {loading && (
          <>
            Estamos creando tu pedido...
            <Spinnner />
          </>
        )}
        {!loading && (
          <div>
            Hemos creado tu pedido correctamente! En breve nos contactaremos con vos para coordinar el pago
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn--rounded btn--border" onClick={handleGoToStart}>
          Volver al inicio
        </button>
      </Modal.Footer>
    </Modal>
  );
};

CheckoutModal.propTypes = {
  data: PropTypes.object.isRequired
};

export default CheckoutModal;
