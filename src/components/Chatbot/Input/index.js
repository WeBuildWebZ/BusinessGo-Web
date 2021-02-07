import { useEffect, useRef, useState } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { conversation_id } from '../../../constants';
import { createWebMessage } from '../../../services/chatbot_api/web_message';
import { socket } from '../../../shared/sockets/chatbot';

const Input = props => {
  const project = useSelector(store => store.project);
  const textInput = useRef();
  const [text, setText] = useState('');
  const [waiting, setWaiting] = useState(false);

  const handleKeyPress = ({ target, charCode }) => {
    const value = target.value.trim();
    if (charCode !== 13 || !value) return;
    const message = {
      conversation_id,
      from: 'user',
      type: 'text',
      text: value
    };

    setWaiting(true);
    createWebMessage(project, message, true).then(() => {
      setWaiting(false);
      textInput.current.focus();
      setText('');
    });
  };

  useEffect(() => {
    props.onInputRef(textInput);
  }, []);

  useEffect(() => {
    if (!socket) return;

    const onNewMessages = messages => {
      props.onMessages(messages);
    };

    socket.on('new_messages', onNewMessages);
    return () => socket.off('new_messages', onNewMessages);
  }, [socket]);

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
