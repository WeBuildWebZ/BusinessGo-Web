import PropTypes from 'prop-types';

const Card = ({ quarter }) => (
  <div className="card">
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
        }
        .card:hover {
          border: 0.3em solid #f5b723;
        }
      `}
    </style>
  </div>
);

Card.propTypes = {
  quarter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default Card;
