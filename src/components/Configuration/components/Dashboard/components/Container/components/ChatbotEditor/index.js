import { Button } from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import { Modal, PopoverTitle } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { showForm } from '../../../../../../../../services/api/form';
import FieldRenderer from '../../../../../../../FieldRenderer';
import Spinner from '../../../../../../../Spinner';
import { updateChatbotConfiguration } from '../../../../../../../../services/api/project';
import { setProject } from '../../../../../../../../shared/actions/project';

import { getLanguage } from './lang';

const ChatbotEditor = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const channel = useSelector(store => store.selectedChatbotChannel);
  const [configForm, setConfigForm] = useState(null);
  const [authForm, setAuthForm] = useState(null);
  const [configData, setConfigData] = useState({});
  const [authData, setAuthData] = useState({});
  const firstRender = useRef(true);
  const hasAuth = !['web'].includes(channel);

  useEffect(() => {
    const previousConfig = project.chatbot.configuration;
    const previousChannelConfig = project.chatbot.configuration[channel] || {};
    const previousAuthConfig = project.chatbot.configuration[channel]?.authentication || {};

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    updateChatbotConfiguration(project, {
      ...previousConfig,
      [channel]: {
        ...previousChannelConfig,
        ...configData,
        authentication: { ...previousAuthConfig, ...authData }
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
    });
  }, [authData, configData]);

  useEffect(() => {
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
      <PopoverTitle>{language.chatbotConfig(channel)}</PopoverTitle>
      {hasAuth && (
        <>
          <h2 className="title">{language.authConfig}</h2>
          {!authForm && <Spinner />}
          {authForm && (
            <FieldRenderer
              key={1}
              data={authData}
              fields={authForm.fields}
              onChange={setAuthData}
              saveButton
            />
          )}
        </>
      )}
      <h2 className="title">{language.basicConfig}</h2>
      {!configForm && <Spinner />}
      {configForm && (
        <FieldRenderer
          key={2}
          data={configData}
          fields={configForm.fields}
          onChange={setConfigData}
          saveButton
        />
      )}
      <style jsx>
        {`
          .chatbotEditor {
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
