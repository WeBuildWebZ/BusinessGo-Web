import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createIntent, listIntents } from '../../../../../../../../../services/chatbot_api/intent';
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
  const [isNew, setIsNew] = useState(true);

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
  };

  useEffect(() => {
    if (editing) return;
    let mounted = true;
    listIntents(project.code, channel).then(({ data: givenIntents }) => {
      if (!mounted) return;
      setIntents(givenIntents);
    });
    return () => (mounted = false);
  }, [editing]);

  return (
    <div className="intentContainer">
      <div className={`intents${editing ? ' intentsHidden' : ''}`}>
        <h2>{language.title(channel)}</h2>
        <Button
          style={{ backgroundColor: 'lightskyblue' }}
          onClick={() => {
            setIsNew(true);
            setEditing(true);
          }}
        >
          {language.createIntent}
        </Button>
        {!intents && <Spinner />}
        {intents?.map(intent => (
          <CardRow title={intent.name} />
        ))}
      </div>
      <IntentEditor show={editing} onCancel={() => setEditing(false)} onChange={handleSaveIntent} />
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
