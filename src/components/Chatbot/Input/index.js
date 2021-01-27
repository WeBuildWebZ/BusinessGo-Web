import { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';

const Input = () => {
  const project = useSelector(store => store.project);
  const [text, setText] = useState('');

  return (
    <TextField
      label={project.chatbot.configuration.web.placeholder}
      variant="outlined"
      size="small"
      onChange={({ target }) => setText(target.value)}
      style={{ position: 'absolute', bottom: 0, width: '100%' }}
    />
  );
};

export default Input;
