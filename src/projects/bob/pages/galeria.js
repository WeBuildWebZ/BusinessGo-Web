import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import SwiperCore, { EffectFade, Navigation } from 'swiper';
import Link from 'next/link'

SwiperCore.use([EffectFade, Navigation]);

export async function getStaticProps() {
  const { default: images } = await import(`../utils/data/images`);

  return { props: { images } };
}

const Galeria = ({ images }) => (
  <section className="galeria">
    <Link href="/">
        <button className="inicio">Volver a Inicio</button>
    </Link>
    <h2>Galeria</h2>

        <div className="cards">
          {images.length &&

            images.map(image => (

            <div>
              <img
                key={image.title}
                title={image.title}
                src={image.image}
                link={image.slug}
                className="card"
              />
              <h4>Titulo imagen</h4>
              <p>Descripcion</p>
            </div>

            ))}
        </div>



    <style jsx>
      {`
      .galeria{
          width:100vw;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow:column;
      }

      .inicio{
          width:100vw;
          height: 10vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background:white;
      }
      h2{
        font-size:2em;
      }
      h4{
        font-size:2em;
      }
      p{
        font-size:1.5em;
        margin-bottom:3em;
      }

      .cards {
          width:100vw;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          flex-flow:column;
          overflow-y: hidden;
      }

      .card {
          width: 100%;
          height:100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius:1em;
          margin:5px;
        }
      `}
    </style>
  </section>
);

Galeria.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Galeria;
