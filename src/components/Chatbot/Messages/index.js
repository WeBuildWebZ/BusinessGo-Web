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
          <div key={2} className={`message${message.from === 'user' ? ' userMessage' : ' botMessage'}`}>
            {message.from === 'bot' && (
              <img className="avatar" src={project.chatbot.configuration.web.avatar} />
            )}
            {message.type === 'text' && <div className="text">{message.text}</div>}
            {message.type === 'image' && (
              <div className="text">
                {message.text}
                <a href={message.image_url} target="_blank">
                  <img className="image" src={message.image_url} />
                </a>
              </div>
            )}
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
          .avatar {
            display: inline-block;
            margin-right: 3px;
            width: 22px;
            transition: 0.7s;
          }
          .avatar:hover {
            transform: scale(1.2) rotate(-20deg);
          }
          .message {
            width: fit-content;
            background-color: lightskyblue;
            box-shadow: 0 0 3px 1px lightskyblue;
            padding: 7px;
            margin: 14px;
            border-radius: 7px;
            font-size: 14px;
            animation: fadeRight 0.5s linear;
            transition: 0.5s;
          }
          .userMessage {
            float: right;
            border-top-right-radius: 0;
          }
          .botMessage {
            border-top-left-radius: 0;
          }
          .text {
            display: inline-block;
            float: right;
            white-space: pre-line;
            overflow: visible;
          }
          .image {
            max-width: 200px;
            max-height: 200px;
            border-radius: 5px;
            transition: 0.7s;
          }
          .image:hover {
            transform: scale(1.1);
            filter: blur(1px);
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
