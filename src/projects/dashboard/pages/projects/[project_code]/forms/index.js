import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import DashboardLayout from '../../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../../../hooks/useDashboardConfiguration';
import { listForms } from '../../../../../../services/api/form';
import ButtonList from '../../../../components/ButtonList';
import BackButton from '../../../../components/BackButton';
import { removeOneSlashToUrl } from '../../../../../../utils/url';

import { getLanguage } from './lang';

const Forms = () => {
  const project = useSelector(store => store.dashboardProject);
  const dashboardConfiguration = useDashboardConfiguration();
  const language = getLanguage(useSelector(store => store.language));
  const [forms, setForms] = useState(null);

  useEffect(() => {
    if (!project) return;
    listForms(project.code, true, true).then(({ data: givenForms }) => {
      setForms(givenForms);
    });
  }, [project]);

  return (
    <EnsureLoggedIn Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
        backTitle={language.title}
        backHref={typeof window === 'object' ? removeOneSlashToUrl(window.location.href) : ''}
      >
        {forms && (
          <ButtonList
            buttons={forms.map(form => ({
              text: form.name,
              link: `/projects/${encodeURIComponent(project.code)}/forms/${encodeURIComponent(form.code)}`
            }))}
          />
        )}
      </DashboardLayout>
    </EnsureLoggedIn>
  );
};

export default Forms;
