import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FieldRenderer from '../../../../../../components/FieldRenderer';
import DashboardLayout from '../../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../../../hooks/useDashboardConfiguration';
import SectionButton from '../../../../components/SectionButton';
import BackButton from '../../../../components/BackButton';
import { removeOneSlashToUrl } from '../../../../../../utils/url';
import { updateProjectConfigurationSection } from '../../../../../../services/api/project';
import { setProject } from '../../../../../../shared/actions/project';
import usePushAlert from '../../../../../../shared/hooks/usePushAlert';

import { getNewConfiguration } from './utils';
import { getLanguage } from './lang';

const Configuration = () => {
  const dashboardConfiguration = useDashboardConfiguration();
  const dispatch = useDispatch();
  const pushAlert = usePushAlert();
  const project = useSelector(store => store.dashboardProject);
  const language = getLanguage(useSelector(store => store.language));
  const projectLink = `/projects/${encodeURIComponent(project?.code)}`;
  const [form, setForm] = useState(null);
  const [configuration, setConfiguration] = useState(null);

  const handlePartialChange = changedConfiguration => {
    const newConfiguration = getNewConfiguration(configuration, changedConfiguration, form.code);
    setConfiguration(newConfiguration);
  };

  const handleUpdateConfiguration = changedConfiguration => {
    const newConfiguration = getNewConfiguration(configuration, changedConfiguration, form.code);
    setConfiguration(newConfiguration);

    updateProjectConfigurationSection(project, form.code, newConfiguration[form.code]).then(
      ({ data: givenConfiguration }) => {
        dispatch(
          setProject({
            ...project,
            configuration: { ...project.configuration, [form.code]: givenConfiguration }
          })
        );
        pushAlert({ type: 'info', ...language.configurationUpdated });
      }
    );
  };

  useEffect(() => {
    if (!project?.configuration_sections.length) return;
    setForm(project.configuration_sections[0].form);
    setConfiguration(project.configuration);
  }, [project]);

  return (
    <EnsureLoggedIn Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
        backTitle={`${project ? `${language.project} ${project?.name}: ` : ''}${language.configuration}`}
        backHref={typeof window === 'object' ? removeOneSlashToUrl(window.location.href) : ''}
      >
        {project && form && (
          <>
            <div className="options">
              {project.configuration_sections.map((section, i) => (
                <SectionButton
                  key={i}
                  text={section.form.name}
                  selected={section.form_code === form?.code}
                  onClick={() => setForm(section.form)}
                />
              ))}
            </div>

            <FieldRenderer
              formCode={form.code}
              fields={form.fields}
              data={configuration[form.code] || {}}
              onChange={handleUpdateConfiguration}
              onPartialChange={handlePartialChange}
              saveButton
            />
          </>
        )}
      </DashboardLayout>
      <style jsx>
        {`
          .options {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}
      </style>
    </EnsureLoggedIn>
  );
};

export default Configuration;
