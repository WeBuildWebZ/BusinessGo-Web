import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import InputGroup from '../../../../components/InputGroup';

import Field from './Field';

const FieldEditor = props => {
  const handleChange = (fieldKey, attribute, value) => {
    const newFields = props.form.fields.map((field, i) =>
      field.key === fieldKey ? { ...field, [attribute]: value } : field
    );

    props.onChange(newFields);
  };

  return (
    <>
      <div className="fieldEditor">
        {props.fields.map((field, i) => (
          <Field
            key={`${field.key}-${i}`}
            form={props.form}
            field={field}
            onChange={(attribute, value) => handleChange(field.key, attribute, value)}
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
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired
};

export default FieldEditor;
