import { Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import Tabs from './Tabs';
import Steps from './Steps';
import { getLanguage } from './lang';

const NewCard = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const language = getLanguage(useSelector(store => store.language));

  const handleAddData = (newData, newSetp) => {
    setData({ ...data, ...newData });
    setStep(newSetp);
  };

  return (
    <Modal open>
      <div className="modalContent">
        <h3 className="title">{language.newCard}</h3>
        <Tabs />
        <Steps step={step} onDataAdded={handleAddData} />
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
