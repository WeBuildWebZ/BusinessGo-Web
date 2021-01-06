import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, ModalTitle } from 'react-bootstrap';

import { createSession } from '../../../../../../services/session';
import { setUser } from '../../../../../../actions/user';

import { getLanguage } from './lang';
import useStyle from './style';

const Menu = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const language = getLanguage(useSelector(store => store.language));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    if (user) return;
    createSession(email, password)
      .then(response => {
        dispatch(setUser(response.data));
      })
      .catch(() => {});
  };

  return (
    <>
      <ModalTitle className={classes.title}>{language.title}</ModalTitle>
      <Form className={classes.form} onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label>{language.username}</Form.Label>
          <Form.Control
            type="text"
            required
            maxLength={200}
            placeholder={language.username}
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

        <Button variant="primary" type="submit" className={classes.submit}>
          {language.submit}
        </Button>
      </Form>
    </>
  );
};

export default Menu;