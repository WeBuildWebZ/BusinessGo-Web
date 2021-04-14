import PropTypes from 'prop-types';

const ArrowDown = props => (
  <svg
    className={`arrowDown${props.closed ? ' closed' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 14 7"
  >
    <defs>
      <path
        id="path-1"
        d="M12 16a.993.993 0 01-.64-.232l-6-5a1 1 0 111.28-1.536l5.371 4.476 5.362-4.315a1 1 0 011.254 1.558l-6 4.828A1 1 0 0112 16"
      />
    </defs>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g transform="translate(-5 -9)">
        <use
          fill={props.closed ? props.color : '#000000'}
          className="color"
          fillRule="nonzero"
          xlinkHref="#path-1"
        />
      </g>
    </g>
    <style jsx>
      {`
        .arrowDown {
          margin: 7px;
          width: 22px;
          cursor: pointer;
          transform: rotate(180deg);
          transition: 0.7s ease;
        }
        .arrowDown.closed {
          transform: rotate(0);
        }
        .color {
          transition: 0.7s ease;
        }
      `}
    </style>
  </svg>
);

ArrowDown.propTypes = {
  closed: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired
};

export default ArrowDown;
