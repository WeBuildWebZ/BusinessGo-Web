import PropTypes from 'prop-types';

const AspectRatioKeeper = props => (
  <div className="container" style={props.style}>
    {props.children}
    <style jsx>
      {`
        .container {
          width: 100%;
          padding-top: ${100 / props.divider}%; /* 1:1 Aspect Ratio */
          position: relative; /* If you want text inside of it */
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
