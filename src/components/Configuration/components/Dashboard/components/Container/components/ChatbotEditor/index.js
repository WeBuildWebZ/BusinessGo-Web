import { Button } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import { Modal, PopoverTitle } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { showForm } from '../../../../../../../../services/api/form';
import FieldRenderer from '../../../../../../../FieldRenderer';
import Spinner from '../../../../../../../Spinner';
import { updateChatbotConfiguration } from '../../../../../../../../services/api/project';
import { setProject } from '../../../../../../../../shared/actions/project';
import { pushAlert } from '../../../../../../../../shared/actions/alerts';

import Intents from './Intents';
import Conversations from './Conversations';
import { getLanguage } from './lang';

const ChatbotEditor = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const channel = useSelector(store => store.selectedChatbotChannel);
  const section = useSelector(store => store.selectedChatbotSection);
  const [configForm, setConfigForm] = useState(null);
  const [authForm, setAuthForm] = useState(null);
  const [configData, setConfigData] = useState({});
  const [authData, setAuthData] = useState({});
  const firstRender = useRef(true);
  const hasAuth = !['web'].includes(channel);

  const handleUpdateData = (newAuthData, newConfigData) => {
    const previousConfig = project.chatbot.configuration;
    const previousChannelConfig = project.chatbot.configuration[channel] || {};
    const previousAuthConfig = project.chatbot.configuration[channel]?.authentication || {};

    updateChatbotConfiguration(project, {
      ...previousConfig,
      [channel]: {
        ...previousChannelConfig,
        ...newConfigData,
        authentication: { ...previousAuthConfig, ...newAuthData }
      }
    }).then(({ data: givenChatbotConfig }) => {
      dispatch(
        setProject({
          ...project,
          chatbot: {
            ...project.chatbot,
            configuration: { ...project.chatbot.configuration, ...givenChatbotConfig }
          }
        })
      );
      dispatch(
        pushAlert({
          title: language.configUpdated.title,
          icon: 'success',
          message: language.configUpdated.message(channel)
        })
      );
    });
  };

  useEffect(() => {
    if (!channel) return;
    setConfigForm(null);
    setAuthForm(null);
    setConfigData(project.chatbot.configuration[channel] || {});
    showForm('all', `chatbot_${channel}_configuration`).then(({ data: givenForm }) => {
      setConfigForm(givenForm);
    });

    if (!hasAuth) return;

    setAuthData(project.chatbot.configuration[channel]?.authentication || {});
    showForm('all', `chatbot_${channel}_authentication`).then(({ data: givenForm }) => {
      setAuthForm(givenForm);
    });
  }, [channel]);

  return (
    <div className="chatbotEditor">
      {section === 'conversations' && (
        <>
          <h2 className="sectionTitle">{language.conversations}</h2>
          <Conversations />
        </>
      )}
      {section !== 'conversations' && <PopoverTitle>{language.chatbotConfig(channel)}</PopoverTitle>}
      {section === 'intents' && <Intents />}
      {!section && (
        <>
          {hasAuth && (
            <>
              {!authForm && <Spinner />}
              {!!authForm?.fields?.length && (
                <>
                  <h2 className="title">{language.authConfig}</h2>
                  <FieldRenderer
                    key={1}
                    data={authData}
                    fields={authForm.fields}
                    onChange={newAuthData => handleUpdateData(newAuthData, configData)}
                    saveButton
                  />
                </>
              )}
            </>
          )}
          {!configForm && <Spinner />}
          {!!configForm?.fields?.length && (
            <>
              <h2 className="title">{language.basicConfig}</h2>
              <FieldRenderer
                key={2}
                data={configData}
                fields={configForm.fields}
                onChange={newConfigData => handleUpdateData(authData, newConfigData)}
                saveButton
              />
            </>
          )}
        </>
      )}
      <style jsx>
        {`
          .chatbotEditor {
            height: 100%;
          }
          .sectionTitle {
            padding: 7px;
          }
          .title {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default ChatbotEditor;
