import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

import { showLanguage, updateLanguage } from '../../services/api/language';
import { setLanguage } from '../../shared/actions/language';
import useChangeLanguage from '../../shared/hooks/useChangeLanguage';

import { getLanguage } from './lang';
import useStyles from './style';
import { LANGUAGES } from './constants';

const LanguageSelector = props => {
  const changeLanguage = useChangeLanguage();
  const classes = useStyles();
  const languageCode = useSelector(store => store.language);
  const user = useSelector(store => store.user);
  const language = getLanguage(languageCode);

  const handleChangeLanguage = newLanguage => {
    changeLanguage(newLanguage, !!user);
  };

  useEffect(() => {
    let waiting = true;

    if (!user) return;

    showLanguage().then(({ data: givenLanguage }) => {
      if (!waiting) return;
      changeLanguage(givenLanguage.code, false);
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
        onChange={({ target }) => handleChangeLanguage(target.value)}
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
