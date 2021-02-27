import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { createUserWithEmail } from '../../../../services/api/user';
import useHandleError from '../../../../shared/hooks/useHandleError';
import SuccessModal from '../../components/SuccessModal';

const redirectTo = process.browser && `${window.location.origin}/precio`;

const RegisterForm = () => {
  const project = useSelector(store => store.project);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const data = { name };
  const handleError = useHandleError();

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmail(project, redirectTo, email, password, data)
      .then(() => {
        setSuccess(true);
      })
      .catch(handleError)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <SuccessModal open={success} data={data} email={email} />
      <form onSubmit={handleSubmit}>
        <div className="top">
          <input
            type="text"
            placeholder="Nombre"
            className="row"
            autoComplete="off"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="row"
            autoComplete="off"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="row"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button type="submit" disabled={loading}>
            Registrarse
          </button>
        </div>
      </form>
      <style jsx>
        {`
          .login {
            flex: 1;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1em;
            background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
          }

          // ==============================================================================

          form {
            width: 250px;
            height: 300px;
            display: flex;
            align-items: center;
            flex-flow: column;
            border-radius: 1em;
            padding: 0 1em;
            background: white;
          }

          //===============================================================================

          .top {
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
          }

          .row {
            width: 100%;
            margin: 0.2em;
            padding: 0.5em;
            border-radius: 5px;
            border: none;
            outline: none;
          }

          button {
            width: 100%;
            background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);
            color: white;
            border: none;
            outline: none;
            margin-top: 0.2em;
            padding: 0.5em;
            border-radius: 5px;
          }
          button:disabled {
            opacity: 0.5;
          }

          a {
            width: 100%;
            text-align: center;
            font-size: 0.8em;
            text-decoration: none;
            margin-top: 1em;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default RegisterForm;
