import PropTypes from 'prop-types';

const Overlay = props => (
  <div className="overlay" style={props.style}>
    {props.children}
    <style jsx>
      {`
        .overlay {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
        }
      `}
    </style>
  </div>
);

Overlay.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  onClick: PropTypes.func
};

Overlay.defaultProps = {
  children: '',
  style: {},
  onClick: () => {}
};

export default Overlay;
