import { useState } from 'react';
import Lightbox from 'react-spring-lightbox';

import Header from './Header';
import Text from './Description';
import LeftButton from './LeftButton';

const images = [
  {
    src: '/images/img1.jpg',
    alt: 'Windows 10 Dark Mode Setting'
  },
  {
    src: '/images/img2.jpg',
    alt: 'macOS Mojave Dark Mode Setting'
  },
  {
    src: '/images/img3.jpg',
    alt: 'Android 9.0 Dark Mode Setting'
  },
  {
    src: '/images/img4.jpg',
    alt: 'Android 9.0 Dark Mode Setting'
  }
];

const Gallery = () => {
  const [currentImageIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () => currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () => currentImageIndex + 1 < images.length && setCurrentIndex(currentImageIndex + 1);

  return (
    <Lightbox
      isOpen
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      currentIndex={currentImageIndex}
      /* Add your own UI */
      renderHeader={() => <Header />}
      renderFooter={() => <Text />}
      renderPrevButton={() => <LeftButton />}
      // renderNextButton={() => <CustomRightArrowButton />}
      // renderImageOverlay={() => (<ImageOverlayComponent >)}
      /* Add styling */
      className="cool-class"
      /* Handle closing */
      // onClose={handleClose}
      /* Use single or double click to zoom */
      // singleClickToZoom

      /* react-spring config for open/close animation */
      // pageTransitionConfig={{
      //   from: { transform: 'scale(0.75)', opacity: 0 },
      //   enter: { transform: 'scale(1)', opacity: 1 },
      //   leave: { transform: 'scale(0.75)', opacity: 0 },
      //   config: { mass: 1, tension: 320, friction: 32 }
      // }}
    />
  );
};

export default Gallery;
