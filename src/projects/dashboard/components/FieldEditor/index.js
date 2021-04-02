import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import InputGroup from '../../../../components/InputGroup';

import { getLanguage } from './lang';

const FieldEditor = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <>
      <div className="fieldEditor">
        {props.form.fields.map((field, i) => (
          <InputGroup key={i}>
            <div className="fieldContainer">
              <div className="text">{field.name}</div>
              <TextField
                label={language.step}
                value={field.step}
                type="number"
                variant="outlined"
                onChange={e => props.onChange(i, 'step', +e.target.value)}
                required={field.is_required}
                size="small"
              />
            </div>
          </InputGroup>
        ))}
      </div>
      <style jsx>
        {`
          .fieldEditor {
            width: 70%;
            margin-left: 15%;
          }
          .fieldContainer {
            display: flex;
            flex-direction: column;
          }
          .text {
            margin-bottom: 14px;
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
