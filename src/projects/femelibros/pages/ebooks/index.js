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
            <img src={book.photo} alt="Book" />
            <ReactStars
              // count={rating}
              value={Math.random() * 5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              edit={false}
              isHalf
            />
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <h4>{`$${book.price}`}</h4>
            <Link href={`/ebooks/${encodeURIComponent(book._id)}`}>
              <a>- Leer más</a>
            </Link>
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

      <Footer />
    </>
  );
};

export default Books;
