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

  const { slider_sections } = project.configuration.basic_info;

  return (
    <MDBContainer className="m-b 3">
      <MDBCarousel
        activeItem={1}
        length={slider_sections.length}
        showControls={false}
        showIndicators
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          {slider_sections.map((section, i) => (
            <MDBCarouselItem key={i} itemId={`${i + 1}`}>
              <MDBView>
                <Image src={section.photo} alt={`Slide ${i + 1}`} width={1200} height={700} />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">{section.description}</h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Slide;
