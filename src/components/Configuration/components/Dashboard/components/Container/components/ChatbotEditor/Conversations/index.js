import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { listConversations } from '../../../../../../../../../services/chatbot_api/conversation';
import Spinner from '../../../../../../../../Spinner';

const Conversations = () => {
  const project = useSelector(store => store.project);
  const [conversations, setConversations] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    listConversations(project, pageNumber).then(({ data: givenConversations }) => {
      setConversations(givenConversations);
    });
  }, [pageNumber]);

  return (
    <div>
      {!conversations && <Spinner />}
      {conversations?.map(conversation => (
        <div>{conversation.channel}</div>
      ))}
    </div>
  );
};

export default Conversations;
