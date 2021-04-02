import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@material-ui/core';

import { fieldShape } from '../../../utils/field';

const CheckboxComponent = props => {
  const handleChange = e => {
    props.onChange(e.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={<Checkbox checked={props.value} onChange={handleChange} color="primary" />}
        label={props.field.name}
      />
    </>
  );
};

CheckboxComponent.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  field: fieldShape.isRequired
};

CheckboxComponent.defaultProps = {
  value: false
};

export default CheckboxComponent;
