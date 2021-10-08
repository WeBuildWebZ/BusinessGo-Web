import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createSession } from '../../../../services/api/session';
import { setUser } from '../../../../shared/actions/user';
import { setToken } from '../../../../shared/actions/token';
import useHandleError from '../../../../shared/hooks/useHandleError';
import usePushAlert from '../../../../shared/hooks/usePushAlert';

import Inputs from './Inputs';
import Loading from './Loading';
import SubmitButton from './SubmitButton';
import { getLanguage } from './lang';

const Login = () => {
  const pushAlert = usePushAlert();
  const handleError = useHandleError();
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (loading || !email || !password) return;
    setLoading(true);
    createSession('all', email, password)
      .then(({ data: sessions }) => {
        setLoading(false);
        const [{ user: newUser, token }] = sessions;
        dispatch(setUser(newUser));
        dispatch(setToken(token));
        pushAlert({
          type: 'info',
          title: language.loginOk.title,
          message: language.loginOk.message
        });
        setTimeout(() => {
          window.location.href = '/';
        }, 500);
      })
      .catch(error => {
        setLoading(false);
        handleError(error);
      });
  };

  return (
    <div className="login">
      <h1 className="title">WeBuildWebz - Dashboard</h1>
      <Inputs
        onChangeEmail={({ target }) => setEmail(target.value)}
        onChangePassword={({ target }) => setPassword(target.value)}
        onSubmit={handleLogin}
      />
      <SubmitButton disabled={loading} onClick={handleLogin} />
      <Loading show={loading} />
      <style jsx>
        {`
          * {
            color: white;
          }
          .login {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            height: 100vh;
            background-color: #1e191b;
            position: absolute;
            left: 0;
            top: 0;
            background-image: url(/images/login.png);
            background-size: cover;
            background-position-y: 0;
            background-position-x: 0;
            background-repeat: repeat-x;
            animation: backgroundAppear 1.5s ease, backgroundMovement 20s linear infinite;
          }
          .title {
            width: fit-content;
            margin-top: 100px;
            padding: 14px;
            text-align: center;
            border-style: solid;
            border-width: 5px;
            border-radius: 15px;
            user-select: none;
            margin-bottom: 90px;
            animation: titleAppear 1.5s ease;
          }
          @keyframes backgroundAppear {
            0% {
              background-position-y: 150px;
            }
          }
          @keyframes backgroundMovement {
            0% {
              background-position-x: 100vw;
            }
            50% {
              background-position-y: 150px;
            }
          }
          @keyframes titleAppear {
            0% {
              margin-top: -200px;
            }
          }
          @media only screen and (max-width: 768px) {
            .title {
              font-size: 20px;
            }
            .button {
              width: 80%;
              height: 40px;
              font-size: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
