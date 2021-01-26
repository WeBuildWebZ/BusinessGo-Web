import { useEffect, useState } from 'react';
import { PopoverTitle } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { showForm } from '../../../../../../../../services/api/form';

import { getLanguage } from './lang';

const ChatbotEditor = () => {
  const [form, setForm] = useState(null);
  const language = getLanguage(useSelector(store => store.language));
  const channel = useSelector(store => store.selectedChatbotChannel);

  useEffect(() => {
    showForm('all', 'chatbot_configuration').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, []);

  return (
    <div className="chatbotEditor">
      <PopoverTitle>{language.chatbotConfig(channel)}</PopoverTitle>
      <style jsx>
        {`
          .chatbotEditor {
          }
        `}
      </style>
    </div>
  );
};

export default ChatbotEditor;
