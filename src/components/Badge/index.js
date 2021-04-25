import PropTypes from 'prop-types';

const Badge = props => {
  const count = props.maxCount
    ? props.count > props.maxCount
      ? `+${props.maxCount}`
      : props.count
    : props.count;

  return (
    <div className="badge" style={props.style}>
      {count}
      <style jsx>
        {`
          .badge {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 100%;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            background-color: red;
            box-shadow: 0 0 1px 1px red;
            color: whitesmoke;
            font-size: 18px;
            border-radius: 50px;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

Badge.propTypes = {
  count: PropTypes.number.isRequired,
  maxCount: PropTypes.number,
  style: PropTypes.object
};

Badge.defaultProps = {
  maxCount: 0,
  style: {}
};

export default Badge;
