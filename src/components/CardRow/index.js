import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const CardRow = props => (
  <div className="cardRow">
    <div className="title">{props.title}</div>
    <div className="buttonContainer">
      {props.buttonText && (
        <Button style={{ backgroundColor: 'rgb(82, 146, 185)', margin: 7 }} onClick={props.onButtonClick}>
          {props.buttonText}
        </Button>
      )}
      {props.deleteButtonText && (
        <Button
          style={{ backgroundColor: 'rgb(236, 22, 22)', margin: 7 }}
          onClick={props.onDeleteButtonClick}
        >
          {props.deleteButtonText}
        </Button>
      )}
    </div>
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
          animation: fadeIn 1s linear;
        }
        .buttonContainer {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }

        @keyframes fadeIn {
          0% {
            width: 0;
            opacity: 0;
            box-shadow: 0 0 50px 50px rgb(87, 134, 163);
          }
          100% {
            opacity: 1;
          }
        }
      `}
    </style>
  </div>
);

CardRow.propTypes = {
  title: PropTypes.string.isRequired,
  deleteButtonText: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
  onDeleteButtonClick: PropTypes.func
};

CardRow.defaultProps = {
  deleteButtonText: '',
  buttonText: '',
  onButtonClick: () => {},
  onDeleteButtonClick: () => {}
};

export default CardRow;
