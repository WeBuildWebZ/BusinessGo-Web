import { cardPropTypes } from '../../../constants';

const Address = props => {
  const { card } = props;

  return (
    <>
      <img className="businessPhoto" src={card.business_photo} />
      <style jsx>
        {`
          .businessPhoto {
            width: 100%;
            border-radius: 20px;
          }
        `}
      </style>
    </>
  );
};

Address.Location = props => {
  const { card } = props;

  return (
    <div className="location">
      <img className="image" src={window.getAssetUrl('miniweb_assets/design2/small_location.png')} />
      <div className="completeAddress">{card.completeAddress}</div>
      <style jsx>
        {`
          .location {
            display: flex;
            font-weight: bold;
          }
          .completeAddress,
          .image {
            margin: 14px;
          }
        `}
      </style>
    </div>
  );
};

Address.propTypes = cardPropTypes;
Address.Location.propTypes = cardPropTypes;

export default Address;
