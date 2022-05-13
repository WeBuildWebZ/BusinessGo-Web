import PropTypes from 'prop-types';

const Card = ({ quarter }) => {
  const items = quarter.items.slice(0, 3);
  return (
    <div className="card">
      <div className="itemsContainer">
        <h1>{quarter.title}</h1>
        {items.map(item => (
          <div className="items">{item}</div>
        ))}
      </div>
      <style jsx>
        {`
          .card {
            width: 350px;
            height: 400px;
            border: 0.3em solid #ebebeb;
            border-radius: 10px;
            padding: 1em;
            margin: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            color: white;
            transition: 0.2s;
          }
          .card:hover {
            border: 0.3em solid #f5b723;
          }
          .itemsContainer {
            width: 250px;
          }
          .item {
            text-align: left;
          }
        `}
      </style>
    </div>
  );
};

Card.propTypes = {
  quarter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default Card;
