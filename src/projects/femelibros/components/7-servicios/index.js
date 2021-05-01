import Link from 'next/link';

import { Cards } from '../../data/cards';

// fake data lean..borralo pal carajo
const cards = Cards;

const Servicios = () => (
  <div className="boxs" id="servicios">
    <div className="row">
      <h3>Recientes</h3>
    </div>

    <div className="row">
      <div className="text">
        <h2>DON'T FORGET</h2>
        <hr />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem corrupti voluptates numquam
          minima!
        </p>
        <hr />
        <h4>25% OFF YOUR PURCHASE!</h4>
      </div>
    </div>
    {cards &&
      cards.map(({ title, desc, image, alt }, i) => (
        <div className="card" key={i} data-aos="fade-down">
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
          padding: 6em 0;
        }
        .row {
          width: 100vw;
        }
        h3 {
          display: inline;
          background: #c83e59;
          color: white;
          padding: 3px;
          margin-left: 10.5em;
        }

        // ========================================

        .text {
          width: 400px;
          background: white;
          padding: 0.5em;
          margin: 2em 0 2em 12em;
          border-radius: 1em;
          border: 3px solid #756a6f;
          box-shadow: 0.2em 0.2em 0.2em silver;
        }
        .text h2 {
          color: #756a6f;
        }
        .text hr {
          background: #756a6f;
          height: 2px;
          width: 100px;
          margin: 0.5em 0;
          border: none;
        }
        .text h4 {
          margin: 0;
          color: #756a6f;
        }
        .text p {
          font-size: 1.5em;
          line-height: 1em;
          color: #1c1c1c;
        }

        // ========================================

        .card {
          width: 300px;
          min-height: 370px;
          background: white;
          border-radius: 1em;
          padding: 0.5em;
          margin: 5px;
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
        // ==========================================

        @media (max-width: 745px) {
          .text {
            margin: 2em;
          }
          .row {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          h3 {
            margin-left: 0;
            position: absolute;
            left: 1em;
          }
        }
        @media (max-width: 345px) {
          .boxs {
            padding: 3em 1em;
          }
          .text {
            margin: 2em 0;
            width: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Servicios;
