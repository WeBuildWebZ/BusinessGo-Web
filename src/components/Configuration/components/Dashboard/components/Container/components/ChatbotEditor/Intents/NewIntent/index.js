import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import BackIcon from '@material-ui/icons/KeyboardBackspaceSharp';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { showForm } from '../../../../../../../../../../services/api/form';
import { listIntents } from '../../../../../../../../../../services/chatbot_api/intent';
import CardRow from '../../../../../../../../../CardRow';
import FieldRenderer from '../../../../../../../../../FieldRenderer';
import Spinner from '../../../../../../../../../Spinner';

import { getLanguage } from './lang';

const NewIntent = props => {
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const channel = useSelector(store => store.selectedChatbotChannel);
  const [intent, setIntent] = useState({});
  const [form, setForm] = useState(null);

  useEffect(() => {
    showForm('all', 'chatbot_intent').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, []);

  console.log('intent', intent);

  return (
    <div className={`newIntent${!props.show ? ' hiddenIntents' : ''}`}>
      <h2>{language.title(channel)}</h2>
      <Button onClick={props.onCancel}>
        <BackIcon style={{ cursor: 'pointer' }} />
        Volver
      </Button>
      {!form && <Spinner />}
      {form && <FieldRenderer fields={form.fields} data={intent} onChange={setIntent} saveButton />}
      <style jsx>
        {`
          .newIntent {
            display: inline-block;
            height: fit-content;
            transition: 0.7s;
            width: 100%;
          }
          .hiddenIntents {
            opacity: 0;
            width: 0;
            flex: 0 0 auto;
          }
        `}
      </style>
    </div>
  );
};

NewIntent.propTypes = {
  show: PropTypes.bool.isRequired,
  onCancel: PropTypes.func
};

NewIntent.defaultProps = {
  onCancel: () => {}
};

export default NewIntent;
