import React from 'react';
import { Paper } from '@material-ui/core';

import Form from './components/form';

const Login = () => (
  <center>
    <Paper
      style={{
        marginTop: 50,
        width: '30%'
      }}
    >
      <Form />
    </Paper>
  </center>
);

export default Login;
