import React, { useEffect, useRef } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from 'actions/language';
import { changeLanguage } from 'services/changeLanguage';
import { getLanguage } from 'services/getLanguage';

import getLang from './lang';
import useStyles from './style';
import { LANGUAGES } from './constants';

export default function LanguageSelector(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const language = getLanguage(useSelector(store => store.language));
  const lang = getLang(language);
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      let waiting = true;
      isFirstRun.current = false;
      getLanguage().then(response => {
        if (!waiting) return;
        if (!response || response.status !== 200) return;
        dispatch(setLanguage(response.body.language));
      });
      return function cleanup() {
        waiting = false;
      };
    }
    changeLanguage(language);
  }, [dispatch, language]);

  return (
    <FormControl>
      <InputLabel className={classes.inputLabel}>{lang.language}</InputLabel>
      <Select
        className={classes.select}
        value={language}
        onChange={({ target }) => dispatch(setLanguage(target.value))}
      >
        {Object.values(LANGUAGES).map(l => (
          <MenuItem value={l} key={l}>
            {l.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
