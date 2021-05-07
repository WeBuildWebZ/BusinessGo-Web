import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

import { showClientDocument } from '../../../../services/api/clientDocument';
import Menu from '../../components/1-menu';
import Footer from '../../components/10-footer';

export const getServerSideProps = ({ query }) => {
  const { book_id } = query;

  return { props: { book_id } };
};

const ShowBook = props => {
  const { book_id } = props;
  const [book, setBook] = useState(null);
  const pageSize = 9;

  useEffect(() => {
    showClientDocument(book_id).then(({ data: givenBook }) => {
      setBook(givenBook);
    });
  }, []);

  return (
    <>
      <Menu />

      {book && (
        <div className="showBook">
          <div className="bookContainer">
            <img className="bookPhoto" src={book.photo} />
            <div className="bookInfo">
              <h1>{book.title}</h1>
              <h2>${book.price} ARS</h2>
              <ReactStars value={book.stars} size={45} activeColor="#f8ac30" edit={false} isHalf />
              <p className="bookDescription">{book.description}</p>
            </div>
          </div>
        </div>
      )}
      <style jsx>
        {`
          .showBook {
            width: 100vw;
            min-height: 100vh;
            background: #ebebeb;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .bookContainer {
            display: flex;
          }
          .bookPhoto {
            width: 50%;
            margin: 21px;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;
          }
          .bookInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 21px;
          }
          .bookDescription {
            max-width: 50%;
          }
        `}
      </style>

      <Footer />
    </>
  );
};

ShowBook.propTypes = {
  book_id: PropTypes.string.isRequired
};

export default ShowBook;
