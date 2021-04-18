import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateProjectConfiguration } from '../../../../../../../../services/api/project';
import FieldRenderer from '../../../../../../../FieldRenderer';
import Spinner from '../../../../../../../Spinner';
import { setProject } from '../../../../../../../../shared/actions/project';
import usePushAlert from '../../../../../../../../shared/hooks/usePushAlert';
import { getNewConfiguration } from '../../../../../../../FieldRenderer/utils';

import { getLanguage } from './lang';

const ConfigurationEditor = () => {
  const dispatch = useDispatch();
  const pushAlert = usePushAlert();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const configurationSection = useSelector(store => store.configurationSection);
  const [configuration, setConfiguration] = useState(project.configuration);

  const handlePartialChange = changedConfiguration => {
    const newConfiguration = getNewConfiguration(
      configuration,
      changedConfiguration,
      configurationSection.form_code
    );
    setConfiguration(newConfiguration);
  };

  const handleUpdateConfiguration = changedConfiguration => {
    const newConfiguration = getNewConfiguration(
      configuration,
      changedConfiguration,
      configurationSection.form_code
    );

    setConfiguration(newConfiguration);
    updateProjectConfiguration(project, newConfiguration).then(({ data: givenConfiguration }) => {
      dispatch(setProject({ ...project, configuration: givenConfiguration }));
      pushAlert({
        type: 'info',
        title: language.configurationUpdated.title,
        message: language.configurationUpdated.message
      });
    });
  };

  return (
    <div className="configuration">
      {!project && <Spinner />}
      {project && configurationSection && (
        <>
          <h2 className="title">{configurationSection.form.name}</h2>
          <FieldRenderer
            formCode={configurationSection.form_code}
            fields={configurationSection.form.fields}
            data={configuration[configurationSection.form_code] || {}}
            onChange={handleUpdateConfiguration}
            onPartialChange={handlePartialChange}
            saveButton
          />
        </>
      )}
      <style jsx>
        {`
          .configuration {
            height: 100%;
            overflow-y: auto;
          }
          .title {
            margin-left: 7px;
          }
        `}
      </style>
    </div>
  );
};

export default ConfigurationEditor;
