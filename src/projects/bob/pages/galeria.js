import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

SwiperCore.use([EffectFade, Navigation]);



const Galeria = ({ items }) => {
    return (
        <section className="page-intro">
    <Swiper
     navigation effect="fade"
     className="swiper-wrapper"
     >
      <SwiperSlide>
      <div className="cards">
          {items?.length &&
            items.map((i) => {
              return (
                <div
                  className="card"
                  key={i.title}
                  title={i.title}
                  picture={i.image}
                  link={i.slug}
                />
              )
            })}
        </div>
      </SwiperSlide>
    </Swiper>

    <style jsx>{`

        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .card {
          width:150px;
          height:200px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          flex-flow:column;
        }
      `}</style>
  </section>
    )
}
export default Galeria;
// lean arregla el path del js..no tuve tiempo y me fui..
export async function getStaticProps() {
  const imagesData = await import(`../utils/images`)

  return {
    props: {
      items: imagesData.items,
    },
  }
}




