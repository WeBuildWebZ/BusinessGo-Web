import { useSelector } from 'react-redux';

const Alerts = () => {
  const alerts = useSelector(store => store.alerts);

  return (
    <div className="alerts">
      {alerts.map((alert, i) => (
        <div key={i} className={`alert ${alert.type}Type${!alert._show ? ' alertHide' : ''}`}>
          <div key="title" className="title">
            {alert.title}
          </div>
          <div key="message" className="message">
            {alert.message}
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .alerts {
            position: fixed;
            transform: translate(-100%, -100%);
            left: calc(100% - 15px);
            top: calc(100% - 15px);
            width: fit-content;
            z-index: 1400;
          }
          .title {
            font-size: 20px;
          }
          .message {
            font-size: 14px;
          }
          .alert {
            margin-top: 7px;
            padding: 7px;
            transition: 0.7s;
            animation: arrive 0.7s linear;
            border-radius: 5px;
          }
          .alert:hover {
            transform: scale(1.1);
          }
          .alert:active {
            transform: scale(1.15) rotate(2deg);
          }
          .alertHide {
            opacity: 0;
            transform: scale(0);
            border-radius: 0;
          }
          .errorType {
            background-color: #ff2400;
            box-shadow: 0 0 2px 2px #ff2400;
            color: whitesmoke;
          }
          .errorType:hover {
            box-shadow: 0 0 3px 2px #ff2400;
          }
          .errorType:active {
            box-shadow: 0 0 4px 2px #ff2400;
          }
          .infoType {
            background-color: forestgreen;
            color: whitesmoke;
          }
          .infoType:hover {
            box-shadow: 0 0 3px 2px forestgreen;
          }
          .infoType:active {
            box-shadow: 0 0 4px 2px forestgreen;
          }

          @keyframes arrive {
            0% {
              opacity: 0;
              transform: scale(0);
              border-radius: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Alerts;
