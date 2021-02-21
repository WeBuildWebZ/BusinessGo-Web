import { v4 as uuid } from 'uuid';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MessageBubbles from '../MessageBubbles';
import { conversation_id } from './constants';
import { createWebMessage } from '../../services/chatbot_api/web_message';
import { setProject } from '../../store/actions/project';
import { showProject } from '../../services/api/project';
import { getQueryParam } from '../../utils/query';

import Header from './Header';
import Input from './Input';
import Avatar from './Avatar';
import FAQ from './FAQ';
import FAQButton from './FAQButton';
import { shouldRender } from './utils';
import * as constants from './constants';

const classes = {
  chatbot: `chatbot-${uuid()}`
};

const Chatbot = () => {
  const dispatch = useDispatch();
  const project = useSelector(store => store.project);
  const [isOpen, setIsOpen] = useState(false);
  const render = shouldRender(project);
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [showFaq, setShowFaq] = useState(true);
  const messagesRef = useRef();
  messagesRef.current = messages;

  const handleAddMessages = newMessages => {
    setMessages([...messagesRef.current, ...newMessages]);
  };

  const handleFocusInput = () => {
    textInput.current.focus();
  };

  const handleInput = text => {
    if (waiting) return;
    const message = {
      conversation_id,
      channel: 'web',
      from: 'user',
      type: 'text',
      text
    };

    setWaiting(true);
    textInput.current.value = text;
    createWebMessage(project, message, true).then(() => {
      setWaiting(false);
      textInput.current.focus();
      textInput.current.value = '';
    });
  };

  useEffect(() => {
    if (!project?.chatbot?.configuration) return;
    setMessages([{ from: 'bot', type: 'text', text: project.chatbot.configuration.web.greeting }]);
  }, [project]);

  useEffect(() => {
    showProject(window.__WEBUILDWEBZ_DATA.projectToken, true).then(givenProject => {
      dispatch(setProject(givenProject));
    });
  }, [setProject]);

  if (!render) return <div />;

  return (
    <div onKeyPress={handleFocusInput} tabIndex={0}>
      <Avatar show={!isOpen} onClick={() => setIsOpen(true)} />
      <FAQ show={isOpen && showFaq} onQuestion={handleInput} onClose={() => setShowFaq(false)} />
      <FAQButton
        text={project.chatbot.configuration.web.faq_title}
        show={isOpen && !showFaq}
        onClick={() => setShowFaq(true)}
      />
      <div className={classes.chatbot}>
        <Header title={project.chatbot.configuration.web.title} onClose={() => setIsOpen(false)} />
        <MessageBubbles
          messages={messages}
          me="user"
          height={`calc(100% - ${project.chatbot.configuration.web.header_size || 50}px - 44px)`}
        />
        <Input
          onMessages={handleAddMessages}
          onInputRef={setTextInput}
          onInput={handleInput}
          waiting={waiting}
        />
      </div>
      <style jsx>
        {`
          .${classes.chatbot} {
            position: fixed;
            transform: translate(-100%, -100%);
            left: calc(100% - 50px);
            top: calc(100% - 23px);
            width: ${constants.WIDTH}px;
            height: ${constants.HEIGHT}px;
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
          @media only screen and (max-width: 768px) {
            .${classes.chatbot} {
              transform: translate(0, -100%);
              width: 96%;
              left: 2%;
              top: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;
