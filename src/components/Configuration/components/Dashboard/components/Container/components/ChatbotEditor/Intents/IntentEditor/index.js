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

const IntentEditor = props => {
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const channel = useSelector(store => store.selectedChatbotChannel);
  const [form, setForm] = useState(null);

  useEffect(() => {
    showForm('all', 'chatbot_intent').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, []);

  return (
    <div className={`newIntent${!props.show ? ' hiddenIntents' : ''}`}>
      <h2>{props.isNew ? language.createIntent(channel) : language.editIntent(channel)}</h2>
      <Button onClick={props.onCancel}>
        <BackIcon style={{ cursor: 'pointer' }} />
        Volver
      </Button>
      {!form && <Spinner />}
      {form && props.show && (
        <FieldRenderer fields={form.fields} data={props.intent} onChange={props.onChange} saveButton />
      )}
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

IntentEditor.propTypes = {
  show: PropTypes.bool.isRequired,
  intent: PropTypes.object,
  isNew: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
  onChange: PropTypes.func
};

IntentEditor.defaultProps = {
  intent: {},
  onCancel: () => {},
  onChange: () => {}
};

export default IntentEditor;
