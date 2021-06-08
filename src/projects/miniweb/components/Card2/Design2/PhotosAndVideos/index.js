import { cardPropTypes } from '../../constants';

import Header from './Header';

const PhotosAndVideos = props => {
  const { card } = props;

  return (
    <div id="photosAndVideos" className="photosAndVideos">
      <Header />
      <style jsx>
        {`
          .photosAndVideos {
          }
        `}
      </style>
    </div>
  );
};

PhotosAndVideos.propTypes = cardPropTypes;

export default PhotosAndVideos;
