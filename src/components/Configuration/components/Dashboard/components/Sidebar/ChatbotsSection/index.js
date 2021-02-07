import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../../../../../Spinner';
import Button from '../../../../../../Button';
import { setAdminSection } from '../../../../../../../shared/actions/adminSection';
import { setSelectedChatbotChannel } from '../../../../../../../shared/actions/selectedChatbotChannel';
import { setSelectedChatbotSection } from '../../../../../../../shared/actions/selectedChatbotSection';

import { getLanguage } from './lang';
import { CHANNELS } from './constants';

const ChatbotsSection = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const selectedChannel = useSelector(store => store.selectedChatbotChannel);
  const selectedSection = useSelector(store => store.selectedChatbotSection);
  const adminSection = useSelector(store => store.adminSection);
  const isChatbotSection = adminSection === 'chatbots';

  const handleSelectChannel = channel => {
    dispatch(setAdminSection('chatbots'));
    dispatch(setSelectedChatbotChannel(channel));
    dispatch(setSelectedChatbotSection(null));
  };

  const handleSelectSection = section => {
    dispatch(setSelectedChatbotSection(section));
  };

  const handleSelectConversations = () => {
    dispatch(setAdminSection('chatbots'));
    dispatch(setSelectedChatbotSection('conversations'));
    dispatch(setSelectedChatbotChannel(null));
  };

  if (!project) return <Spinner />;
  if (!project.chatbot.enabled_channels.includes('web')) return <div>{language.chatbotsNotEnabled}</div>;

  return (
    <div>
      <Button
        key="conversations"
        text={language.conversations}
        onClick={handleSelectConversations}
        style={{ marginTop: 10 }}
        selected={selectedSection === 'conversations' && isChatbotSection}
      />
      {CHANNELS.map(channel => {
        const isSelected = channel === selectedChannel && isChatbotSection;

        return (
          <div key={channel} className="chatbotButtons">
            <Button
              key="channel"
              text={`${channel[0].toUpperCase()}${channel.substr(1)}`}
              onClick={() => handleSelectChannel(channel)}
              style={{ marginTop: 10 }}
              selected={isSelected && !selectedSection}
            />
            {isSelected && (
              <Button
                key="intents"
                text={language.intents}
                onClick={() => handleSelectSection('intents')}
                style={{ marginTop: 5, width: '70%', marginLeft: '15%' }}
                selected={selectedSection === 'intents'}
              />
            )}
            <style jsx>
              {`
                .chatbotButtons {
                  width: 100%;
                }
              `}
            </style>
          </div>
        );
      })}
    </div>
  );
};

export default ChatbotsSection;
