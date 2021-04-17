import PropTypes from 'prop-types';

const ProgressBar = props => (
  <div className="progressBar">
    <div className="progressLine" />
    <div className="text">
      {props.progress.toFixed(2)}%{props.progress >= 100 && <i className="fa fa-check" />}
    </div>
    <style jsx>
      {`
        .progressBar {
          position: relative;
          width: 100%;
          height: 10px;
          background-color: #03030356;
          border-radius: 4px;
        }
        .progressLine {
          width: ${props.progress}%;
          height: 100%;
          border-radius: 4px;
          background-color: #25d366;
          box-shadow: 0 0 1px 1px #25d366;
          transition: 0.7s;
        }
        .text {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          font-size: 10px;
          font-weight: bold;
        }
        .fa-check {
          width: 10px;
          font-size: 13px;
          animation: checkAppear 1s ease;
        }
        @keyframes checkAppear {
          0% {
            font-size: 0;
            width: 0;
          }
        }
      `}
    </style>
  </div>
);

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

export default ProgressBar;
