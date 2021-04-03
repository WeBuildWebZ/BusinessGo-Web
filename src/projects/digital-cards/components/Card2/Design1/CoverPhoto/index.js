import Link from 'next/link';

import { cardPropTypes } from '../../constants';

const CoverPhoto = props => {
  const { card } = props;

  return (
    <div className="coverPhoto">
      <style jsx>
        {`
          .coverPhoto {
            position: relative;
            width: 100%;
            height: 190px;
            background-image: url(${card.cover_photo});
          }
        `}
      </style>
    </div>
  );
};

CoverPhoto.propTypes = cardPropTypes;

export default CoverPhoto;
