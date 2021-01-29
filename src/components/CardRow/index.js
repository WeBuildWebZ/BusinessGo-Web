import PropTypes from 'prop-types';

const CardRow = props => (
  <div className="cardRow">
    <style jsx>
      {`
        .cardRow {
          width: 100%;
          height: 200px;
          border-radius: 7px;
          background-color: lightskyblue;
          box-shadow: 0 0 2px 1px lightskyblue;
        }
      `}
    </style>
  </div>
);

CardRow.propTypes = {
  title: PropTypes.string.isRequired
};

export default CardRow;
