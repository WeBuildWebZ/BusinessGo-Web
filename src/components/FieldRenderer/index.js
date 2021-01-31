import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { fieldShape } from '../../utils/field';

import Text from './components/Text';
import List from './List';
import Group from './Group';
import Enum from './components/Enum';
import Select from './components/Select';
import Number from './components/Number';
import Image from './components/Image';
import { getLanguage } from './lang';

let timeoutId;

const FieldRenderer = props => {
  const { fields, data, updateAfter } = props;
  const language = getLanguage(useSelector(store => store.language));
  const [hasChanged, setHasChanged] = useState(false);
  const [newData, setNewData] = useState(data);

  const handleChange = updatedData => {
    setNewData(updatedData);
    if (props.saveButton) setHasChanged(true);
    else props.onChange(updatedData);
  };

  const handleSave = () => {
    props.onChange(newData);
    setHasChanged(false);
  };

  const updateData = changedData => {
    if (!updateAfter) return handleChange(changedData);

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      handleChange(changedData);
    }, updateAfter);
  };

  const handleUpdateData = (key, value) => {
    updateData({ ...newData, [key]: value });
  };

  const handleUpdateOptionData = changedData => {
    updateData({ ...newData, ...changedData });
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
          case 'list':
            return (
              <List
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
                optionData={data}
                value={data[field.key]}
                readOnly={props.readOnly}
                onChange={value => handleUpdateData(field.key, value)}
                onChangeOptionData={handleUpdateOptionData}
                FieldRenderer={FieldRenderer}
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
      {props.saveButton && (
        <Modal.Footer>
          <Button disabled={!hasChanged} onClick={handleSave}>
            {language.save}
          </Button>
        </Modal.Footer>
      )}
      <style jsx>
        {`
          .fieldContainer {
            width: 88%;
            margin-left: 6%;
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
  onChange: PropTypes.func,
  saveButton: PropTypes.bool
};

FieldRenderer.defaultProps = {
  data: {},
  fields: [],
  readOnly: false,
  updateAfter: 0,
  onChange: () => {},
  saveButton: false
};

export default FieldRenderer;
