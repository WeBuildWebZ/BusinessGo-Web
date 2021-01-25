import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import FieldRenderer from '../../../../components/FieldRenderer';
import Spinner from '../../../../components/Spinner';
import { showForm } from '../../../../services/api/form';
import { createFormResponse } from '../../../../services/api/formResponse';
import { pushAlert } from '../../../../shared/actions/alerts';
import { getProductPrice } from '../../../../utils/product';
import { PROJECT_CODE } from '../../constants';

import { getLanguage } from './lang';

const RequestCart = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const cartItems = useSelector(store => store.cartItems);
  const project = useSelector(store => store.project);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(null);
  const [formData, setFormData] = useState({});
  const price = cartItems.reduce(
    (current, { product, count }) => current + +getProductPrice(product, count),
    0
  );

  const handleMakeRequest = () => {
    createFormResponse(PROJECT_CODE, 'cart', formData).then(() => {
      setModalOpen(false);
      dispatch(pushAlert({ title: language.requestOk.title, message: language.requestOk.message }));
    });
  };

  useEffect(() => {
    showForm(PROJECT_CODE, 'cart').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, []);

  return (
    <div className="productPriceContainer">
      {!form && <Spinner />}
      {form && (
        <>
          <Modal show={modalOpen} backdrop="static" onHide={() => setModalOpen(false)}>
            <Modal.Header closeButton>{language.title}</Modal.Header>
            <Modal.Body>{language.description}</Modal.Body>
            <FieldRenderer fields={form.fields} data={formData} onChange={setFormData} />
            <Button style={{ backgroundColor: 'lightskyblue' }} onClick={handleMakeRequest}>
              {language.makeRequest}
            </Button>
          </Modal>
          {!!cartItems?.length && (
            <div className="productPrice" onClick={() => setModalOpen(true)}>
              {`Realizar el Pedido (${price} ${project?.configuration.basic_info.currency || '...'})`}
            </div>
          )}
        </>
      )}
      <style jsx>
        {`
          .productPriceContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin: 7px 0 7px 0;
          }
          .productPrice {
            width: fit-content;
            text-align: center;
            padding: 7px;
            background-color: lightskyblue;
            box-shadow: 0 0 2px 1px lightskyblue;
            border-radius: 7px;
            cursor: pointer;
            user-select: none;
          }
        `}
      </style>
    </div>
  );
};

export default RequestCart;
