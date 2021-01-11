import React from 'react';
import { Paper } from '@material-ui/core';

import Form from './components/form';

const Login = () => (
  <center className="loginContainer">
    <Paper
      style={{
        marginTop: 50,
        width: '30%'
      }}
    >
      <Form />
    </Paper>
    <style jsx>
      {`
        .loginContainer {
          transition: 1s;
          animation: initialAnimation 1s linear;
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
