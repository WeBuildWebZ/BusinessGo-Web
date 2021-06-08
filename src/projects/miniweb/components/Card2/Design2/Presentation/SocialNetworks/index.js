import Link from 'next/link';
import { useSelector } from 'react-redux';

const negativeIconMargin = 28;

const SocialNetworks = () => {
  const card = useSelector(store => store.card);

  return (
    <div className="socialNetworks">
      {card.instagram_url && (
        <Link href={card.instagram_url}>
          <a target="_blank">
            <img
              className="icon"
              src={globalThis.getAssetUrl('miniweb_assets/design2/social_networks/instagram.png')}
            />
          </a>
        </Link>
      )}
      {card.email && (
        <Link href={`mailto:${card.email}`}>
          <a target="_blank">
            <img
              className="icon"
              src={globalThis.getAssetUrl('miniweb_assets/design2/social_networks/email.png')}
            />
          </a>
        </Link>
      )}
      {card.telegram_url && (
        <Link href={card.telegram_url}>
          <a target="_blank">
            <img
              className="icon"
              src={globalThis.getAssetUrl('miniweb_assets/design2/social_networks/telegram.png')}
            />
          </a>
        </Link>
      )}
      {card.whatsapp_number && (
        <Link href={`https://api.whatsapp.com/send?phone=${card.whatsapp_number}`}>
          <a target="_blank">
            <img
              className="icon"
              src={globalThis.getAssetUrl('miniweb_assets/design2/social_networks/whatsapp.png')}
            />
          </a>
        </Link>
      )}
      {card.linkedin_url && (
        <Link href={card.linkedin_url}>
          <a target="_blank">
            <img
              className="icon"
              src={globalThis.getAssetUrl('miniweb_assets/design2/social_networks/linkedin.png')}
            />
          </a>
        </Link>
      )}
      {card.twitter_url && (
        <Link href={card.twitter_url}>
          <a target="_blank">
            <img
              className="icon"
              src={globalThis.getAssetUrl('miniweb_assets/design2/social_networks/twitter.png')}
            />
          </a>
        </Link>
      )}
      {card.facebook_url && (
        <Link href={card.facebook_url}>
          <a target="_blank">
            <img
              className="icon"
              src={globalThis.getAssetUrl('miniweb_assets/design2/social_networks/facebook.png')}
            />
          </a>
        </Link>
      )}
      {card.phone_number && (
        <Link href={`tel:${card.phone_number}`}>
          <a target="_blank">
            <img
              className="icon"
              src={globalThis.getAssetUrl('miniweb_assets/design2/social_networks/phone.png')}
            />
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
            margin: ${negativeIconMargin}px 0 0 ${negativeIconMargin * 1.5}px;
          }
          .icon {
            width: 100px;
            margin: -${negativeIconMargin}px 0 0 -${negativeIconMargin}px;
            transition: 0.7s;
          }
          .icon:hover {
            transform: scale(1.1);
          }
          .icon:active {
            transform: scale(1.2);
          }
        `}
      </style>
    </div>
  );
};

export default SocialNetworks;
