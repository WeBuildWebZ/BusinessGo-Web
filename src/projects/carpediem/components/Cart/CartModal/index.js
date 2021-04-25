import { Modal } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FieldRenderer from '../../../../../components/FieldRenderer';
import Spinner from '../../../../../components/Spinner';
import { showForm } from '../../../../../services/api/form';
import { createCart } from '../../../../../services/ecommerce_api/cart';
import usePushAlert from '../../../../../shared/hooks/usePushAlert';
import { removeAllCartItems } from '../../../../blanqueriawow/actions/cartItems';
import { PROJECT_CODE } from '../../../constants';
import { goToLink } from '../../../../../utils/html';
import CartItems from '../../CartItems';

import { getLanguage } from './lang';

const CartModal = props => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const cartItems = useSelector(store => store.cartItems);
  const pushAlert = usePushAlert();
  const [data, setData] = useState({});
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreateCart = () => {
    setLoading(true);
    createCart(PROJECT_CODE, 'cart', data, cartItems).then(({ data: createdCart }) => {
      setLoading(false);
      props.onClose();
      pushAlert({ type: 'info', ...language.requestCreated });
      dispatch(removeAllCartItems());
      setData({});
      if (project) {
        const cartUrl = `${project.base_url}/carts/${encodeURIComponent(createdCart._id)}`;
        goToLink(
          `https://api.whatsapp.com/send?phone=${
            project.configuration.contact.whatsapp_number
          }&text=${encodeURIComponent(
            `Hola! Hice un pedido en Carpediem Distribuciones.\n\nEsta es la URL del carrito: ${cartUrl}`
          )}`,
          '_blank'
        );
      }
    });
  };

  useEffect(() => {
    showForm(PROJECT_CODE, 'cart').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, []);

  return (
    <>
      <Modal open={props.show} onClose={props.onClose} disableBackdropClick>
        <div className="modalContent">
          <div className="navbar">
            <h4>{language.thisIsYourCart}</h4>
            <i className="fa fa-window-close" onClick={props.onClose} />
          </div>
          <CartItems items={cartItems} />
          {form && (
            <>
              <FieldRenderer data={data} onChange={setData} fields={form.fields} />
              {loading ? (
                <>
                  <Spinner />
                  <h5>{language.creatingRequest}</h5>
                </>
              ) : (
                <div className="button" onClick={handleCreateCart}>
                  {language.generateRequest}
                </div>
              )}
            </>
          )}
        </div>
      </Modal>
      <style jsx>
        {`
          .modalContent {
            margin: 21px;
            padding: 14px;
            background-color: white;
            outline: none;
            border-radius: 14px;
            clip-path: circle(100%);
            animation: modalAppear 1.5s ease;
          }
          .navbar {
            display: flex;
          }
          .fa-window-close {
            margin: 7px 7px 0 auto;
            cursor: pointer;
          }
          .button {
            width: fit-content;
            padding: 4px;
            background-color: #8804c4;
            color: whitesmoke;
            border-radius: 7px;
            user-select: none;
            cursor: pointer;
          }
          @keyframes modalAppear {
            0% {
              clip-path: circle(0);
            }
          }
        `}
      </style>
    </>
  );
};

CartModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CartModal;
