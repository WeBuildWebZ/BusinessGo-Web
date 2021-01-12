import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Popover, PopoverTitle, Toast } from 'react-bootstrap';

import { updateProjectConfiguration } from '../../../../../../../../services/api/project';
import FieldRenderer from '../../../../../../../FieldRenderer';
import Spinner from '../../../../../../../Spinner';
import { pushAlert } from '../../../../../../../../shared/actions/alerts';

import { getLanguage } from './lang';

const ConfigurationEditor = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const user = useSelector(store => store.user);
  const project = useSelector(store => store.project);
  const [configuration, setConfiguration] = useState(project.configuration);

  const handleUpdateConfiguration = newConfiguration => {
    setConfiguration(newConfiguration);
    updateProjectConfiguration(user, project, newConfiguration);
    dispatch(
      pushAlert({
        icon: 'success',
        title: language.configurationUpdated.title,
        message: language.configurationUpdated.message
      })
    );
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
          .icon {
            width: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default ConfigurationEditor;
