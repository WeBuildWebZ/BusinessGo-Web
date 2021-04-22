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
    <EnsureLoggedIn redirectOnNotLoggedIn="/login" Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
      >
        <div className="titleContainer">
          <BackButton href={typeof window === 'object' ? removeOneSlashToUrl(window.location.href) : ''} />
          <h1 className="title">{language.title}</h1>
        </div>
        {forms && (
          <ButtonList
            buttons={forms.map(form => ({
              text: form.name,
              link: `/projects/${encodeURIComponent(project.code)}/forms/${encodeURIComponent(form.code)}`
            }))}
          />
        )}
      </DashboardLayout>
      <style jsx>
        {`
          .titleContainer {
            display: flex;
            align-items: center;
          }
          .title {
            margin: 14px;
          }
        `}
      </style>
    </EnsureLoggedIn>
  );
};

export default Forms;
