import PropTypes from 'prop-types';

const Checkbox = ({ type, label, checked, name, onChange }) => (
  <label htmlFor={`${label}-${name}`} className={`checkbox ${type ? `checkbox--${type}` : ''}`}>
    <input name={name} onChange={onChange} type="checkbox" id={`${label}-${name}`} checked={checked} />
    <span className="checkbox__check" />
    <p>{label}</p>
  </label>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  type: '',
  label: ''.string,
  checked: false,
  name: '',
  onChange: ''
};

export default Checkbox;
