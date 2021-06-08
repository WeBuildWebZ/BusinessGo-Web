import { useSelector } from 'react-redux';

import Button1 from '../Button1';
import { downloadVCard } from '../../../../../../utils/vCard';

import SocialNetworks from './SocialNetworks';
import { getLanguage } from './lang';

const Presentation = () => {
  const card = useSelector(store => store.card);
  const language = getLanguage(useSelector(store => store.language));

  const handleAddContact = () => {
    downloadVCard({
      name: card.name,
      surname: card.surnames,
      company: card.business_or_company,
      job_title: card.job_title,
      email: card.email,
      phone_numbers: card.phone_numbers || [card.whatsapp_number],
      url: card.website_url,
      address: [card.address, card.state, card.municipality, card.country]
    });
  };

  return (
    <div className="presentation">
      <h3>{card.title}</h3>
      <p className="description">{card.description}</p>
      <SocialNetworks />
      <Button1 text={language.addToContacts} onClick={handleAddContact} />
      <style jsx>
        {`
          .presentation {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            height: 50vh;
            padding-top: 25px;
            background-color: ${card.border_color};
            color: whitesmoke;
          }
          .description {
            max-width: 75%;
            font-size: 14px;
            text-align: center;
            line-height: 15px;
          }
        `}
      </style>
    </div>
  );
};

export default Presentation;
