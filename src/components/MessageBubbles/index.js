import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Markdown from 'react-markdown';

const markdownProps = { linkTarget: 'blank' };

const MessageBubbles = props => {
  const project = useSelector(store => store.project);
  const messages = useRef();

  useEffect(() => {
    if (!messages.current) return;
    messages.current.scrollTo(0, messages.current.scrollHeight);
  }, [props.messages]);

  return (
    <div className="messages" ref={messages}>
      {props.messages.map((message, i) => {
        const fromPerson = !['bot', 'user'].includes(message.from);
        const fromMe = message.from === props.me;

        return (
          <div key={i} className="messageContainer">
            {fromPerson ? <div className={`from${fromMe ? ' fromRight' : ''}`}>{message.from}</div> : ''}
            <div key={2} className={`message${fromMe ? ' myMessage' : ' otherMessage'}`}>
              {message.from === 'bot' && (
                <img className="avatar" src={project.chatbot.configuration.web.avatar} />
              )}
              {message.type === 'text' && (
                <div className="text">
                  <Markdown {...markdownProps}>{message.text}</Markdown>
                </div>
              )}
              {message.type === 'image' && (
                <div className="text">
                  <Markdown {...markdownProps}>{message.text}</Markdown>
                  <a href={message.image_url} target="_blank">
                    <img className="image" src={message.image_url} />
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <style jsx>
        {`
          .messages {
            width: 100%;
            height: ${props.height};
            overflow-y: auto;
          }
          .messageContainer {
            clear: both;
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
            display: flex;
            flex-direction: column;
            width: fit-content;
            height: fit-content;
            background-color: lightskyblue;
            box-shadow: 0 0 3px 1px lightskyblue;
            padding: 10px;
            margin: 14px;
            border-radius: 7px;
            font-size: 14px;
            animation: fadeRight 0.5s linear;
            transition: 0.5s;
          }
          .myMessage {
            float: right;
            border-top-right-radius: 0;
          }
          .otherMessage {
            border-top-left-radius: 0;
            padding: 10px;
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
          .from {
            font-size: 10px;
            margin: 0 0 -13px 14px;
          }
          .fromRight {
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

MessageBubbles.propTypes = {
  me: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  height: PropTypes.string.isRequired
};

export default MessageBubbles;
