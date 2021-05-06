import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DashboardLayout from '../../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../../../hooks/useDashboardConfiguration';
import SectionButton from '../../../../components/SectionButton';
import RegisterList from '../../../../components/RegisterList';
import { removeOneSlashToUrl } from '../../../../../../utils/url';
import { getClientModels } from '../../../../../../services/api/clientModel';

import { getLanguage } from './lang';

const Configuration = () => {
  const dashboardConfiguration = useDashboardConfiguration();
  const project = useSelector(store => store.dashboardProject);
  const language = getLanguage(useSelector(store => store.language));
  const [clientModels, setClientModels] = useState(null);
  const [selectedClientModel, setSelectedClientModel] = useState(null);

  useEffect(() => {
    if (!project) return;
    getClientModels(project).then(({ data: givenClientModels }) => {
      setClientModels(givenClientModels);
      if (!givenClientModels.length) return;
      setSelectedClientModel(givenClientModels[0]);
    });
  }, [project]);

  return (
    <EnsureLoggedIn Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
        backTitle={`${project ? `${language.project} ${project?.name}: ` : ''}${language.registers}`}
        backHref={typeof window === 'object' ? removeOneSlashToUrl(window.location.href) : ''}
      >
        {project && clientModels && (
          <>
            <div className="options">
              {!clientModels.length && language.noRegisters}
              {clientModels.map((clientModel, i) => (
                <SectionButton
                  key={i}
                  text={clientModel.name}
                  selected={clientModel.entity === selectedClientModel?.entity}
                  onClick={() => setSelectedClientModel(selectedClientModel)}
                />
              ))}
            </div>
            {selectedClientModel && <RegisterList clientModel={selectedClientModel} />}
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
