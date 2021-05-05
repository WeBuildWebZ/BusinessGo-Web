import Link from 'next/link';
import PropTypes from 'prop-types';

const CoolCard = props => (
  <>
    <Link href={props.link}>
      <a>
        <div className="coolCard">
          <img className="icon" src={props.image} />
          <b className="title">{props.title}</b>
        </div>
      </a>
    </Link>
    <style jsx>
      {`
        .coolCard {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 200px;
          height: 160px;
          margin: 14px;
          padding: 7px;
          border-radius: 7px;
          background-color: whitesmoke;
          user-select: none;
          transition: 0.7s;
        }
        .coolCard:hover {
          transform: scale(1.1);
          box-shadow: 0 0 2px 2px whitesmoke;
        }
        .coolCard:active {
          transform: scale(1.2);
          transition: 0.1s;
        }
        .icon {
          max-width: 100px;
          max-height: 100px;
        }
        .title {
          margin: 7px;
          text-align: center;
        }
      `}
    </style>
  </>
);

CoolCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default CoolCard;
