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

const Testimonial = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    getClientDocuments('cosmeticos-images').then(({ data: givenComments }) => {
      console.log('givenComments', givenComments);
      setComments(givenComments);
    });
  }, []);

  return (
    <div className="testimonial">
      <h2>Opinion de nuestros Clientes:</h2>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={comments?.length || 0}
          showControls
          showIndicators
          className="z-depth-1 full"
          slide
        >
          <MDBCarouselInner>
            {!comments && <Spinner />}
            {comments &&
              comments.map((comment, key) => (
                <MDBCarouselItem itemId={`${key + 1}`} key={key}>
                  <MDBView>
                    <img
                      src={comment.photo}
                      alt="First slide"
                      className="d-block w-20"
                      style={{
                        opacity: 0.7
                      }}
                    />
                  </MDBView>
                  <MDBCarouselCaption>
                    <div className="text">
                      <h2 className="h2-responsive">"{comment.comment}"</h2>
                      <h5 className="h5-responsive">-{comment.comment}</h5>
                    </div>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              ))}
          </MDBCarouselInner>
        </MDBCarousel>

        <style jsx>
          {`
            .testimonial {
              display: flex;
              width: 100vw;
              height: 100vh;
              text-shadow: 0 0 1px 1px black;
              margin: 5em 0;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .text {
              width: 100%;
              color: black;
            }
          `}
        </style>
      </MDBContainer>
    </div>
  );
};

export default Testimonial;
