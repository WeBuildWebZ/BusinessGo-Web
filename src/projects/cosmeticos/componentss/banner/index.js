import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";

import 'bootstrap-css-only/css/bootstrap.min.css';



const Banner = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1 full"
                slide
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                src="/images/slide-1.jpg"
                                alt="First slide"
                                className="d-block w-100"

                            />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Mejor Precio del mercado</h3>
                            <p>First text about this</p>
                        </MDBCarouselCaption>

                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="2" >
                        <MDBView>
                            <img
                                src="/images/slide-2.jpg"
                                alt="Second slide"
                                className="d-block w-100"
                            />
                        </MDBView>

                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">bla blabla blabla</h3>
                            <p>Además de los hombres</p>
                        </MDBCarouselCaption>

                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="3" >
                        <MDBView  >
                            <img
                                src="/images/slide-3.jpg"
                                alt="Third slide"
                                className="d-block w-100"
                            />
                        </MDBView>

                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Sistema de Chofer Por Puntos</h3>
                            <p>First text about this</p>
                        </MDBCarouselCaption>

                    </MDBCarouselItem>

                    <style jsx>
                    {`

                    img{
                        width:100%;
                        height:100%;
                        object-fit: cover;
                    }

                    `}
                    </style>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}
export default Banner
