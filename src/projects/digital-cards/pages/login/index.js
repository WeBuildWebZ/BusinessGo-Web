import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { createSession } from '../../../../services/api/session';

const LoginForm = () => {
  const project = useSelector(store => store.project);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // TODO continuar
    // createSession(project.code, email, password).then();
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="top">
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
          <button type="submit">Entrar</button>

          <Link href="/register">
            <a>Crear Una cuenta Nueva</a>
          </Link>
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

export default LoginForm;
