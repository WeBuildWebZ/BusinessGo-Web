import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fieldShape } from '../../utils/field';
import { getFieldKeyTranslation } from '../../translations/fieldKeys';

import List from './List';
import Group from './Group';
import Checkbox from './Checkbox';
import WeekHours from './WeekHours';
import ColorPicker from './ColorPicker';
import Text from './Text';
import Enum from './components/Enum';
import Select from './components/Select';
import SelectButtons from './SelectButtons';
import Number from './components/Number';
import Image from './components/Image';
import FilePicker from './FilePicker';
import { getDataFromFields } from './utils';
import { getLanguage } from './lang';

let timeoutId;

const FieldRenderer = props => {
  const { fields, data, updateAfter } = props;
  const languageCode = useSelector(store => store.language);
  const keyTranslation = getFieldKeyTranslation(languageCode);
  const language = getLanguage(languageCode);
  const [hasChanged, setHasChanged] = useState(false);
  const [newData, setNewData] = useState(data);
  const [uploadingFiles, setUploadingFiles] = useState(false);

  const handleChange = updatedData => {
    const formattedData = getDataFromFields(fields, updatedData);
    setNewData(formattedData);
    props.onPartialChange(formattedData);

    if (props.saveButton) setHasChanged(true);
    else props.onChange(formattedData);
  };

  const handleSave = () => {
    const formattedData = getDataFromFields(fields, newData);
    props.onChange(formattedData);
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
    <div className="fieldsContainer">
      {fields.map(field => {
        if (field.fillable_by_user === false && !props.readOnly) return <div key={field.key} />;

        return (
          <div key={`${props.formCode}-${field.key}`} className="fieldContainer">
            {(() => {
              switch (field.input_type) {
                case 'number':
                  return (
                    <Number
                      template={props.template}
                      field={field}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'text':
                  return (
                    <Text
                      template={props.template}
                      field={field}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      multiline={false}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'textarea-small':
                  return (
                    <Text
                      template={props.template}
                      field={field}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      multiline
                      rows={4}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'textarea-medium':
                  return (
                    <Text
                      template={props.template}
                      field={field}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      multiline
                      rows={11}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'textarea-big':
                  return (
                    <Text
                      template={props.template}
                      field={field}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      multiline
                      rows={17}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'image':
                  return (
                    <Image
                      template={props.template}
                      field={field}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'list':
                  return (
                    <List
                      template={props.template}
                      field={field}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'enum':
                  return (
                    <Enum
                      template={props.template}
                      field={field}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      onChange={value => handleUpdateData(field.key, value)}
                      FieldRenderer={FieldRenderer}
                    />
                  );
                case 'group':
                  return (
                    <Group
                      template={props.template}
                      field={field}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      multiline={false}
                      onChange={value => handleUpdateData(field.key, value)}
                      FieldRenderer={FieldRenderer}
                    />
                  );
                case 'select':
                  return (
                    <Select
                      template={props.template}
                      field={field}
                      optionData={data}
                      value={data[field.key]}
                      readOnly={props.readOnly}
                      onChange={value => handleUpdateData(field.key, value)}
                      onChangeOptionData={handleUpdateOptionData}
                      FieldRenderer={FieldRenderer}
                    />
                  );
                case 'select-buttons':
                  return (
                    <SelectButtons
                      options={field.select_button_options}
                      value={data[field.key]}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'checkbox':
                  return (
                    <Checkbox
                      value={data[field.key]}
                      field={field}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'week-hours':
                  return (
                    <WeekHours
                      value={data[field.key]}
                      field={field}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'color':
                  return (
                    <ColorPicker
                      value={data[field.key]}
                      field={field}
                      onChange={value => handleUpdateData(field.key, value)}
                    />
                  );
                case 'files':
                  return (
                    <FilePicker
                      value={data[field.key]}
                      field={field}
                      onChange={value => handleUpdateData(field.key, value)}
                      onUploadStart={() => setUploadingFiles(true)}
                      onUploadEnd={() => setUploadingFiles(false)}
                    />
                  );
                case 'button':
                  return (
                    <a href={data[field.key]} target="_blank">
                      <Button
                        template={props.template}
                        value={data[field.key]}
                        readOnly={props.readOnly}
                        onChange={value => handleUpdateData(field.key, value)}
                      >
                        {field.name || keyTranslation[field.key]}
                      </Button>
                    </a>
                  );
                default:
              }
            })()}
          </div>
        );
      })}
      {props.backButton && <Button onClick={props.onGoBack}>{language.back}</Button>}
      {props.saveButton && (
        <Button
          disabled={!hasChanged && !props.alwaysShowSaveButton && !uploadingFiles}
          onClick={handleSave}
          style={{ backgroundColor: 'green', margin: 14 }}
        >
          {props.saveButtonText || language.save}
        </Button>
      )}
      <style jsx>
        {`
          .fieldsContainer {
            width: 88%;
            margin: 0 0 21px 6%;
          }
          .fieldContainer {
            padding: 0 4px 0 4px;
            background-color: whitesmoke;
          }
        `}
      </style>
    </div>
  );
};

FieldRenderer.propTypes = {
  data: PropTypes.object,
  formCode: PropTypes.string,
  fields: PropTypes.arrayOf(fieldShape),
  readOnly: PropTypes.bool,
  updateAfter: PropTypes.number,
  template: PropTypes.string,
  onChange: PropTypes.func,
  onPartialChange: PropTypes.func,
  onGoBack: PropTypes.func,
  saveButton: PropTypes.bool,
  saveButtonText: PropTypes.string,
  backButton: PropTypes.bool,
  alwaysShowSaveButton: PropTypes.bool
};

FieldRenderer.defaultProps = {
  data: {},
  formCode: '',
  fields: [],
  readOnly: false,
  updateAfter: 0,
  template: 'default',
  onChange: () => {},
  onPartialChange: () => {},
  onGoBack: () => {},
  saveButton: false,
  saveButtonText: '',
  backButton: false,
  alwaysShowSaveButton: false
};

export default FieldRenderer;
