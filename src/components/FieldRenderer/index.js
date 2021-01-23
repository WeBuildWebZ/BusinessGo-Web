import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { fieldShape } from '../../utils/field';

import Text from './components/Text';
import Enum from './components/Enum';
import Select from './components/Select';
import Number from './components/Number';
import Image from './components/Image';
import Group from './components/Group';

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
      {fields.map(field => {
        if (field.fillable_by_user === false && !props.readOnly) return <div key={field.key} />;

        switch (field.input_type) {
          case 'number':
            return (
              <Number
                field={field}
                value={data[field.key]}
                readOnly={props.readOnly}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'text':
            return (
              <Text
                field={field}
                value={data[field.key]}
                readOnly={props.readOnly}
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
                readOnly={props.readOnly}
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
                readOnly={props.readOnly}
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
                readOnly={props.readOnly}
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
                readOnly={props.readOnly}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'enum':
            return (
              <Enum
                field={field}
                value={data[field.key]}
                readOnly={props.readOnly}
                multiline={false}
                onChange={value => handleUpdateData(field.key, value)}
                FieldRenderer={FieldRenderer}
                key={field.key}
              />
            );
          case 'group':
            return (
              <Group
                field={field}
                value={data[field.key]}
                readOnly={props.readOnly}
                multiline={false}
                onChange={value => handleUpdateData(field.key, value)}
                FieldRenderer={FieldRenderer}
                key={field.key}
              />
            );
          case 'select':
            return (
              <Select
                field={field}
                value={data[field.key]}
                readOnly={props.readOnly}
                onChange={value => handleUpdateData(field.key, value)}
                key={field.key}
              />
            );
          case 'button':
            return (
              <a href={data[field.key]} target="_blank">
                <Button
                  value={data[field.key]}
                  readOnly={props.readOnly}
                  onChange={value => handleUpdateData(field.key, value)}
                  key={field.key}
                >
                  {field.name}
                </Button>
              </a>
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
  readOnly: PropTypes.bool,
  updateAfter: PropTypes.number,
  onChange: PropTypes.func
};

FieldRenderer.defaultProps = {
  data: {},
  fields: [],
  readOnly: false,
  updateAfter: 0,
  onChange: () => {}
};

export default FieldRenderer;
