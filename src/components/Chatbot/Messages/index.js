import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Messages = props => {
  const project = useSelector(store => store.project);

  return (
    <div className="messages">
      {props.messages.map((message, i) => (
        <div key={i} className="message">
          {message.type === 'text' && <div>{message.text}</div>}
        </div>
      ))}
      <style jsx>
        {`
          .messages {
            width: 100%;
            height: calc(100% - ${project.chatbot.configuration.web.header_size || 50}px - 40px);
          }
        `}
      </style>
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Messages;
