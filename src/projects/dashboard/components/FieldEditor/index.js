import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import InputGroup from '../../../../components/InputGroup';

import Field from './Field';

const FieldEditor = props => {
  const handleChange = (fieldIndex, attribute, value) => {
    const newFields = [
      ...props.form.fields.map((field, i) => (i === fieldIndex ? { ...field, [attribute]: value } : field))
    ];
    props.onChange(newFields);
  };

  return (
    <>
      <div className="fieldEditor">
        {props.form.fields.map((field, i) => (
          <Field
            key={i}
            field={field}
            onChange={(attribute, value) => handleChange(i, attribute, value)}
            variants={props.form.variants}
          />
        ))}
      </div>
      <style jsx>
        {`
          .fieldEditor {
            width: 70%;
            margin-left: 15%;
          }
        `}
      </style>
    </>
  );
};

FieldEditor.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FieldEditor;
