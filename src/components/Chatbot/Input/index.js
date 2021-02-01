import { useEffect, useRef, useState } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { createWebMessage } from '../../../services/chatbot_api/web_message';

const Input = props => {
  const project = useSelector(store => store.project);
  const textInput = useRef();
  const [text, setText] = useState('');
  const [waiting, setWaiting] = useState(false);

  const handleKeyPress = ({ target, charCode }) => {
    if (charCode !== 13 || !target.value) return;

    setWaiting(true);
    props.onMessages([{ type: 'text', from: 'user', text: target.value }]);

    createWebMessage(project, target.value).then(({ data: givenMessages }) => {
      setWaiting(false);
      textInput.current.focus();
      setText('');
      props.onMessages(givenMessages.map(givenMessage => ({ ...givenMessage, from: 'bot' })));
    });
  };

  useEffect(() => {
    props.onInputRef(textInput);
  }, []);

  return (
    <TextField
      inputRef={textInput}
      autoFocus
      label={project.chatbot.configuration.web.placeholder}
      variant="outlined"
      onKeyPress={handleKeyPress}
      size="small"
      value={text}
      disabled={waiting}
      onChange={({ target }) => setText(target.value)}
      style={{ position: 'absolute', bottom: 0, width: '100%', overflowX: 'unset' }}
    />
  );
};

Input.propTypes = {
  onMessages: PropTypes.func,
  onInputRef: PropTypes.func
};

Input.defaultProps = {
  onMessages: () => {},
  onInputRef: () => {}
};

export default Input;
