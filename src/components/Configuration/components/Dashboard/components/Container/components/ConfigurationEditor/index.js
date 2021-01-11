import { PopoverTitle } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const ConfigurationEditor = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div>
      <PopoverTitle>{language.configuration}</PopoverTitle>
    </div>
  );
};

export default ConfigurationEditor;
