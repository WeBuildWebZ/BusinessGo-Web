import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Messages = props => {
  const project = useSelector(store => store.project);
  const messages = useRef();

  useEffect(() => {
    if (!messages.current) return;
    messages.current.scrollTo(0, messages.current.scrollHeight);
  }, [props.messages]);

  return (
    <div className="messages" ref={messages}>
      {props.messages.map((message, i) => (
        <div key={i} className="messageContainer">
          <div className={`message${message.from === 'user' ? ' userMessage' : ''}`}>
            {message.type === 'text' && <div>{message.text}</div>}
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .messages {
            width: 100%;
            height: calc(100% - ${project.chatbot.configuration.web.header_size || 50}px - 44px);
          }
          .messageContainer {
            width: 100%;
          }
          .message {
            width: fit-content;
            background-color: lightskyblue;
            box-shadow: 0 0 3px 1px lightskyblue;
            padding: 7px;
            margin: 14px;
            border-radius: 7px;
            animation: fadeRight 0.5s linear;
            transition: 0.5s;
          }
          .userMessage {
            float: right;
          }
          @keyframes fadeRight {
            0% {
              background-color: rgb(52, 95, 122);
              box-shadow: 0 0 20px 20px rgb(52, 95, 122);
              font-size: 28px;
              opacity: 0;
            }
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
