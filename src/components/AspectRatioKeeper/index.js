import PropTypes from 'prop-types';

const AspectRatioKeeper = props => (
  <div className="container" style={props.style}>
    {props.children}
    <style jsx>
      {`
        .container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
);

AspectRatioKeeper.propTypes = {
  width: PropTypes.number,
  divider: PropTypes.number,
  children: PropTypes.any.isRequired,
  style: PropTypes.object
};

AspectRatioKeeper.defaultProps = {
  width: 100,
  divider: 1,
  style: {}
};
export default AspectRatioKeeper;
