import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PopoverTitle } from 'react-bootstrap';

import Spinner from '../../../../../../../Spinner';
import FieldRenderer from '../../../../../../../FieldRenderer';
import { updateProjectConfiguration } from '../../../../../../../../services/api/project';

import { getLanguage } from './lang';

const ConfigurationEditor = () => {
  const language = getLanguage(useSelector(store => store.language));
  const user = useSelector(store => store.user);
  const project = useSelector(store => store.project);
  const [configuration, setConfiguration] = useState(project.configuration);

  const handleUpdateConfiguration = newConfiguration => {
    setConfiguration(newConfiguration);

    updateProjectConfiguration(user, project, newConfiguration);
  };

  return (
    <div className="configuration">
      <PopoverTitle>{language.configuration}</PopoverTitle>
      {!project && <Spinner />}
      {project && (
        <FieldRenderer
          fields={project.fields}
          data={configuration}
          onChange={handleUpdateConfiguration}
          updateAfter={1000}
        />
      )}
      <style jsx>
        {`
          .configuration {
            height: 100%;
            overflow-y: auto;
          }
        `}
      </style>
    </div>
  );
};

export default ConfigurationEditor;
