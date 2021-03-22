import PropTypes from 'prop-types';

const Loading = props => (
  <div className="loading">
    {Array(8)
      .fill(0)
      .map((_, i) => (
        <div key={i} className="loadingSquare" style={{ animationDelay: `${i * 0.07}s` }} />
      ))}
    <style jsx>
      {`
        .loading {
          display: ${props.show ? 'flex' : 'none'};
          flex-direction: row;
        }
        .loadingSquare {
          width: 5px;
          height: 5px;
          margin: 14px;
          border-radius: 50px;
          background-color: #ff044c;
          box-shadow: 0 0 2px 2px #ff044c;
          animation: loading 0.4s ease infinite;
        }
        @keyframes loading {
          50% {
            transform: translate(0, -180%);
            opacity: 0.3;
          }
        }
      `}
    </style>
  </div>
);

Loading.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Loading;
