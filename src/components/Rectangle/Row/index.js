import PropTypes from 'prop-types';

const Row = props => (
  <div className="row1 center" style={props.style}>
    {props.text && <h4>{props.text}</h4>}
    <style jsx>
      {`
        .row1 {
          flex: ${props.flex};
          border-top-left-radius: ${props.borderTopLeft};
          border-top-right-radius: ${props.borderTopRight};
          border-bottom-left-radius: ${props.borderBottomLeft};
          border-bottom-right-radius: ${props.borderBottomRight};
          white-space: pre-wrap;
          color: ${props.color};
          background: ${props.backgroundColor};
          user-select: none;
          transition: 0.7s;
          ${props.imageUrl
            ? `
                background-image: url(${props.imageUrl});
                background-size: cover;
                background-position: 0 0;
                background-repeat: no-repeat;
              `
            : ''}
        }
        .row1:hover {
          opacity: 0.7;
          filter: brightness(1);
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
  borderTopLeft: PropTypes.string,
  borderTopRight: PropTypes.string,
  borderBottomLeft: PropTypes.string,
  borderBottomRight: PropTypes.string,
  style: PropTypes.object
};

Row.defaultProps = {
  text: '',
  imageUrl: '',
  style: {},
  flex: 1,
  backgroundColor: 'black',
  color: 'white',
  borderTopLeft: '0',
  borderTopRight: '0',
  borderBottomLeft: '0',
  borderBottomRight: '0'
};

export default Row;
