import PropTypes from 'prop-types';
import { createRef, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { showConversation } from '../../../../../../../../../../services/chatbot_api/conversation';
import { createWebMessage } from '../../../../../../../../../../services/chatbot_api/web_message';
import { socket } from '../../../../../../../../../../shared/sockets/chatbot';
import Spinner from '../../../../../../../../../Spinner';
import MessageBubbles from '../../../../../../../../../MessageBubbles';
import Notification from '../../../../../../../../../../utils/notification';
import Back from '../../../../../../../../../Back';

import Input from './Input';
import { getLanguage } from './lang';

const ConversationChat = ({ conversationId, show, onExit }) => {
  const project = useSelector(store => store.project);
  const language = getLanguage(useSelector(store => store.language));
  const user = useSelector(store => store.user);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(null);
  const textInput = useRef();
  const [sendingText, setSendingText] = useState(false);
  const from = `${user.name} ${user.surname}`;
  const messagesRef = useRef();
  const conversationRef = useRef();
  messagesRef.current = messages;
  conversationRef.current = conversation;

  const handleAddMessages = newMessages => {
    setNewMessage(null);
    setMessages([...messagesRef.current, ...newMessages]);
  };

  const handleKeyPress = ({ target, charCode }) => {
    const text = target.value.trim();
    if (charCode !== 13 || !text) return;
    const message = {
      conversation_id: conversation.id,
      channel: conversation.channel,
      from,
      type: 'text',
      text
    };
    setNewMessage(null);
    setSendingText(true);
    createWebMessage(project, message, false).then(() => {
      setSendingText(false);
      textInput.current.value = '';
      textInput.current.focus();
    });
  };

  useEffect(() => {
    if (!show) return;
    showConversation(project, conversationId).then(({ data: givenConversation }) => {
      setConversation(givenConversation);
      setMessages(givenConversation.messages);
    });
  }, [show]);

  useEffect(() => {
    if (!socket) return;

    const onNewMessages = newMessages => {
      const [{ conversation_id }] = newMessages;
      const [lastMessage] = newMessages.reverse();

      if (`${conversation_id}` !== conversationRef.current?.id) return;

      if (lastMessage.from === from) setNewMessage(null);
      else setNewMessage(lastMessage.text);
      handleAddMessages(newMessages);
    };

    socket.on('new_messages', onNewMessages);
    return () => socket.off('new_messages', onNewMessages);
  }, [socket]);

  return (
    <div className={`conversationChat${show ? '' : ' hidden'}`}>
      <Notification
        show={!!newMessage}
        title={language.newMessage}
        message={newMessage}
        sound="/sounds/notification.mp3"
        onClose={() => setNewMessage(null)}
      />
      {!conversation && <Spinner />}
      {conversation && (
        <>
          <Back onClick={onExit} />
          <div className="messages">
            <MessageBubbles messages={messages} me={from} height="80%" />
          </div>
          <div className="footer">
            {!conversation.active && <div>{language.userDisconnected}</div>}
            <input
              className="input"
              type="text"
              placeholder={language.writeAMessage}
              ref={textInput}
              onKeyPress={handleKeyPress}
              disabled={sendingText || !conversation.active}
            />
          </div>
        </>
      )}
      <style jsx>
        {`
          .conversationChat {
            display: inline-block;
            height: fit-content;
            transition: 0.7s;
            width: 100%;
            height: 100%;
          }
          .hidden {
            opacity: 0;
            width: 0;
            flex: 0 0 auto;
          }
          .messages {
            height: 80%;
          }
          .footer {
            width: 100%;
            height: fit-content;
          }
          .input {
            width: 80%;
            margin-left: 10%;
            height: 50px;
            padding: 4px;
            outline: none;
            border-style: none;
            border-bottom-style: solid;
            border-width: 1px;
            transition: 0.7s;
            box-shadow: -7px -7px 10px #00000034;
            border-radius: 10px;
          }
          .input:focus {
            transform: scale(1.05);
            border-width: 2px;
            box-shadow: 15px 15px 15px #00000034;
          }
        `}
      </style>
    </div>
  );
};

ConversationChat.propTypes = {
  show: PropTypes.bool.isRequired,
  conversationId: PropTypes.string,
  onExit: PropTypes.func
};

ConversationChat.defaultProps = {
  conversationId: '',
  onExit: () => {}
};

export default ConversationChat;
