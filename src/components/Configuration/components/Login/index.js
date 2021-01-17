import React from 'react';
import { Paper } from '@material-ui/core';

import Form from './components/form';

const Login = () => (
  <center className="loginContainer">
    <Paper
      style={{
        width: '18em',
        height:'20em',
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        flexFlow:'column',
        padding:'1em',
        borderRadius:'1em'
      }}
    >
      <Form className="form"/>
    </Paper>
    <style jsx>
      {`

        .loginContainer {
          transition: 1s;
          animation: initialAnimation 1s linear;
          display:flex;
          justify-content:center;
          align-items:center;
          width:100vw;
          height:100vh;
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
