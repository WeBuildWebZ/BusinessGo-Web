import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PopoverTitle } from 'react-bootstrap';

import { updateProjectConfiguration } from '../../../../../../../../services/api/project';
import FieldRenderer from '../../../../../../../FieldRenderer';
import Spinner from '../../../../../../../Spinner';
import { pushAlert } from '../../../../../../../../shared/actions/alerts';
import { setProject } from '../../../../../../../../shared/actions/project';

import { getLanguage } from './lang';

const ConfigurationEditor = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const configurationSection = useSelector(store => store.configurationSection);
  const [configuration, setConfiguration] = useState(project.configuration);

  const handleUpdateConfiguration = changedConfiguration => {
    const newConfiguration = { ...configuration, [configurationSection.form_code]: changedConfiguration };

    setConfiguration(newConfiguration);
    updateProjectConfiguration(project, newConfiguration).then(({ data: givenConfiguration }) => {
      dispatch(setProject({ ...project, configuration: givenConfiguration }));
      dispatch(
        pushAlert({
          icon: 'success',
          title: language.configurationUpdated.title,
          message: language.configurationUpdated.message
        })
      );
    });
  };

  return (
    <div className="configuration">
      {!project && <Spinner />}
      {project && configurationSection && (
        <>
          <PopoverTitle>{configurationSection.form.name}</PopoverTitle>
          <FieldRenderer
            fields={configurationSection.form.fields}
            data={configuration[configurationSection.form_code] || {}}
            onChange={handleUpdateConfiguration}
            updateAfter={1000}
          />
        </>
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
