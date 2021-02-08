import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { initChatbotSocket } from '../../../../../../../../../shared/sockets/chatbot';

import ConversationList from './ConversationList';
import ConversationChat from './ConversationChat';

const Conversations = () => {
  const project = useSelector(store => store.project);
  const user = useSelector(store => store.user);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [mounted, setMounted] = useState(true);
  const officer = { name: `${user.name} ${user.surname}`, _id: user._id };
  const mountedRef = useRef();
  mountedRef.current = mounted;

  const handleSelectConversation = conversation => {
    initChatbotSocket(project.code, conversation.id, officer).then(() => {
      if (!mountedRef.current) return;
      setSelectedConversation(conversation);
    });
  };

  useEffect(() => () => setMounted(false), []);

  return (
    <div className="conversationListContainer">
      <div className="conversationFlex">
        <ConversationList show={!selectedConversation} onSelectConversation={handleSelectConversation} />
        <ConversationChat show={!!selectedConversation} conversationId={selectedConversation?._id} />
      </div>
      <style jsx>
        {`
          .conversationListContainer {
            flex-grow: 100;
            width: 100%;
            height: 100%;
            display: inline-block;
            transition: 0.7s;
          }
          .conversationFlex {
            display: flex;
            height: 100%;
            flex-direction: row;
          }
        `}
      </style>
    </div>
  );
};

export default Conversations;
