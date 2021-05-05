import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux';

import Menu from '../../components/1-menu';
import Footer from '../../components/10-footer';
import Pagination from '../../components/12-Pagination';
import { Cards } from '../../data/galery';
import { getClientDocuments } from '../../../../services/api/clientDocument';

const data = Cards;

const ratingChanged = newRating => {
  console.log(newRating);
};

const Books = () => {
  const project = useSelector(store => store.project);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(null);
  const pageSize = 9;

  useEffect(() => {
    if (!project) return;
    getClientDocuments('book', project, pageSize, page).then(({ data: givenBooks }) => {
      setBooks(givenBooks);
    });
  }, [project, page]);

  useEffect(() => {
    if (!project) return;
    getClientDocuments('book', project, pageSize, page, {}, '', [], true).then(({ data: response }) => {
      setPageCount(Math.ceil(response.count / pageSize));
    });
  }, [project]);

  return (
    <>
      <Menu />

      <div className="books">
        <section>Esta es la seccion de los libros.</section>
        {books?.map((book, i) => (
          <div className="card" key={book._id} data-aos="zoom-in-down">
            <div className="image">
              <img src={book.photo} alt="Book" />
            </div>
            <div className="text">
              <h3>{book.title}</h3>
              <h4>{`${book.price}`}$ ARS</h4>
              <ReactStars
                // count={rating}
                value={book.stars}
                onChange={ratingChanged}
                size={24}
                activeColor="#f8ac30"
                edit={false}
                isHalf
              />

              <p>{book.description}</p>
              <Link href={`/ebooks/${encodeURIComponent(book._id)}`}>
                <a>Leer más</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {pageCount && <Pagination pageSize={pageCount} onChange={setPage} />}
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
            height: 400px;
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
            background: #1c1c1c;
            color: white;
            border: 1px solid white;
            border-radius: 5px;
          }
          // ===========
        `}
      </style>

      <Footer />
    </>
  );
};

export default Books;
