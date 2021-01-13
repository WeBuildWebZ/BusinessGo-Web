import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

<<<<<<< HEAD
const PageIntro = () => {

  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={
            {
              backgroundImage: "url('/images/slide-1.jpg')",
              backgroundPosition: "bottom"
             
            }
            }>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>El mejor precio en construcción de Piscinas.</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i></a>
              </div>
=======
const PageIntro = () => (
  <section className="page-intro">
    <Swiper navigation effect="fade" className="swiper-wrapper">
      <SwiperSlide>
        <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
          <div className="container">
            <div className="page-intro__slide__content">
              <h2>El mejor precio en Blanquería</h2>
              <a href="#" className="btn-shop">
                <i className="icon-right" />
                Navegar
              </a>
>>>>>>> 999910e3687007923d988a10278e1affb36fe937
            </div>
          </div>
        </div>
      </SwiperSlide>

<<<<<<< HEAD
        <SwiperSlide>
          <div className="page-intro__slide" style={
            { backgroundImage: "url('/images/slide-2.jpg')", 
              backgroundPosition: "bottom"
              
            }
            }>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Cotizamos tu pedido.</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i></a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={
            { backgroundImage: "url('/images/slide-3.jpg')",
              backgroundPosition: "bottom" 
            }
            }>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Mira nuestros trabajos.</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
};
=======
      <SwiperSlide>
        <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
          <div className="container">
            <div className="page-intro__slide__content">
              <h2>Calidad Premium</h2>
              <a href="#" className="btn-shop">
                <i className="icon-right" />
                Navegar
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div className="shop-data">
      <div className="container">
        <ul className="shop-data__items">
          <li>
            <i className="icon-shipping" />
            <div className="data-item__content">
              <h4>Envío a todo el Pais</h4>
              <p>con su compra a partir de 20.000$</p>
            </div>
          </li>

          <li>
            <i className="icon-shipping" />
            <div className="data-item__content">
              <h4>90% Clientes Satisfechos!</h4>
              <p>Las opiniones de nuestros clientes hablan por sí solas</p>
            </div>
          </li>

          <li>
            <i className="icon-cash" />
            <div className="data-item__content">
              <h4>Originalidad garantizada</h4>
              <p>30 días de garantía para cada producto de nuestra tienda.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
>>>>>>> 999910e3687007923d988a10278e1affb36fe937

export default PageIntro;
