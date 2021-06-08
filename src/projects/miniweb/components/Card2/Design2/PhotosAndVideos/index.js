import { useSelector } from 'react-redux';

import Header from './Header';
import ItemList from './ItemList';

const PhotosAndVideos = props => {
  const card = useSelector(store => store.card);

  return (
    <div id="photosAndVideos" className="photosAndVideos">
      <Header />
      <ItemList />
      <style jsx>
        {`
          .photosAndVideos {
          }
        `}
      </style>
    </div>
  );
};

export default PhotosAndVideos;
