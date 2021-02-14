import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

import { showLanguage } from '../../services/api/language';
import { setLanguage } from '../../shared/actions/language';

import { getLanguage } from './lang';
import useStyles from './style';
import { LANGUAGES } from './constants';

const LanguageSelector = props => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);

  useEffect(() => {
    let waiting = true;
    showLanguage().then(({ data: givenLanguage }) => {
      if (!waiting) return;
      dispatch(setLanguage(givenLanguage.code));
      return () => (waiting = false);
    });
  }, []);

  return (
    <FormControl>
      <InputLabel style={{ color: props.color }} className={classes.inputLabel}>
        {language.language}
      </InputLabel>
      <Select
        className={classes.select}
        value={languageCode}
        onChange={({ target }) => dispatch(setLanguage(target.value))}
        style={{ color: props.color }}
      >
        {LANGUAGES.map(l => (
          <MenuItem value={l} key={l}>
            {l.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

LanguageSelector.propTypes = {
  color: PropTypes.string
};

LanguageSelector.defaultProps = {
  color: 'black'
};

export default LanguageSelector;
