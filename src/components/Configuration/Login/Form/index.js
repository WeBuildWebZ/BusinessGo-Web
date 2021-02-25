import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createSession } from '../../../../services/api/session';
import { setUser } from '../../../../shared/actions/user';
import Spinner from '../../../Spinner';
import { pushAlert } from '../../../../shared/actions/alerts';

import { getLanguage } from './lang';

const Menu = () => {
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
    createSession('all', email, password)
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
      <h2>{language.title}</h2>
      <form onSubmit={handleLogin}>
        <div className="label">{language.username}</div>
        <input
          className="field"
          type="text"
          required
          maxLength={200}
          placeholder={language.username}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />

        <div className="label">{language.password}</div>
        <input
          className="field"
          type="password"
          required
          maxLength={200}
          placeholder={language.password}
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        {loading && <Spinner style={{ position: 'absolute' }} />}

        <button className="submit" type="submit" aria-label="submit">
          {language.submit}
        </button>
      </form>
      <style jsx>
        {`
          .submit {
            background-color: #030303;
            border: none;
            color: white;
            margin-top: 10px;
            padding: 7.5px 16px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            user-select: none;
            outline: none;
            transition: 0.2s;
            cursor: pointer;
          }
          .submit:hover {
            box-shadow: 0 0 2px 2px black;
            border-radius: 5px;
          }
          .submit:active {
            transform: scale(1.05);
            box-shadow: 0 0 2px 2px black;
            border-radius: 5px;
          }
          .field {
            width: 100%;
            height: 30px;
            padding: 7px;
            outline: none;
            border-style: none;
            border-radius: 5px;
            background: white;
            transition: 0.7s;
          }
          .field:focus {
            transform: scale(1.05);
            box-shadow: 0 0 2px 2px white;
          }
          .label {
            margin: 7px 0 7px 0;
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default Menu;
