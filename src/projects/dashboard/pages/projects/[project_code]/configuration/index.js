import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import DashboardLayout from '../../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../../../hooks/useDashboardConfiguration';
import SectionButton from '../../../../components/SectionButton';

import { getLanguage } from './lang';

const Configuration = ({ project_code }) => {
  const dashboardConfiguration = useDashboardConfiguration();
  const project = useSelector(store => store.dashboardProject);
  const language = getLanguage(useSelector(store => store.language));
  const projectLink = `/projects/${encodeURIComponent(project?.code)}`;
  const [selectedSection, setSelectedSection] = useState();

  useEffect(() => {
    if (!project?.configuration_sections.length) return;
    setSelectedSection(project.configuration_sections[0]);
  }, [project]);

  return (
    <EnsureLoggedIn redirectOnNotLoggedIn="/login" Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
      >
        {project && (
          <>
            <h1 className="title">
              {language.project} {project.name}: {language.configuration}
            </h1>
            <div className="options">
              {project.configuration_sections.map((section, i) => (
                <SectionButton
                  key={i}
                  text={section.form.name}
                  selected={section.form_code === selectedSection}
                  onClick={() => setSelectedSection(section.form_code)}
                />
              ))}
            </div>
          </>
        )}
      </DashboardLayout>
      <style jsx>
        {`
          .title {
            margin: 14px;
          }
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

Configuration.propTypes = {
  project_code: PropTypes.string.isRequired
};

export default Configuration;
