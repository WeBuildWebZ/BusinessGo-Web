import { useSelector } from 'react-redux';

import { cardPropTypes } from '../constants';
import Selector from '../../Selector';
import { getLanguage } from '../lang';

import CoverPhoto from './CoverPhoto';
import MainData from './MainData';
import BusinessFlags from './BusinessFlags';
import Address from './Address';
import BusinessHours from './BusinessHours';
import AddContact from './AddContact';
import Footer from './Footer';
import SocialNetworks from './SocialNetworks';
import Services from './Services';
import PhotosVideos from './PhotosVideos';
import Documents from './Documents';
import Agenda from './Agenda';

const Design1 = props => {
  const { card } = props;
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="card" id="home">
      <div className="content">
        <CoverPhoto card={card} />
        <MainData card={card} />
        <hr />
        <BusinessFlags card={card} />
        <hr />
        <SocialNetworks card={card} />
        <hr />
        <AddContact card={card} />
        <hr />
        {card.business_description && (
          <Selector title={language.aboutBusiness} color={card.border_color}>
            {card.business_description}
          </Selector>
        )}
        <Selector title={language.services} color={card.border_color}>
          <Services card={card} />
        </Selector>
        {card.personal_description && (
          <Selector title={card.completeName} color={card.border_color}>
            {card.personal_description}
          </Selector>
        )}
        <Selector title={language.businessHours} color={card.border_color}>
          <BusinessHours card={card} />
        </Selector>
        <Selector title={language.address} color={card.border_color} subtitle={card.completeAddress}>
          <Address card={card} />
        </Selector>
        <hr />
        <PhotosVideos card={card} />
        <Documents card={card} />
        <Agenda card={card} />
        <Footer card={card} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <style jsx>
        {`
          .card {
            width: 100vw;
            height: 100vh;
          }
          .content {
            padding: 0 30px 0 30px;
          }
        `}
      </style>
    </div>
  );
};

Design1.propTypes = cardPropTypes;

export default Design1;
