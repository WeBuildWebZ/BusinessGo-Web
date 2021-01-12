import { Toast } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { _popAlert, _hideAlert } from '../../shared/actions/alerts';

import { iconMapper } from './constants';

const margin = '15px';

const AlertStack = props => {
  const dispatch = useDispatch();
  const alerts = useSelector(store => store.alerts);

  const handleCloseAlert = alert => {
    dispatch(_hideAlert(alert));
    setTimeout(() => {
      dispatch(_popAlert(alert));
    }, 300);
  };

  if (!alerts.length) return <div />;

  return (
    <div className={`alertStack ${props.position}`}>
      {alerts.map((alert, i) => (
        <Toast
          key={i}
          style={{ minWidth: 300 }}
          autohide
          delay={alert.duration}
          show={alert._show}
          draggable
          onClose={() => handleCloseAlert(alert)}
        >
          <Toast.Header>
            <img src={iconMapper[alert.icon]} className="icon" alt="" />
            <strong className="mr-auto">{alert.title}</strong>
            <small>{alert.time}</small>
          </Toast.Header>
          <Toast.Body>{alert.message}</Toast.Body>
        </Toast>
      ))}
      <style jsx>
        {`
          .alertStack {
            position: absolute;
            padding: 15px;
            background-color: rgba(62, 147, 204, 0.3);
            border-radius: 8px;
            transition: 0.2s;
            z-index: 9999999999999;
          }
          .alertStack:hover {
            background-color: rgba(62, 147, 204, 0.45);
            border-radius: 11px;
            box-shadow: 0 0 2px 2px rgba(62, 147, 204, 0.45);
          }
          .topLeft {
            transform: translate(${margin}, ${margin});
          }
          .topRight {
            transform: translate(calc(-100% - ${margin}), ${margin});
            left: 100%;
          }
          .bottomRight {
            transform: translate(calc(-100% - ${margin}), calc(-100% - ${margin}));
            left: 100%;
            top: 100%;
          }
          .bottomLeft {
            transform: translate(${margin}, calc(-100% - ${margin}));
            top: 100%;
          }
          .icon {
            width: 20px;
          }
        `}
      </style>
    </div>
  );
};

AlertStack.propTypes = {
  position: PropTypes.oneOf(['topLeft', 'topRight', 'bottomRight', 'bottomLeft']).isRequired
};

export default AlertStack;
