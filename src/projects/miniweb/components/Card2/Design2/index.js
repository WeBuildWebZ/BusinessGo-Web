import { useSelector } from 'react-redux';

import CoverPhoto from './CoverPhoto';
import SmallPhoto from './SmallPhoto';
import Presentation from './Presentation';
import Information from './Information';
import PhotosAndVideos from './PhotosAndVideos';
import Footer from './Footer';

const Design2 = () => {
  const card = useSelector(store => store.card);

  return (
    <div className="cardDesign">
      <CoverPhoto />
      <SmallPhoto />
      <Presentation />
      <Information />
      <PhotosAndVideos />
      <Footer />
      <style jsx global>
        {`
          body {
            background-color: ${card.border_color};
          }
        `}
      </style>
    </div>
  );
};

export default Design2;
