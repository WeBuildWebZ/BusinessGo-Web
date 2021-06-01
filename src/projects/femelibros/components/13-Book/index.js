import Link from 'next/link';
import PropTypes from 'prop-types';
import ReactStars from 'react-rating-stars-component';

const Book = props => {
  const { book } = props;

  return (
    <div className="book" data-aos="zoom-in-down">
      <div className="image">
        <img src={book.photo} alt="Book" />
      </div>
      <div className="text">
        <h3>{book.title}</h3>
        <h4>
          ${`${book.price}`} {book.currency}
        </h4>
        <ReactStars value={book.stars} size={24} activeColor="#f8ac30" edit={false} isHalf />

        <p>{book.description}</p>
        <Link href={`/ebooks/${encodeURIComponent(book._id)}`}>
          <a>Leer más</a>
        </Link>
      </div>
      <style jsx>
        {`
          .book {
            width: 300px;
            min-height: 400px;
            background: white;
            border-radius: 1em;
            padding: 0.5em;
            margin: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            box-shadow: 0.3em 0.3em 0.5em silver;
          }

          // ===============IMAGE==============================
          .image,
          .text {
            width: 100%;
            height: 200px;
            flex: 1;
          }
          img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 0.5em 0.5em 0 0;
          }

          // =================TEXT================================
          .text {
            background: #1c1c1c;
            border-radius: 0.5em;
            position: relative;
            padding: 0.5em;
          }
          h3 {
            color: white;
          }
          h4 {
            font-size: 14px;
            margin: 5px 0 0 0;
          }
          h4,
          p {
            color: silver;
          }
          p {
            font-style: italic;
            margin: 0;
            font-size: 15px;
            margin-bottom: 10px;
          }
          a {
            display: block;
            background: white;
            border-radius: 5px;
            padding: 5px 0;
            cursor: pointer;
            color: #1c1c1c;
            font-weight: bold;
            text-align: center;
            margin: 0 auto;
            transition: 0.5s ease;
          }
          a:hover {
            background: grey;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
