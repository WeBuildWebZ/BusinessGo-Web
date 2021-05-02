import Link from 'next/link';

import { Cards } from '../../data/galery';
import Menu from '../../components/1-menu';
import Footer from '../../components/10-footer';

const data = Cards;

const Books = () => (
  <>
    <Menu />

    <div className="books">
      <section>Esta es la seccion de los libros.</section>
      {data &&
        data.map(({ title, desc, image, alt,price }, i) => (
          <div className="card" key={i} data-aos="zoom-in-down">
            <img src={image} alt={alt} />
            <h4>{title}</h4>
            <p>{desc}</p>
            <h4>{price}</h4>
            <Link href="#">
              <a>- Leer mas</a>
            </Link>
          </div>
        ))}

      <style jsx>
        {`
          .books {
            width: 100vw;
            min-height: 100vh;
            background: #ebebeb;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          section {
            width: 100vw;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            flex-wrap:wrap;
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
            margin: 1em;
          }
          a {
            color: #c83e59;
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
          // ===========
        `}
      </style>
    </div>

    <Footer />
  </>
);

export default Books;
