import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import DashboardLayout from '../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../hooks/useDashboardConfiguration';
import { listForms } from '../../../../services/api/form';
import ButtonList from '../../components/ButtonList';

import { getLanguage } from './lang';

const ContentEditor = () => {
  const dashboardProject = useSelector(store => store.dashboardProject);
  const dashboardConfiguration = useDashboardConfiguration();
  const language = getLanguage(useSelector(store => store.language));
  const [forms, setForms] = useState(null);

  useEffect(() => {
    if (!dashboardProject) return;
    listForms(dashboardProject.code, true, true).then(({ data: givenForms }) => {
      setForms(givenForms);
    });
  }, [dashboardProject]);

  return (
    <EnsureLoggedIn redirectOnNotLoggedIn="/login" Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
      >
        <h1 className="title">{language.title}</h1>
        {forms && (
          <ButtonList
            buttons={forms.map(form => ({ text: form.name, link: `/forms/${encodeURIComponent(form._id)}` }))}
          />
        )}
      </DashboardLayout>
      <style jsx>
        {`
          .title {
            margin: 14px;
          }
        `}
      </style>
    </EnsureLoggedIn>
  );
};

export default ContentEditor;
