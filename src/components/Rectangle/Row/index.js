import PropTypes from 'prop-types';

const Row = props => (
  <div className="row1 center" style={props.style}>
    {props.text && <h4>{props.text}</h4>}
    <style jsx>
      {`
        .row1 {
          transform-style: preserve-3d;
          transform: perspective(100px);
          flex: ${props.flex};
          border-top-left-radius: ${props.borderTopLeft}em;
          border-top-right-radius: ${props.borderTopRight}em;
          border-bottom-left-radius: ${props.borderBottomLeft}em;
          border-bottom-right-radius: ${props.borderBottomRight}em;
          white-space: pre-wrap;
          color: ${props.color};
          background: ${props.backgroundColor};
          user-select: none;
          ${props.imageUrl
            ? `
                background-image: url(${props.imageUrl});
                background-size: cover;
                background-position: 0 0;
                background-repeat: no-repeat;
              `
            : ''}
          transition: 0.7s;
        }
        .row1:hover {
          transform: perspective(100px) rotateX(5deg) rotateY(5deg);
          opacity: 0.7;
          filter: brightness(1);
          border-top-left-radius: ${props.borderTopLeft * 2}em;
          border-top-right-radius: ${props.borderTopRight * 2}em;
          border-bottom-left-radius: ${props.borderBottomLeft * 2}em;
          border-bottom-right-radius: ${props.borderBottomRight * 2}em;
          ${!props.imageUrl
            ? `
                box-shadow: 0 0 2px 2px ${props.backgroundColor};
              `
            : ''}
        }
      `}
    </style>
  </div>
);

Row.propTypes = {
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  flex: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  borderTopLeft: PropTypes.number,
  borderTopRight: PropTypes.number,
  borderBottomLeft: PropTypes.number,
  borderBottomRight: PropTypes.number,
  style: PropTypes.object
};

Row.defaultProps = {
  text: '',
  imageUrl: '',
  style: {},
  flex: 1,
  backgroundColor: 'black',
  color: 'white',
  borderTopLeft: 0,
  borderTopRight: 0,
  borderBottomLeft: 0,
  borderBottomRight: 0
};

export default Row;
