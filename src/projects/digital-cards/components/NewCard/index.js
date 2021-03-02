import { Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Tabs from './Tabs';
import { getLanguage } from './lang';

const NewCard = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Modal open onClose={() => {}}>
      <div className="modalContent">
        <h3 className="title">{language.newCard}</h3>
        <Tabs />
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
            }
            .title {
              margin: 10px;
            }
          `}
        </style>
      </div>
    </Modal>
  );
};

export default NewCard;
