import Image from 'next/image'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";

import 'bootstrap-css-only/css/bootstrap.min.css';



const Slide = () => {
    return (
        <MDBContainer className="d-flex justify-content-center">
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={false}
                showIndicators={true}
                className="z-depth-1"
                slide
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <Image
                                src="/images/slideone.jpg"
                                alt="First slide"
                                width={1200}
                                height={700}
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Mejor Precio del mercado</h3>
                            <p>First text about this</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <Image
                                src="/images/calling.jpg"
                                alt="Second slide"
                                width={1200}
                                height={700}
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Mujer a Mujer</h3>
                            <p>Además de los hombres, queremos mucha seguridad para las mujeres, por eso, una mujer puede pedir viajar con otra mujer</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <Image
                                src="/images/slidethree.jpg"
                                alt="Third slide"
                                width={1200}
                                height={700}
                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Sistema de Chofer Por Puntos</h3>
                            <p>First text about this</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default Slide
