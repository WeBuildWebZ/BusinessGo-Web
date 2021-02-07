import PropTypes from 'prop-types';
import { createRef, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { showConversation } from '../../../../../../../../../../services/chatbot_api/conversation';
import { createWebMessage } from '../../../../../../../../../../services/chatbot_api/web_message';
import { socket } from '../../../../../../../../../../shared/sockets/chatbot';
import Spinner from '../../../../../../../../../Spinner';
import MessageBubbles from '../../../../../../../../../MessageBubbles';
import Input from '../../../../../../../../../Chatbot/Input';

const ConversationChat = ({ conversationId, show }) => {
  const project = useSelector(store => store.project);
  const user = useSelector(store => store.user);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const textInput = useRef();
  const [sendingText, setSendingText] = useState(false);
  const from = `${user.name} ${user.surname}`;
  const messagesRef = useRef();
  const conversationRef = useRef();
  messagesRef.current = messages;
  conversationRef.current = conversation;

  const handleAddMessages = newMessages => {
    setMessages([...messagesRef.current, ...newMessages]);
  };

  const handleKeyPress = ({ target, charCode }) => {
    const text = target.value.trim();
    if (charCode !== 13 || !text) return;
    const message = {
      conversation_id: conversation.id,
      from,
      type: 'text',
      text
    };
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

      // console.log('', conversation_id, '\n', conversation?.id);
      console.log('conversation', conversationRef.current?.id);
      if (conversation_id !== conversationRef.current?.id) return;

      handleAddMessages(newMessages);
    };

    socket.on('new_messages', onNewMessages);
    return () => socket.off('new_messages', onNewMessages);
  }, [socket]);

  return (
    <div className={`conversationChat${show ? '' : ' hidden'}`}>
      {!conversation && <Spinner />}
      {conversation && (
        <>
          <div className="messages">
            <MessageBubbles messages={messages} me={from} height="80%" />
          </div>
          <div className="footer">
            <input
              className="input"
              type="text"
              ref={textInput}
              onKeyPress={handleKeyPress}
              disabled={sendingText}
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
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

ConversationChat.propTypes = {
  show: PropTypes.bool.isRequired,
  conversationId: PropTypes.string
};

ConversationChat.defaultProps = {
  conversationId: ''
};

export default ConversationChat;
