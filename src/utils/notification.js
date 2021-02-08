import WebNotification from 'react-web-notification';
import PropTypes from 'prop-types';

let audio;

const Notification = props => {
  const handleClose = () => {
    window.focus();
    props.onClose();
  };

  const handleShow = () => {
    if (props.sound) {
      if (audio) audio.pause();
      audio = new Audio(props.sound);
      audio.play().catch(() => {});
    }
  };

  return (
    <WebNotification
      ignore={!props.show}
      disableActiveWindow={false}
      askAgain={false}
      onShow={handleShow}
      onClick={handleClose}
      title={props.title}
      options={{ body: props.message, icon: props.icon }}
    />
  );
};

Notification.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  icon: PropTypes.string,
  sound: PropTypes.string,
  onClose: PropTypes.func
};

Notification.defaultProps = {
  icon: '/favicon.png',
  sound: '',
  message: '',
  onClose: () => {}
};

export default Notification;
