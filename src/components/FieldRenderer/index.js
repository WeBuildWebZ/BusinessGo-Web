import React from 'react';
import PropTypes from 'prop-types';

import { fieldShape } from '../../utils/field';

import Text from './components/Text';
import Enum from './components/Enum';
import Select from './components/Select';
import Number from './components/Number';
import Image from './components/Image';

let timeoutId;

const FieldRenderer = props => {
  const { fields, data, updateAfter } = props;

  const handleUpdateData = (key, value) => {
    if (!updateAfter) return props.onChange({ ...data, [key]: value });

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      props.onChange({ ...data, [key]: value });
    }, updateAfter);
  };

  return (
    <div className="fieldContainer">
      {fields.map((field, i) => {
        switch (field.input_type) {
          case 'number':
            return (
              <Number
                field={field}
                value={data[field.key]}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'text':
            return (
              <Text
                field={field}
                value={data[field.key]}
                multiline={false}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'textarea-small':
            return (
              <Text
                field={field}
                value={data[field.key]}
                multiline
                rows={4}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'textarea-medium':
            return (
              <Text
                field={field}
                value={data[field.key]}
                multiline
                rows={11}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'textarea-big':
            return (
              <Text
                field={field}
                value={data[field.key]}
                multiline
                rows={17}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'image':
            return (
              <Image
                field={field}
                value={data[field.key]}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'enum':
            return (
              <Enum
                field={field}
                value={data[field.key]}
                multiline={false}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'select':
            return (
              <Select
                field={field}
                value={data[field.key]}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          default:
            return <div key={field.key} />;
        }
      })}
      <style jsx>
        {`
          .fieldContainer {
            width: 80%;
            margin-left: 10%;
          }
        `}
      </style>
    </div>
  );
};

FieldRenderer.propTypes = {
  data: PropTypes.object,
  fields: PropTypes.arrayOf(fieldShape),
  updateAfter: PropTypes.number,
  onChange: PropTypes.func
};

FieldRenderer.defaultProps = {
  fields: [],
  data: {},
  updateAfter: 0,
  onChange: () => {}
};

export default FieldRenderer;
