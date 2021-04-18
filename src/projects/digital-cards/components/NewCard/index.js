import { Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Card from '../Card';
import { listProducts } from '../../../../services/ecommerce_api/product';
import FieldRenderer from '../../../../components/FieldRenderer';
import { showForm } from '../../../../services/api/form';
import { createClientDocument } from '../../../../services/api/clientDocument';
import usePushAlert from '../../../../shared/hooks/usePushAlert';
import { filterFields } from '../../../../utils/form';

import Tabs from './Tabs';
import { getLanguage } from './lang';
import * as constants from './constants';

const NewCard = () => {
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const user = useSelector(store => store.user);
  const project = useSelector(store => store.project);
  const pushAlert = usePushAlert();
  const [products, setProducts] = useState(null);
  const [form, setForm] = useState(null);
  const [tab, setTab] = useState('data');
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ form_data: {} });
  const canGoBack = step > 0;
  const currentVariant = form?.variants.find(variant =>
    data.card_type === 'free'
      ? 'free_miniweb'
      : data.card_type === 'premium_personal'
      ? 'premium_miniweb'
      : data.card_type === 'premium_business'
      ? 'premium_business_miniweb'
      : data.card_type === 'premium_plus'
      ? 'premium_plus_miniweb'
      : ''
  )?.key;
  const fields = filterFields(form, step, currentVariant);
  if (fields && !fields.length) setStep(step + 1);

  const handlePartialChange = changedData => {
    const newData = { ...data, ...changedData };
    setData(newData);
  };

  const handleAddData = changedData => {
    const newData = {
      ...data,
      ...changedData,
      switch_to_premium_email_sent: false,
      user_id: user?._id
    };
    const nextStep = step + 1;
    setData(newData);
    if (form.steps[nextStep]) return setStep(nextStep);

    createClientDocument('card', project.code, newData).then(({ data: newClientDocument }) => {
      pushAlert({
        type: 'info',
        title: language.cardCreated.title,
        message: language.cardCreated.message
      });

      setTimeout(() => {
        window.location.href = `/cards/${encodeURIComponent(newClientDocument._id)}`;
      }, 500);
    });
  };

  const handleChangeTab = newTab => {
    setTab(newTab);
  };

  const handleGoBack = () => {
    if (!canGoBack) return;
    setStep(step - 1);
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
        {form && <h3 className="title">{form.steps[step].name[languageCode]}</h3>}
        <Tabs tab={tab} onTabChanged={handleChangeTab} />
        {tab === 'data' && products && (
          <>
            <div className={`backButton${canGoBack ? '' : ' disabledButton'}`} onClick={handleGoBack}>
              {language.goBack}
            </div>
            {fields && (
              <FieldRenderer
                fields={fields}
                data={data}
                onChange={handleAddData}
                onPartialChange={handlePartialChange}
                saveButton
                saveButtonText={language.next}
              />
            )}
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
              overflow-x: visible;
              overflow-y: auto;
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
