import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import DashboardLayout from '../../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../../../hooks/useDashboardConfiguration';
import SectionButton from '../../../../components/SectionButton';
import RegisterList from '../../../../components/RegisterList';
import { removeOneSlashToUrl } from '../../../../../../utils/url';
import { listItemModels } from '../../../../../../services/api/itemModel';

import { getLanguage } from './lang';

const RegistersScreen = () => {
  const dashboardConfiguration = useDashboardConfiguration();
  const project = useSelector(store => store.dashboardProject);
  const language = getLanguage(useSelector(store => store.language));
  const [clientModels, setClientModels] = useState(null);
  const [selectedClientModel, setSelectedClientModel] = useState(null);

  useEffect(() => {
    if (!project) return;
    listItemModels(project).then(({ data: givenClientModels }) => {
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
            {selectedClientModel && (
              <>
                <Link
                  href={`/projects/${encodeURIComponent(project.code)}/registers/${encodeURIComponent(
                    selectedClientModel.entity
                  )}/new`}
                >
                  <a>
                    <div className="createRegister">
                      <i className="fa fa-plus" />
                      {language.createRegister(selectedClientModel)}
                    </div>
                  </a>
                </Link>
                <RegisterList clientModel={selectedClientModel} />
              </>
            )}
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
          .createRegister {
            display: flex;
            align-items: center;
            width: fit-content;
            background-color: #3b5998;
            margin: 14px;
            padding: 7px;
            border-radius: 7px;
            color: whitesmoke;
            transition: 0.7s;
          }
          .createRegister:hover {
            transform: scale(1.1);
          }
          .createRegister:active {
            transform: scale(1.2);
            transition: 0.1s;
          }
          .fa-plus {
            margin: 7px;
          }
        `}
      </style>
    </EnsureLoggedIn>
  );
};

export default RegistersScreen;
