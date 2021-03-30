import { Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Card from '../Card';
import { listProducts } from '../../../../services/ecommerce_api/product';
import FieldRenderer from '../../../../components/FieldRenderer';
import { showForm } from '../../../../services/api/form';

import Tabs from './Tabs';
import { getLanguage } from './lang';
import * as constants from './constants';

const NewCard = () => {
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const [products, setProducts] = useState(null);
  const [form, setForm] = useState(null);
  const [tab, setTab] = useState('data');
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ form_data: {} });
  const stepIndex = constants.STEPS.indexOf(step);
  const canGoBack = stepIndex - 1 >= 0;

  const handleAddData = (newData, newStep) => {
    setData({ ...data, ...newData });
    if (newStep) setStep(newStep);
  };

  const handleChangeTab = newTab => {
    setTab(newTab);
  };

  const handleGoBack = () => {
    if (!canGoBack) return;
    setStep(constants.STEPS[stepIndex - 1]);
  };

  useEffect(() => {
    if (!project) return;
    listProducts(project, 'card').then(({ data: givenPlans }) => {
      setProducts(givenPlans);
    });
  }, [project]);

  useEffect(() => {
    if (!project) return;
    showForm(project.code, 'miniweb_creation').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, [project]);

  return (
    <Modal open BackdropProps={{ style: { opacity: 0.5 } }}>
      <div className="modalContent">
        <h3 className="title">{language.newCard}</h3>
        <Tabs tab={tab} onTabChanged={handleChangeTab} />
        {tab === 'data' && products && (
          <>
            <div className={`backButton${canGoBack ? '' : ' disabledButton'}`} onClick={handleGoBack}>
              {language.goBack}
            </div>
            {form && <FieldRenderer fields={form.steps[step].fields} />}
          </>
        )}
        {tab === 'preview' && <Card card={data} templateCode="free1" />}
        <style jsx>
          {`
            .modalContent {
              width: 50%;
              height: 80vh;
              margin: auto;
              margin-top: 10vh;
              background-color: white;
              outline: none;
              border-radius: 5px;
              box-shadow: 0px 14px 50px 5px #1c1c1c7c;
              overflow-x: hidden;
            }
            .title {
              margin: 10px;
            }
            .backButton {
              width: fit-content;
              margin-left: 7px;
              padding: 5px 10px 5px 10px;
              background-color: #ebebeb;
              color: #1c1c1c;
              border: 1px solid #1c1c1c;
              user-select: none;
              cursor: pointer;
              transition: 0.3s;
              border-radius: 5px;
            }
            .backButton:hover {
              transform: scale(1.1);
              box-shadow: 0 0 2px 2px silver;
            }
            .backButton:active {
              transform: scale(1.15);
              box-shadow: 0 0 3px 3px skyblue;
              transition: 0.1s;
            }
            .disabledButton {
              background-color: gray;
              cursor: unset;
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
