import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { showForm } from '../../services/api/form';

import Header from './Header';
import Input from './Input';
import Avatar from './Avatar';
import { shouldRender } from './utils';
import Messages from './Messages';

const Chatbot = () => {
  const project = useSelector(store => store.project);
  const [isOpen, setIsOpen] = useState(false);
  const render = shouldRender(project);
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState(null);
  const messagesRef = useRef();
  messagesRef.current = messages;

  const handleAddMessages = newMessages => {
    setMessages([...messagesRef.current, ...newMessages]);
  };

  const handleFocusInput = () => {
    textInput.current.focus();
  };

  useEffect(() => {
    if (!project?.chatbot?.configuration) return;
    setMessages([
      ...messages,
      { from: 'bot', type: 'text', text: project.chatbot.configuration.web.greeting }
    ]);
  }, [project]);

  if (!render) return <div />;
  return (
    <div onKeyPress={handleFocusInput} tabIndex={0}>
      <Avatar show={!isOpen} onClick={() => setIsOpen(true)} />
      <div className="chatbot">
        <Header onClose={() => setIsOpen(false)} />
        <Messages messages={messages} />
        <Input onMessages={handleAddMessages} onInputRef={setTextInput} />
      </div>
      <style jsx>
        {`
          .chatbot {
            position: fixed;
            transform: translate(-100%, -100%);
            left: calc(100% - 50px);
            top: calc(100% - 23px);
            width: 320px;
            height: 448px;
            ${isOpen
              ? ''
              : `
                opacity: 0;
                width: 0;
                height: 0;
            `}
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 7px 30px 1px rgb(190, 179, 179);
            z-index: 999;
            transition: 0.7s;
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
