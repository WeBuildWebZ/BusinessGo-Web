import Link from 'next/link';
import ReactStars from 'react-rating-stars-component';

import Menu from '../../components/1-menu';
import Footer from '../../components/10-footer';
import { Cards } from '../../data/galery';

const data = Cards;

const ratingChanged = newRating => {
  console.log(newRating);
};

const Books = () => (
  <>
    <Menu />

    <div className="books">
      <section>Esta es la seccion de los libros.</section>
      {data &&
        data.map(({ id, title, desc, image, alt, price, rank }, i) => (
          <div className="card" key={id} data-aos="zoom-in-down">
            <img src={image} alt={alt} />
            <ReactStars
              // count={rating}
              value={rank}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              edit={false}
              isHalf
            />
            <h2>{title}</h2>
            <p>{desc}</p>
            <h4>{price}</h4>
            <Link href={`/${id}`}>
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
            flex-wrap: wrap;
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
          h2 {
            margin: 0.5em 0;
            color: #c83e59;
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
