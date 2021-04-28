import Link from 'next/link';

import { Cards } from '../../data/cards';
import Menu from '../../components/1-menu';
import Footer from '../../components/10-footer';

const data = Cards;

const Books = () => (
  <>
    <Menu />

    <div className="books">
      {data &&
        data.map(({ title, desc, image, alt }, i) => (
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
          .books {
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
          a {
            color: #ffa489;
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
