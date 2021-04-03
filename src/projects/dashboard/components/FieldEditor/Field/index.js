import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import InputGroup from '../../../../../components/InputGroup';
import useUpdateAfter from '../../../../../shared/hooks/useUpdateAfter';

import { getLanguage } from './lang';

const Field = props => {
  const updateAfter = useUpdateAfter();
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const [stateField, setStateField] = useState(props.field);
  const fieldNames = stateField.names || {};

  const handleChange = (attribute, value) => {
    const newField = { ...stateField, [attribute]: value };
    setStateField(newField);
    updateAfter(value, 500, () => {
      props.onChange(attribute, value);
    });
  };

  const handleToggleVariant = (checked, variant) => {
    const newVariants = checked
      ? [...stateField.show_on_variants, variant.key]
      : stateField.show_on_variants.filter(_variant => _variant !== variant.key);
    handleChange('show_on_variants', newVariants);
  };

  return (
    <InputGroup>
      <div className="fieldContainer">
        <div className="keyText">{stateField.key}</div>
        <div className="text">{fieldNames[languageCode] || stateField.name}</div>
        {['es', 'en'].map((lang, i) => (
          <TextField
            key={i}
            label={`${language.nameIn}${language.languages[lang]}`}
            value={fieldNames[lang] || ''}
            style={{ margin: 14 }}
            type="text"
            variant="outlined"
            onChange={e => handleChange('names', { ...fieldNames, [lang]: e.target.value })}
            size="small"
          />
        ))}
        <TextField
          label={language.step}
          inputProps={{ min: 1, max: 1000 }}
          value={stateField.step}
          type="number"
          style={{ margin: 14 }}
          variant="outlined"
          onChange={e => handleChange('step', +e.target.value)}
          size="small"
        />
        {language.showIn}
        {props.variants.map((variant, i) => {
          const checked = stateField.show_on_variants.includes(variant.key);

          return (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  checked={checked}
                  onChange={e => handleToggleVariant(e.target.checked, variant)}
                  color="primary"
                />
              }
              label={variant.names[languageCode]}
            />
          );
        })}
      </div>
      <style jsx>
        {`
          .fieldContainer {
            display: flex;
            flex-direction: column;
          }
          .text {
            margin: -14px 0 14px 14px;
            font-size: 20px;
            font-weight: bold;
          }
          .keyText {
            display: inline-flex;
            flex-direction: row;
            justify-content: flex-end;
          }
        `}
      </style>
    </InputGroup>
  );
};

Field.propTypes = {
  variants: PropTypes.array.isRequired,
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Field;