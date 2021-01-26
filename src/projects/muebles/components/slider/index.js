import { useSelector } from 'react-redux';
import Image from 'next/image';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css';

import Spinner from '../../../../components/Spinner';

const Slide = () => {
  const project = useSelector(store => store.project);

  if (!project) return <Spinner />;

  const slider_sections = project.configuration.basic_info;

  return (
    <MDBContainer className="m-b 3">
      <MDBCarousel activeItem={1} length={3} showControls={false} showIndicators className="z-depth-1" slide>
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <Image src="/images/slideone.jpg" alt="First slide" width={1200} height={700} />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Mejor Precio del mercado</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <Image src="/images/slidetwo.jpg" alt="Second slide" width={1200} height={700} />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">LLevamos tu producto</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <Image src="/images/slidethree.jpg" alt="Third slide" width={1200} height={700} />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Somos fabricantes</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Slide;
