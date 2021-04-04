import { cardPropTypes } from '../../constants';

const CoverPhoto = props => {
  const { card } = props;

  return (
    <div className="coverPhoto">
      <style jsx>
        {`
          .coverPhoto {
            transform: translate(-30px);
            width: calc(100% + 60px);
            height: 190px;
            background-image: url(${card.cover_photo});
            background-size: cover;
            animation: photoAppear 1.5s ease;
          }
          @keyframes photoAppear {
            0% {
              transform: translate(0, -100%);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

CoverPhoto.propTypes = cardPropTypes;

export default CoverPhoto;
