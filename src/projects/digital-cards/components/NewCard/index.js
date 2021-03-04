import { Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Card from '../Card';
import { listProducts } from '../../../../services/ecommerce_api/product';

import Tabs from './Tabs';
import Steps from './Steps';
import { getLanguage } from './lang';

const NewCard = () => {
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const [products, setProducts] = useState(null);
  const [tab, setTab] = useState('data');
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const handleAddData = (newData, newStep) => {
    setData({ ...data, ...newData });
    if (newStep) setStep(newStep);
  };

  const handleChangeTab = newTab => {
    setTab(newTab);
  };

  useEffect(() => {
    if (!project) return;
    listProducts(project, 'card').then(({ data: givenPlans }) => {
      setProducts(givenPlans);
    });
  }, [project]);

  return (
    <Modal open>
      <div className="modalContent">
        <h3 className="title">{language.newCard}</h3>
        <Tabs tab={tab} onTabChanged={handleChangeTab} />
        {tab === 'data' && products && (
          <Steps step={step} data={data} onDataAdded={handleAddData} products={products} />
        )}
        {tab === 'preview' && <Card />}
        <style jsx>
          {`
            .modalContent {
              width: 50%;
              height: 70%;
              margin: 20px 0 0 25%;
              background-color: #ebebeb;
              outline: none;
              border-radius: 5px;
              box-shadow: 0px 5px 10px whitesmoke;
              overflow-x: hidden;
              overflow-y: auto;
            }
            .title {
              margin: 10px;
            }
            ::-webkit-scrollbar {
              width: 0; /* Remove scrollbar space */
              background: transparent; /* Optional: just make scrollbar invisible */
            }
            @media only screen and (max-width: 768px) {
              .modalContent {
                width: 90%;
                height: 90%;
                margin-left: 5%;
              }
            }
          `}
        </style>
      </div>
    </Modal>
  );
};

export default NewCard;
