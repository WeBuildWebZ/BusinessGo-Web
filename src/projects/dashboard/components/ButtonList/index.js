import Link from 'next/link';
import PropTypes from 'prop-types';

const ButtonList = props => (
  <div className="buttonList">
    {props.buttons.map((button, i) => (
      <Link key={i} href={button.link}>
        <a className="button">{button.text}</a>
      </Link>
    ))}
    <style jsx>
      {`
        .buttonList {
          display: flex;
          flex-direction: column;
          width: fit-content;
        }
        .button {
          width: fit-content;
          margin: 7px;
          padding: 7px;
          transition: 0.7s;
          border-radius: 5px;
          background-color: rgb(94, 156, 180);
          color: whitesmoke;
        }
        .button:hover {
          transform: scale(1.1);
        }
        .button:active {
          transform: scale(1.2) translate(10%);
          transition: 0.1s;
        }
      `}
    </style>
  </div>
);

ButtonList.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ButtonList;
