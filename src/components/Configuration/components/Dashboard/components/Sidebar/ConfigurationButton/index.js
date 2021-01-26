import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../../../../../Button';
import { setAdminSection } from '../../../../../../../shared/actions/adminSection';
import { setConfigurationSection } from '../../../../../../../shared/actions/configurationSection';

const ConfigurationButton = props => {
  const dispatch = useDispatch();
  const adminSection = useSelector(store => store.adminSection);
  const configurationSection = useSelector(store => store.configurationSection);

  const isSelected =
    adminSection === 'configuration' &&
    configurationSection.form_code === props.configurationSection.form_code;

  const handleSelectSection = () => {
    dispatch(setAdminSection('configuration'));
    dispatch(setConfigurationSection(props.configurationSection));
  };

  return (
    <Button style={{ marginTop: 10 }} text={props.text} onClick={handleSelectSection} selected={isSelected} />
  );
};

ConfigurationButton.propTypes = {
  text: PropTypes.string,
  configurationSection: PropTypes.object.isRequired
};

ConfigurationButton.defaultProps = {
  text: ''
};

export default ConfigurationButton;
