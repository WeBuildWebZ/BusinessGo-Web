import React from 'react';
import { Paper } from '@material-ui/core';

import Form from './Form';

const Login = () => (
  <center className="loginContainer">
    <div className="paper">
      <Form className="form" />
    </div>
    <style jsx>
      {`
        .loginContainer {
          transition: 1s;
          animation: initialAnimation 1s linear;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100vw;
          height: 100vh;
        }
        .paper {
          width: 18em;
          height: 20em;
          display: flex;
          background-color: #eaeaea;
          justify-content: center;
          align-items: flextart;
          flex-flow: column;
          padding: 1em;
          border-radius: 1em;
          transition: 0.7s;
          box-shadow: -15px -15px 15px #eaeaea34, 0 0 1px 1px #ffffff;
        }
        .paper:hover {
          box-shadow: 15px 15px 15px #eaeaea34, 0 0 2px 2px #ffffff;
        }

        @keyframes initialAnimation {
          0% {
            width: 0;
            margin-top: 100%;
          }
          100% {
            width: 100%;
            margin-top: 0;
          }
        }
      `}
    </style>
  </center>
);

export default Login;
