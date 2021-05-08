import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Menu from '../../components/1-menu';
import Footer from '../../components/10-footer';
import Pagination from '../../components/12-Pagination';
import { getClientDocuments } from '../../../../services/api/clientDocument';
import Book from '../../components/13-Book';

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
        <section>
          <p>
            Seccion dedicada a ti, escoge el ebook que mas te guste o llame tu atencion, y al hacerlo, se
            enviara un mail a mi bandeja de correo para que te contacte, si gustas , puedes hablarme por
            WhatsApp.
          </p>
        </section>
        {books?.map((book, i) => (
          <Book key={i} book={book} />
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
            min-height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #d99c8a;
            color: white;
            padding: 3em 1em 1em 1em;
            font-style: italic;
          }
          section p {
            width: 600px;
            font-size: 1.7em;
            letter-spacing: 1px;
            padding-top: 0.5em;
          }

          // ===========

          @media (max-width: 580px) {
            section p {
              width: 100%;
              padding-top: 1em;
            }
          }
          @media (max-width: 440px) {
            section p {
              padding-top: 2em;
            }
          }
        `}
      </style>

      <Footer />
    </>
  );
};

export default Books;
