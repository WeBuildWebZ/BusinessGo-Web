import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import DashboardLayout from '../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../components/LoadingPage2';
import { removeOneSlashToUrl } from '../../../../../utils/url';
import BackButton from '../../../components/BackButton';
import CoolCard from '../../../components/CoolCard';
import useDashboardConfiguration from '../../../hooks/useDashboardConfiguration';

import { getLanguage } from './lang';

const Dashboard = () => {
  const dashboardConfiguration = useDashboardConfiguration();
  const project = useSelector(store => store.dashboardProject);
  const language = getLanguage(useSelector(store => store.language));
  const projectLink = `/projects/${encodeURIComponent(project?.code)}`;

  return (
    <EnsureLoggedIn Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
        backTitle={`${language.project} ${project?.name}`}
        backHref="/"
      >
        {project && (
          <div className="options">
            <CoolCard
              title={language.configuration}
              link={`${projectLink}/configuration`}
              image="/icons/configuration.png"
            />
            <CoolCard
              title={language.formEditor}
              link={`${projectLink}/forms`}
              image="/icons/formEditor.png"
            />
            <CoolCard
              title={language.registers}
              link={`${projectLink}/registers`}
              image="/icons/register.png"
            />
            <CoolCard
              title={language.siteBuilder}
              link={`${projectLink}/site_builder`}
              image="/icons/siteBuilder.png"
            />
          </div>
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

export default Dashboard;
