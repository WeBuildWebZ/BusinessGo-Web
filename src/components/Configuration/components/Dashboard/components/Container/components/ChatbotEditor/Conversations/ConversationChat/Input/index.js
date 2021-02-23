import { useEffect, useRef, useState } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { socket } from '../../../../../../../../../../../shared/sockets/chatbot';
import { createWebMessage } from '../../../../../../../../../../../services/chatbot_api/web_message';

const Input = props => {
  const project = useSelector(store => store.project);
  const textInput = useRef();

  const handleKeyPress = ({ target, charCode }) => {
    const value = target.value.trim();
    if (charCode !== 13 || !value) return;
    props.onInput(value);
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
      disabled={props.waiting}
      style={{ position: 'absolute', bottom: 0, width: '100%', overflowX: 'unset' }}
    />
  );
};

Input.propTypes = {
  onMessages: PropTypes.func,
  onInputRef: PropTypes.func,
  onInput: PropTypes.func,
  waiting: PropTypes.bool.isRequired
};

Input.defaultProps = {
  onMessages: () => {},
  onInputRef: () => {},
  onInput: () => {}
};

export default Input;
