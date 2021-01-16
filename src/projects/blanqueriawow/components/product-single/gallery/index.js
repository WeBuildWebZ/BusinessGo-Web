import { useState } from 'react';
import PropTypes from 'prop-types';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSelectImage = ({ target }) => {
    setSelectedImage(target.src);
  };

  return (
    <section className="product-gallery">
      <div style={{ width: 320 }}>
        {images.map(image => (
          <div key={image}>
            <img src={image} alt="" style={{ width: '100%' }} onClick={handleSelectImage} />
          </div>
        ))}
      </div>

      <div>
        <img src={selectedImage} alt="" style={{ width: '100%' }} />
      </div>
    </section>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default Gallery;
