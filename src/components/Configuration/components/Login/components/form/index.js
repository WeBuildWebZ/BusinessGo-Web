import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, ModalTitle } from 'react-bootstrap';

import { createSession } from '../../../../../../services/api/session';
import { setUser } from '../../../../../../shared/actions/user';
import Spinner from '../../../../../Spinner';
import { pushAlert } from '../../../../../../shared/actions/alerts';

import { getLanguage } from './lang';
import useStyle from './style';

const Menu = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const language = getLanguage(useSelector(store => store.language));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    if (user) return;
    setLoading(true);
    createSession(email, password)
      .then(({ data: sessions }) => {
        setLoading(false);
        const [{ user: newUser }] = sessions;
        dispatch(setUser(newUser));
      })
      .catch(error => {
        const errorCode = error.response ? error.response.data.error.code : 'connection_error';
        setLoading(false);

        dispatch(
          pushAlert({
            icon: 'error',
            title: language.errors[errorCode].title,
            message: language.errors[errorCode].message
          })
        );
      });
  };

  return (
    <>
      <ModalTitle className={classes.title}>{language.title}</ModalTitle>
      <Form className={classes.form} onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label className="form-label text-left">{language.username}</Form.Label>
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

        {loading && <Spinner style={{ position: 'absolute' }} />}
        <Button variant="primary" type="submit" className={classes.submit} disabled={loading}>
          {language.submit}
        </Button>
      </Form>
    </>
  );
};

export default Menu;
