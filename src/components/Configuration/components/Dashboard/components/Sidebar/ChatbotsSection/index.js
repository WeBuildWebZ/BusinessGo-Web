import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../../../../../Spinner';
import Button from '../../../../../../Button';
import { setAdminSection } from '../../../../../../../shared/actions/adminSection';
import { setSelectedChatbotChannel } from '../../../../../../../shared/actions/selectedChatbotChannel';

import { getLanguage } from './lang';
import { CHANNELS } from './constants';

const ChatbotsSection = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const selectedChannel = useSelector(store => store.selectedChatbotChannel);
  const adminSection = useSelector(store => store.adminSection);

  const handleSelectChannel = channel => {
    dispatch(setAdminSection('chatbots'));
    dispatch(setSelectedChatbotChannel(channel));
  };

  if (!project) return <Spinner />;
  if (!project.chatbot.enabled) return <div>{language.chatbotsNotEnabled}</div>;

  return CHANNELS.map(channel => {
    const isSelected = channel === selectedChannel && adminSection === 'chatbots';

    return (
      <Button
        key={channel}
        text={`${channel[0].toUpperCase()}${channel.substr(1)}`}
        onClick={() => handleSelectChannel(channel)}
        style={{ marginTop: 10 }}
        selected={isSelected}
      />
    );
  });
};

export default ChatbotsSection;
