import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { listIntents } from '../../../../../../../../../services/chatbot_api/intent';
import CardRow from '../../../../../../../../CardRow';
import Spinner from '../../../../../../../../Spinner';

import NewIntent from './NewIntent';
import { getLanguage } from './lang';

const Intents = () => {
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const channel = useSelector(store => store.selectedChatbotChannel);
  const [intents, setIntents] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    let mounted = true;
    listIntents(project.code, channel).then(({ data: givenIntents }) => {
      if (!mounted) return;
      setIntents(givenIntents);
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="intentContainer">
      <div className={`intents${editing ? ' intentsHidden' : ''}`}>
        <h2>{language.title(channel)}</h2>
        <Button
          style={{ backgroundColor: 'lightskyblue' }}
          onClick={() => {
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
      <NewIntent show={editing} onCancel={() => setEditing(false)} />
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
