import Link from 'next/link';

import { cardPropTypes } from '../../../constants';

const SocialNetworks = props => {
  const { card } = props;

  return (
    <div className="socialNetworks">
      {card.instagram_url && (
        <Link href={card.instagram_url}>
          <a target="_blank">
            <img className="icon" src="/miniweb_assets/design2/instagram.png" />
          </a>
        </Link>
      )}
      {card.email && (
        <Link href={`mailto:${card.email}`}>
          <a target="_blank">
            <img className="icon" src="/miniweb_assets/design2/email.png" />
          </a>
        </Link>
      )}
      {card.telegram_url && (
        <Link href={card.telegram_url}>
          <a target="_blank">
            <img className="icon" src="/miniweb_assets/design2/telegram.png" />
          </a>
        </Link>
      )}
      {card.whatsapp_number && (
        <Link href={`https://api.whatsapp.com/send?phone=${card.whatsapp_number}`}>
          <a target="_blank">
            <img className="icon" src="/miniweb_assets/design2/whatsapp.png" />
          </a>
        </Link>
      )}
      {card.linkedin_url && (
        <Link href={card.linkedin_url}>
          <a target="_blank">
            <img className="icon" src="/miniweb_assets/design2/linkedin.png" />
          </a>
        </Link>
      )}
      {card.twitter_url && (
        <Link href={card.twitter_url}>
          <a target="_blank">
            <img className="icon" src="/miniweb_assets/design2/twitter.png" />
          </a>
        </Link>
      )}
      {card.facebook_url && (
        <Link href={card.facebook_url}>
          <a target="_blank">
            <img className="icon" src="/miniweb_assets/design2/facebook.png" />
          </a>
        </Link>
      )}
      <style jsx>
        {`
          .socialNetworks {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            width: 80%;
          }
          .icon {
            width: 50px;
          }
        `}
      </style>
    </div>
  );
};

SocialNetworks.propTypes = cardPropTypes;

export default SocialNetworks;
