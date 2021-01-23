import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import InputGroup from '../../../../../../../../InputGroup';

import { getLanguage } from './lang';

const Notifications = props => {
  const language = getLanguage(useSelector(store => store.language));
  const form = useSelector(store => store.selectedForm);
  const [notificationsEnabled, setNotificationsEnabled] = useState(form.notifications.enabled);
  const [emails, setEmails] = useState(form.notifications.emails);

  const handleChangeEmail = (index, changedEmail) => {
    const newEmails = emails.map((email, i) => (i === index ? changedEmail : email));
    const notEmptyEmails = newEmails.filter(email => email);

    setEmails(newEmails);
    props.onChange({ enabled: notificationsEnabled, emails: notEmptyEmails });
  };

  const handleAddEmail = () => {
    const newEmails = [...emails, ''];

    setEmails(newEmails);
  };

  const handleRemoveEmail = index => {
    const newEmails = emails.filter((_, i) => i !== index);
    const notEmptyEmails = newEmails.filter(email => email);

    setEmails(newEmails);
    props.onChange({ enabled: notificationsEnabled, emails: notEmptyEmails });
  };

  const handleSetNotificationsEnabled = ({ target }) => {
    const notEmptyEmails = emails.filter(email => email);

    setNotificationsEnabled(target.checked);
    props.onChange({ enabled: target.checked, emails: notEmptyEmails });
  };

  return (
    <>
      <FormControlLabel
        control={<Checkbox />}
        label={language.notifications_enabled}
        checked={notificationsEnabled}
        onChange={handleSetNotificationsEnabled}
      />
      <InputGroup>
        {emails.map((email, i) => (
          <div key={i}>
            <TextField
              label={`Email ${i + 1}`}
              variant="outlined"
              size="small"
              disabled={!notificationsEnabled}
              onChange={({ target }) => handleChangeEmail(i, target.value)}
              value={email}
              style={{ marginBottom: 10, width: '80%' }}
            />
            {notificationsEnabled && (
              <CloseIcon
                style={{ display: 'inline-block', float: 'right', cursor: 'pointer' }}
                onClick={() => handleRemoveEmail(i)}
              />
            )}
          </div>
        ))}
        <Button disabled={!notificationsEnabled || emails.length >= 5} onClick={handleAddEmail}>
          {language.addEmail}
        </Button>
      </InputGroup>
    </>
  );
};

Notifications.propTypes = {
  onChange: PropTypes.func
};

Notifications.defaultProps = {
  onChange: () => {}
};

export default Notifications;
