import PropTypes from 'prop-types';

const Card = props => {
  const { card } = props;

  return (
    <div className="singleCard">
      <img className="photo" src={card.photo_or_logo} />
      {card.completeName}
      <style jsx>
        {`
          * {
            color: whitesmoke;
          }
          .singleCard {
            width: 320px;
            height: 180px;
            margin: 14px;
            background-color: blue;
            border-radius: 14px;
            transition: 0.7s;
          }
          .singleCard:hover {
            transform: scale(1.05);
            box-shadow: 2px 2px 2px 2px blue;
          }
          .photo {
            max-width: 50px;
            max-height: 50px;
            margin: 14px;
            border-top-left-radius: inherit;
            border-bottom-right-radius: inherit;
          }
        `}
      </style>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default Card;
