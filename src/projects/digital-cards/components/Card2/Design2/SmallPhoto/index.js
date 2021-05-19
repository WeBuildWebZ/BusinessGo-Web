import { cardPropTypes } from '../../constants';

const SmallPhoto = props => {
  const { card } = props;

  return (
    <div className="smallPhotoContainer">
      <div className="smallPhoto" />
      <style jsx>
        {`
          .smallPhotoContainer {
            transform: translate(0, calc(-100% + 7px));
            margin-bottom: -33.33vw;
            display: flex;
            justify-content: center;
          }
          .smallPhoto {
            width: 33.33vw;
            height: 33.33vw;
            background-image: url(${card.primary_photo});
            background-size: cover;
            border-radius: 50%;
            border-style: solid;
            border-width: 7px;
            border-color: ${card.border_color};
            background-color: #ffffff;
          }
        `}
      </style>
    </div>
  );
};

SmallPhoto.propTypes = cardPropTypes;

export default SmallPhoto;
