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
            align-items: center;
          }
          .bookPhoto {
            width: 50%;
            margin: 21px;
            border-radius: 7px 50px;
            transition: 0.7s;
          }
          .bookPhoto:hover {
            transform: rotateX(16deg) rotateY(-16deg);
            box-shadow: 0 0 2px 2px #000000;
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
          @media only screen and (max-width: 768px) {
            .bookContainer {
              flex-direction: column;
            }
            .bookPhoto {
              width: 80%;
            }
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
