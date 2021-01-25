import { TextField } from '@material-ui/core';
import { useState } from 'react';

const Input = () => {
  const [text, setText] = useState('');

  return (
    <TextField
      label="Buscar"
      variant="outlined"
      size="small"
      onChange={({ target }) => setText(target.value)}
      style={{ position: 'absolute', bottom: 0, width: '100%' }}
    />
  );
};

export default Input;
