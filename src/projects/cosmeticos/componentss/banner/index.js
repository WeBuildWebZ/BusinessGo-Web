import { useEffect, useState } from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from 'mdbreact';

import 'bootstrap-css-only/css/bootstrap.min.css';

import { getClientDocuments } from '../../../../services/api/clientDocument';
import Spinner from '../../../../components/Spinner';

const Banner = () => {
  const [sliderItems, setSliderItems] = useState(null);

  useEffect(() => {
    getClientDocuments('cosmeticos-main_slider').then(({ data: givenSliderItems }) => {
      setSliderItems(givenSliderItems);
    });
  }, []);

  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={sliderItems?.length || 0}
        showControls
        showIndicators
        className="z-depth-1 full"
        slide
      >
        <MDBCarouselInner>
          {!sliderItems && <Spinner />}
          {sliderItems &&
            sliderItems.map((sliderItem, key) => (
              <MDBCarouselItem key={key} itemId={`${key + 1}`}>
                <MDBView>
                  <img src={sliderItem.photo} alt="Slide" className="d-block w-100"  />
                </MDBView>
                <MDBCarouselCaption>
                  <div className="text">
                    <h2 className="h2-responsive">{sliderItem.title}</h2>
                    <h4 className="h3-responsive">{sliderItem.subtitle}</h4>
                  </div>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            ))}

          <style jsx>
            {`
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              .text {
                width: 100%;
                // background: white;
                color: black;
                // border-radius: 1em;
              }
            `}
          </style>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};
export default Banner;
