import { Button } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  createIntent,
  deleteIntent,
  listIntents,
  updateIntent
} from '../../../../../../../../../services/chatbot_api/intent';
import CardRow from '../../../../../../../../CardRow';
import Spinner from '../../../../../../../../Spinner';
import { pushAlert } from '../../../../../../../../../shared/actions/alerts';

import IntentEditor from './IntentEditor';
import { getLanguage } from './lang';

const Intents = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const channel = useSelector(store => store.selectedChatbotChannel);
  const [intents, setIntents] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentIntent, setCurrentIntent] = useState({});
  const [isNew, setIsNew] = useState(true);
  const [mounted, setMounted] = useState(true);
  const mountedRef = useRef();
  mountedRef.current = mounted;

  const handleSaveIntent = intent => {
    if (isNew)
      createIntent(project.code, channel, intent).then(({ data: newIntent }) => {
        setEditing(false);
        dispatch(
          pushAlert({
            title: language.intentCreated.title,
            icon: 'success',
            message: language.intentCreated.message(newIntent)
          })
        );
      });
    else
      updateIntent(project.code, channel, intent).then(({ data: updatedIntent }) => {
        setEditing(false);
        dispatch(
          pushAlert({
            title: language.intentCreated.title,
            icon: 'success',
            message: language.intentUpdated.message(updatedIntent)
          })
        );
      });
  };

  const handleCreateIntent = () => {
    setIsNew(true);
    setEditing(true);
    setCurrentIntent({});
  };

  const handleEditIntent = intent => {
    setIsNew(false);
    setEditing(true);
    setCurrentIntent(intent);
  };

  const handleDeleteIntent = deletedIntent => {
    setMounted(true);
    deleteIntent(deletedIntent).then(() => {
      if (!mountedRef.current) return;
      const newIntents = intents.filter(intent => intent._id !== deletedIntent._id);
      setIntents(newIntents);
    });
  };

  useEffect(() => {
    setMounted(true);
    if (editing) return;
    listIntents(project.code, channel).then(({ data: givenIntents }) => {
      if (!mountedRef.current) return;
      setIntents(givenIntents);
    });
    return () => {
      setMounted(false);
    };
  }, [editing]);

  return (
    <div className="intentContainer">
      <div className={`intents${editing ? ' intentsHidden' : ''}`}>
        <h2>{language.title(channel)}</h2>
        <Button style={{ backgroundColor: 'lightskyblue' }} onClick={handleCreateIntent}>
          {language.createIntent}
        </Button>
        {!intents && <Spinner />}
        {intents?.map((intent, i) => (
          <CardRow
            key={i}
            title={intent.name}
            buttonText={language.editIntent}
            deleteButtonText={language.deleteIntent}
            onButtonClick={() => handleEditIntent(intent)}
            onDeleteButtonClick={() => handleDeleteIntent(intent)}
          />
        ))}
      </div>
      <IntentEditor
        show={editing}
        onCancel={() => setEditing(false)}
        onChange={handleSaveIntent}
        intent={currentIntent}
        isNew={isNew}
      />
      <style jsx>
        {`
          .intentContainer {
            display: flex;
            flex-direction: row;
          }
          .intents {
            flex-grow: 100;
            width: 100%;
            display: inline-block;
            transition: 0.7s;
          }
          .intentsHidden {
            flex: 0 0 auto;
            width: 0;
            opacity: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Intents;
