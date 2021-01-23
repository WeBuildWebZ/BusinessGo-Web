import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

import Logo from '../../assets/icons/logo';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => (
  <section className="page-intro">
    <Swiper navigation effect="fade" className="swiper-wrapper">
      <SwiperSlide>
        <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
          <div className="container">
            <div className="page-intro__slide__content">
              <h2>El mejor precio en Blanquería</h2>
              <a href="/products" className="btn-shop">
                <i className="icon-right" />
                Navegar
              </a>
            </div>
            <Logo width={450} height={309.375} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
          <div className="container">
            <div className="page-intro__slide__content">
              <h2>Calidad Premium</h2>
              <a href="/products" className="btn-shop">
                <i className="icon-right" />
                Navegar
              </a>
            </div>
            <Logo width={450} height={309.375} />
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
              <h4>Envíos a todo el País</h4>
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

export default PageIntro;
