import { cardPropTypes } from '../../constants';

const CoverPhoto = props => {
  const { card } = props;

  return (
    <>
      <div className="coverPhoto" />
      <style jsx>
        {`
          .coverPhoto {
            width: 100vw;
            height: 50vh;
            background-image: url(${card.cover_photo});
            background-size: cover;
          }
        `}
      </style>
    </>
  );
};

CoverPhoto.propTypes = cardPropTypes;

export default CoverPhoto;
