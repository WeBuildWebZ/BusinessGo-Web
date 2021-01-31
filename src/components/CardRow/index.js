import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const CardRow = props => (
  <div className="cardRow">
    <div className="title">{props.title}</div>
    {props.buttonText && (
      <Button style={{ backgroundColor: 'rgb(82, 146, 185)' }} onClick={props.onButtonClick}>
        {props.buttonText}
      </Button>
    )}
    <style jsx>
      {`
        .cardRow {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 80%;
          height: fit-content;
          padding: 17px;
          margin: 17px 0 17px 10%;
          border-radius: 7px;
          background-color: lightskyblue;
          box-shadow: 0 0 2px 1px lightskyblue;
        }
      `}
    </style>
  </div>
);

CardRow.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func
};

CardRow.defaultProps = {
  buttonText: '',
  onButtonClick: () => {}
};

export default CardRow;
