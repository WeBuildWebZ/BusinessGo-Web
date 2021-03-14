import Link from 'next/link';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Banner = props => (
  <div className="bannerContainer">
    <div className="title">
      {props.title}
      {props.button && (
        <Link href={props.button.href}>
          <a>
            <div className="button">{props.button.text}</div>
          </a>
        </Link>
      )}
    </div>
    <div className="banner">
      {props.images.map((image, i) => (
        <Link key={i} href="/">
          <a>
            <img className="comic" src={image} />
          </a>
        </Link>
      ))}
    </div>
    <style jsx>
      {`
        .bannerContainer {
          margin-top: 15px;
        }
        .title {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 36px;
        }
        .banner {
          display: flex;
          flex-direction: row;
        }
        .comic {
          width: 130px;
          height: 130px;
          margin: 10px;
          transition: 0.7s;
        }
        .comic:hover {
          transform: scale(1.1);
        }
        .comic:active {
          transform: scale(1.2);
          transition: 0.1s;
          border-radius: 7px;
        }
        .button {
          padding: 7px;
          background-color: #f5f556;
          font-size: 22px;
          border-radius: 10px;
          border-style: solid;
          border-width: 1px;
          user-select: none;
          cursor: pointer;
          transition: 0.7s;
        }
        .button:hover {
          transform: scale(1.05);
        }
        .button:active {
          transform: scale(1.1);
          transition: 0.1s;
        }
        @media only screen and (max-width: 768px) {
          .topNContainer {
            margin-top: 10px;
          }
          .title {
            font-size: 24px;
          }
        }
      `}
    </style>
  </div>
);

Banner.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  button: PropTypes.any
};

Banner.defaultProps = {
  title: '',
  button: null
};

export default Banner;
