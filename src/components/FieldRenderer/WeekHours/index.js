import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { fieldShape } from '../../../utils/field';

import { getLanguage } from './lang';

const getOpeningDate = (value, day) =>
  (value[day] && value[day].opening_date) || new Date('2021-01-01T09:00:00');

const getClosingDate = (value, day) =>
  (value[day] && value[day].closing_date) || new Date('2021-01-01T18:00:00');

const WeekHours = props => {
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const fieldName = props.field.names[languageCode];

  const handleToggleDay = day => {
    const disabled = !props.value[day] || !props.value[day].enabled;
    const newValue = {
      ...props.value,
      [day]: {
        enabled: disabled,
        opening_date: getOpeningDate(props.value, day),
        closing_date: getClosingDate(props.value, day)
      }
    };
    props.onChange(newValue);
  };

  const handleChangeDate = (day, key, date) => {
    const newValue = {
      ...props.value,
      [day]: {
        ...props.value[day],
        opening_date: getOpeningDate(props.value, day),
        closing_date: getClosingDate(props.value, day),
        [key]: date
      }
    };
    props.onChange(newValue);
  };

  return (
    <>
      <h5>{fieldName}</h5>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        {Object.keys(language.days).map((day, i) => {
          const disabled = !props.value[day] || !props.value[day].enabled;
          const openingDate = getOpeningDate(props.value, day);
          const closingDate = getClosingDate(props.value, day);

          return (
            <div key={i} className={`dayContainer${disabled ? ' disabled' : ''}`}>
              <h6 className="day">{language.days[day]}</h6>
              <KeyboardTimePicker
                margin="normal"
                label={language.opening}
                value={openingDate}
                disabled={disabled}
                onChange={date => handleChangeDate(day, 'opening_date', date)}
                KeyboardButtonProps={{ 'aria-label': 'change time' }}
              />
              <KeyboardTimePicker
                margin="normal"
                label={language.closing}
                value={closingDate}
                disabled={disabled}
                onChange={date => handleChangeDate(day, 'closing_date', date)}
                KeyboardButtonProps={{ 'aria-label': 'change time' }}
              />
              <div className="toggleIcon" onClick={() => handleToggleDay(day)}>
                {disabled ? <AddCircleRoundedIcon /> : <CancelRoundedIcon />}
              </div>
            </div>
          );
        })}
      </MuiPickersUtilsProvider>
      <style jsx>
        {`
          .dayContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 7px;
          }
          .dayContainer.disabled {
          }
          .day {
            width: 120px;
            margin: 7px;
          }
          .toggleIcon {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

WeekHours.propTypes = {
  value: PropTypes.objectOf(
    PropTypes.shape({
      enabled: PropTypes.bool,
      opening_date: PropTypes.instanceOf(Date),
      closing_date: PropTypes.instanceOf(Date)
    })
  ),
  field: fieldShape.isRequired,
  onChange: PropTypes.func
};

WeekHours.defaultProps = {
  value: {},
  onChange: () => {}
};

export default WeekHours;
