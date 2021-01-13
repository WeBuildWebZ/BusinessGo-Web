import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => (
  <section className="page-intro">
    <Swiper navigation effect="fade" className="swiper-wrapper">
      <SwiperSlide>
        <div
          className="page-intro__slide"
          style={{
            backgroundImage: "url('/images/slide-1.jpg')",
            backgroundPosition: 'bottom'
          }}
        >
          <div className="container">
            <div className="page-intro__slide__content">
              <h2>El mejor precio en construcción de Piscinas.</h2>
              <a href="#" className="btn-shop">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="page-intro__slide"
          style={{ backgroundImage: "url('/images/slide-2.jpg')", backgroundPosition: 'bottom' }}
        >
          <div className="container">
            <div className="page-intro__slide__content">
              <h2>Cotizamos tu pedido.</h2>
              <a href="#" className="btn-shop">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="page-intro__slide"
          style={{ backgroundImage: "url('/images/slide-3.jpg')", backgroundPosition: 'bottom' }}
        >
          <div className="container">
            <div className="page-intro__slide__content">
              <h2>Mira nuestros trabajos.</h2>
              <a href="#" className="btn-shop">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
);

export default PageIntro;
