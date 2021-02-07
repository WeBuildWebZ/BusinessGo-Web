import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { listConversations } from '../../../../../../../../../services/chatbot_api/conversation';
import Spinner from '../../../../../../../../Spinner';

import { getLanguage } from './lang';

const Conversations = () => {
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const project = useSelector(store => store.project);
  const [conversations, setConversations] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    listConversations(project, pageNumber).then(({ data: givenConversations }) => {
      setConversations(givenConversations);
    });
  }, [pageNumber]);

  return (
    <div className="conversationList">
      {!conversations && <Spinner />}
      {conversations?.map(conversation => (
        <div className="conversation">
          <div className="cardItem">{`${language.channel}: ${conversation.channel}`}</div>
          {conversation.active && <div className="cardItem activeInactive active">{language.active}</div>}
          {!conversation.active && (
            <div className="cardItem activeInactive inactive">{language.inactive}</div>
          )}
          <div className="cardItem">{language.messageCount(conversation)}</div>
          <div className="cardItem date">
            {Intl.DateTimeFormat(languageCode, { dateStyle: 'full', timeStyle: 'long' }).format(
              new Date(conversation.createdAt)
            )}
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .conversationList {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .conversation {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin: 7px 0 7px 0;
            padding: 5px;
            width: 200px;
            height: 220px;
            color: #ebebeb;
            background-image: url('/images/tiled_black.png');
            background-repeat: repeat;
            background-size: 50px;
            border-radius: 5px;
            user-select: none;
            transition: 0.5s;
            cursor: pointer;
          }
          .conversation:hover {
            box-shadow: 0 0 2px 2px black;
            text-shadow: 0 0 2px;
          }
          .cardItem {
            flex-grow: 1;
          }
          .activeInactive {
            font-size: 20px;
          }
          .active {
            color: greenyellow;
          }
          .inactive {
            color: blue;
          }
          .date {
            font-size: 11px;
          }
        `}
      </style>
    </div>
  );
};

export default Conversations;
