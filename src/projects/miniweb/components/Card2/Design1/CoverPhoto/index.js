import { cardPropTypes } from '../../constants';
import * as constants from '../../constants';

const CoverPhoto = props => {
  const { card } = props;

  return (
    <>
      {card.cover_photo && <div className="coverPhoto" />}
      <div
        className="coverPhotoBorder"
        style={{ backgroundColor: card.border_color, boxShadow: `0 0 2px 2px ${card.border_color}` }}
      />
      <style jsx>
        {`
          .coverPhoto {
            transform: translate(-${constants.sideMargin}px);
            width: calc(100% + ${constants.sideMargin * 2}px);
            height: 35vh;
            background-image: url(${card.cover_photo});
            background-size: cover;
            animation: photoAppear 1.5s ease;
          }
          .coverPhotoBorder {
            transform: translate(-${constants.sideMargin}px);
            width: calc(100% + ${constants.sideMargin * 2}px);
            height: 30px;
            border-bottom-left-radius: 14px;
            border-bottom-right-radius: 14px;
          }
          @keyframes photoAppear {
            0% {
              transform: translate(0, -100%);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

CoverPhoto.propTypes = cardPropTypes;

export default CoverPhoto;
