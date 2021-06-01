import { cardPropTypes } from '../../constants';

const SmallPhoto = props => {
  const { card } = props;

  return (
    <div className="smallPhotoContainer">
      <div className="smallPhotoHolder">
        <div className="smallPhoto" />
      </div>
      <style jsx>
        {`
          .smallPhotoContainer {
            transform: translate(0, -50%);
            margin-bottom: -33.33vw;
            margin-bottom: -16.66vw;
            display: flex;
            justify-content: center;
          }
          .smallPhotoHolder {
            width: 33.33vw;
            height: 33.33vw;
            background-image: url(/miniweb_assets/design2/profile_image_holder.png);
            background-size: cover;
            border-radius: 50%;
          }
          .smallPhoto {
            width: 86%;
            height: 86%;
            margin: 7% 0 0 7%;
            border-radius: 50%;
            background-image: url(${card.primary_photo});
            background-size: cover;
          }
        `}
      </style>
    </div>
  );
};

SmallPhoto.propTypes = cardPropTypes;

export default SmallPhoto;
