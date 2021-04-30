import Link from 'next/link';

import { Cards } from '../../data/cards';

// fake data lean..borralo pal carajo
const cards = Cards;

const Servicios = () => (
  <div className="boxs" id="servicios">
    <div className="row">
      <h3>Algunos Titulos</h3>
    </div>
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

    <Link href="/books">
      <a className="more">
        <h5>Ver mas &#x27F6;</h5>
      </a>
    </Link>

    <style jsx>
      {`
        .boxs {
          width: 100vw;
          min-height: 100vh;
          background: #f7ead7;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .row {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h3 {
          width: 300px;
          text-align: center;
          border: 3px solid #c83e59;
          border-radius: 1em;
          font-size: 2em;
          padding: 0.3em 0;
          color: #c83e59;
          border-radius: 1em;
        }

        .card {
          width: 300px;
          min-height: 370px;
          background: white;
          border-radius: 1em;
          padding: 0.5em;
          margin: 0 5px;
          cursor: pointer;
          transition: 0.4s ease;
        }
        .card:hover {
          box-shadow: 0.3em 0.3em 0.3em silver;
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
        .more {
          width: 100%;
          text-align: center;
          padding: 1em 0;
          cursor: pointer;
          font-size: 2em;
          color: #c83e59;
        }
      `}
    </style>
  </div>
);

export default Servicios;
