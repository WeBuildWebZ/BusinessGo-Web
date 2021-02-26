import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Button, ModalTitle } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { createSession } from '../../../services/api/session';

import { getLanguage } from './lang';
import useStyle from './style';

const Menu = React.forwardRef(({ style, className, 'aria-labelledby': labeledBy }, ref) => {
  const classes = useStyle();
  const language = getLanguage(useSelector(store => store.language));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    createSession('all', email, password)
      .then(() => {
        window.location.href = process.env.DASHBOARD_URL;
      })
      .catch(() => {});
  };

  return (
    <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
      <ModalTitle className={classes.title}>{language.title}</ModalTitle>
      <Form className={classes.form} onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label>{language.email}</Form.Label>
          <Form.Control
            type="email"
            required
            maxLength={200}
            placeholder={language.email}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Form.Text className="text-muted">{language.emailMessage}</Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>{language.password}</Form.Label>
          <Form.Control
            type="password"
            required
            maxLength={200}
            placeholder={language.password}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {language.submit}
        </Button>
      </Form>
    </div>
  );
});

Menu.propTypes = {
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  'aria-labelledby': PropTypes.string.isRequired
};

Menu.defaultProps = {
  style: {},
  className: ''
};

export default Menu;
