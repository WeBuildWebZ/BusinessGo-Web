import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

export async function getStaticProps() {
  const { default: images } = await import(`../utils/data/images`);

  return { props: { images } };
}

const Galeria = ({ images }) => (
  <section className="page-intro">
    <Swiper navigation effect="fade" className="swiper-wrapper">
      <SwiperSlide>
        <div className="cards">
          {images.length &&
            images.map(image => (
              // <div className="card" key={i.title} title={i.title} picture={i.image} link={i.slug} />
              // lo puse como imagen porque los div no tinen las prop picture ni link
              <img
                className="card"
                key={image.title}
                title={image.title}
                src={image.image}
                link={image.slug}
              />
            ))}
        </div>
      </SwiperSlide>
    </Swiper>

    <style jsx>
      {`
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .card {
          width: 150px;
          height: 200px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
      `}
    </style>
  </section>
);

Galeria.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Galeria;
