import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';
import { Button, ModalFooter } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import InputGroup from '../../../../../../../InputGroup';
import { updateForm } from '../../../../../../../../services/api/form';
import { pushAlert } from '../../../../../../../../shared/actions/alerts';

import Notifications from './Notifications';
import { getLanguage } from './lang';
import { inputTypes } from './constants';
import { filterFormFields } from './utils';

const FormEditor = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const selectedForm = useSelector(store => store.selectedForm);
  const [newForm, setNewForm] = useState(filterFormFields(selectedForm));
  const [hasChanged, setHasChanged] = useState(false);

  const handleChangeField = (changedIndex, newField) => {
    const newFields = newForm.fields.map((field, i) => (i === changedIndex ? newField : field));

    setNewForm({ ...newForm, fields: newFields });
    setHasChanged(true);
  };

  const handleRemoveField = removedIndex => {
    const newFields = newForm.fields.filter((_, i) => i !== removedIndex);

    setNewForm({ ...newForm, fields: newFields });
    setHasChanged(true);
  };

  const handleAddField = () => {
    const { length: newFieldsCount } = newForm.fields.filter(field =>
      new RegExp(`^${language.newField}`).test(field.name)
    );
    const newField = {
      key: uuid(),
      name: `${language.newField} ${newFieldsCount + 1}`,
      important: true,
      input_type: inputTypes[0],
      is_required: true
    };
    const newFields = [...newForm.fields, newField];

    setNewForm({ ...newForm, fields: newFields });
    setHasChanged(true);
  };

  const handleChangeNotifications = notifications => {
    setNewForm({ ...newForm, notifications: { ...(newForm.notifications || {}), ...notifications } });
    setHasChanged(true);
  };

  const handleSaveChanges = () => {
    updateForm(project.code, newForm).then(() => {
      dispatch(
        pushAlert({
          icon: 'success',
          title: language.formSaved.title,
          message: language.formSaved.message
        })
      );
    });
    setHasChanged(false);
  };

  return (
    <>
      <h3>{language.getTitle(selectedForm)}</h3>
      <Notifications onChange={handleChangeNotifications} />
      {newForm.fields.map((field, i) => (
        <InputGroup key={field.key}>
          <div className="icon">
            <CloseIcon
              style={{ display: 'inline-block', float: 'right' }}
              onClick={() => handleRemoveField(i)}
            />
          </div>
          <FormControl style={{ width: '90%' }}>
            <InputLabel>Tipo de Campo</InputLabel>
            <Select
              value={field.input_type}
              onChange={({ target }) => handleChangeField(i, { ...field, input_type: target.value })}
            >
              {inputTypes.map(inputType => (
                <MenuItem value={inputType} key={inputType}>
                  {language.inputTypes[inputType]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label={language.fieldName}
            value={field.name}
            variant="outlined"
            required
            style={{ width: '100%', margin: '16px 0 16px 0' }}
            size="small"
            onChange={({ target }) => handleChangeField(i, { ...field, name: target.value })}
          />
        </InputGroup>
      ))}
      <ModalFooter>
        <Button onClick={handleAddField}>{language.addField}</Button>
        <Button
          disabled={!hasChanged}
          onClick={handleSaveChanges}
          style={{ backgroundColor: 'lightgreen', borderColor: 'lightgreen', color: 'black' }}
        >
          {language.saveChanges}
        </Button>
      </ModalFooter>
      <style jsx>
        {`
          .icon {
            cursor: pointer;
            transition: 0.2s;
          }
          .icon:hover {
            color: black;
            background-color: rgba(0, 0, 0, 0.8);
          }
        `}
      </style>
    </>
  );
};

export default FormEditor;
