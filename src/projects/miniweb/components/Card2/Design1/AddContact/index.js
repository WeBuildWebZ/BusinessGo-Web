import { useSelector } from 'react-redux';

import useDownloadVCard from '../../../../../../shared/hooks/useDownloadVCard';
import { cardPropTypes } from '../../constants';
import { getLanguage } from '../../lang';

const AddContact = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));
  const downloadVCard = useDownloadVCard();

  const handleAddContact = () => {
    downloadVCard({
      name: card.name,
      surname: card.surnames,
      phone_numbers: card.phone_numbers || [card.whatsapp_number]
    });
  };

  return (
    <div className="addContactContainer">
      {card.completeName && (
        <div className="addContact" onClick={handleAddContact}>
          <img className="icon" src="/icon/addContact.png" />
          {language.addContact}
        </div>
      )}
      <style jsx>
        {`
          * {
            color: whitesmoke;
          }
          .addContactContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
          }
          .addContact {
            width: fit-content;
            height: 40px;
            margin: 21px;
            padding: 7px;
            background-color: #888484;
            border-radius: 14px;
            cursor: pointer;
            transition: 0.7s;
          }
          .addContact:hover {
            transform: scale(1.1);
          }
          .addContact:active {
            transform: scale(1.15);
            transition: 0.1s;
          }
          .icon {
            width: 20px;
            height: auto;
          }
        `}
      </style>
    </div>
  );
};

AddContact.propTypes = cardPropTypes;

export default AddContact;
