import Link from 'next/link';
import { useSelector } from 'react-redux';

import { cardPropTypes } from '../../constants';
import { getLanguage } from '../../lang';

const SocialNetworks = props => {
  const { card } = props;
  const email = card.personal_email || card.business_email;
  const phoneNumber = card.phone_numbers && card.phone_numbers[0];

  return (
    <div className="buttonContainer">
      {card.instagram_url && (
        <div className="socialNetwork">
          <Link href={card.instagram_url}>
            <a target="blank">
              <img className="icon" src="/miniweb_assets/icons/instagram.png" />
            </a>
          </Link>
        </div>
      )}
      {card.twitter_url && (
        <div className="socialNetwork">
          <Link href={card.twitter_url}>
            <a target="blank">
              <img className="icon" src="/miniweb_assets/icons/twitter.png" />
            </a>
          </Link>
        </div>
      )}
      {card.facebook_url && (
        <div className="socialNetwork">
          <Link href={card.facebook_url}>
            <a target="blank">
              <img className="icon" src="/miniweb_assets/icons/facebook.png" />
            </a>
          </Link>
        </div>
      )}
      {card.linkedin_url && (
        <div className="socialNetwork">
          <Link href={card.linkedin_url}>
            <a target="blank">
              <img className="icon" src="/miniweb_assets/icons/linkedin.png" />
            </a>
          </Link>
        </div>
      )}
      {card.whatsapp_number && (
        <div className="socialNetwork">
          <Link href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(card.whatsapp_number)}`}>
            <a target="blank">
              <img className="icon" src="/miniweb_assets/icons/whatsapp.png" />
            </a>
          </Link>
        </div>
      )}
      {card.telegram_url && (
        <div className="socialNetwork">
          <Link href={card.telegram_url}>
            <a target="blank">
              <img className="icon" src="/miniweb_assets/icons/telegram.png" />
            </a>
          </Link>
        </div>
      )}
      {email && (
        <div className="socialNetwork">
          <Link href={`mailto:${email}`}>
            <a target="blank">
              <img className="icon" src="/miniweb_assets/icons/email.png" />
            </a>
          </Link>
        </div>
      )}
      {phoneNumber && (
        <div className="socialNetwork">
          <Link href={`tel:${phoneNumber}`}>
            <a target="blank">
              <img className="icon" src="/miniweb_assets/icons/phone.png" />
            </a>
          </Link>
        </div>
      )}
      <style jsx>
        {`
          .icon {
            width: 40px;
          }
          .socialNetwork {
            width: fit-content;
            background-color: #484444;
            padding: 7px;
            border-radius: 10px;
            margin: 10px;
          }
          .buttonContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
        `}
      </style>
    </div>
  );
};

SocialNetworks.propTypes = cardPropTypes;

export default SocialNetworks;
