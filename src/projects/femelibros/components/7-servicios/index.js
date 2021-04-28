import Link from 'next/link';

import { Cards } from '../../data/cards';

// fake data lean..borralo pal carajo
const cards = Cards;

const Servicios = () => (
  <div className="boxs" id="servicios">
    <h2>Nuestros Servicios</h2>
    {cards &&
      cards.map(({ title, desc, image, alt }, i) => (
        <div className="card" key={i}>
          <img src={image} alt={alt} />
          <h4>{title}</h4>
          <p>{desc}</p>
          <Link href="#">
            <a>- Leer mas</a>
          </Link>
        </div>
      ))}

    <style jsx>
      {`
        .boxs {
          width: 100vw;
          min-height: 100vh;
          background: #ebebeb;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        h2 {
          width: 100%;
          text-align: center;
          background: white;
          padding: 1em 0;
        }

        .card {
          width: 300px;
          min-height: 370px;
          background: white;
          border-radius: 1em;
          padding: 0.5em;
          margin: 0 5px;
        }
        img {
          width: 100%;
          height: 270px;
          object-fit: cover;
          border-radius: 0.5em 0.5em 0 0;
        }
        h4 {
          margin: 0.5em 0;
        }
        p {
          font-style: italic;
          margin-bottom: 0.5em;
        }
      `}
    </style>
  </div>
);

export default Servicios;
