import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import FieldRenderer from '../../../../../../../components/FieldRenderer';
import DashboardLayout from '../../../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../../../../hooks/useDashboardConfiguration';
import SectionButton from '../../../../../components/SectionButton';
import BackButton from '../../../../../components/BackButton';
import RegisterList from '../../../../../components/RegisterList';
import { removeOneSlashToUrl } from '../../../../../../../utils/url';
import { updateProjectConfigurationSection } from '../../../../../../../services/api/project';
import { listItemModels } from '../../../../../../../services/api/user';
import { setProject } from '../../../../../../../shared/actions/project';
import usePushAlert from '../../../../../../../shared/hooks/usePushAlert';
import { getLanguage } from '../../lang';
import { showItemModel } from '../../../../../../../services/api/itemModel';
import {
  createItem,
  showItem,
  updateItem
} from '../../../../../../../services/api/item';

export const getServerSideProps = ({ query }) => {
  const { entity, register_id } = query;

  return { props: { entity, register_id } };
};

const EditRegister = props => {
  const { entity, register_id } = props;
  const dashboardConfiguration = useDashboardConfiguration();
  const dispatch = useDispatch();
  const pushAlert = usePushAlert();
  const router = useRouter();
  const project = useSelector(store => store.dashboardProject);
  const language = getLanguage(useSelector(store => store.language));
  const projectLink = `/projects/${encodeURIComponent(project?.code)}`;
  const [clientDocument, setClientDocument] = useState();
  const [clientModel, setClientModel] = useState(null);
  const [selectedClientModel, setSelectedClientModel] = useState(null);
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState(false);
  const isNew = register_id === 'new';

  const handlePartialChange = newData => {
    const newClientDocument = { ...clientDocument, ...newData };
    setClientDocument(newClientDocument);
  };

  const handleUpdateDocument = newData => {
    const newClientDocument = { ...clientDocument, ...newData };
    setClientDocument(newClientDocument);
    setClientDocument(newClientDocument);

    if (isNew) {
      if (created || creating) return;
      setCreating(true);
      createItem(entity, project.code, newClientDocument)
        .then(({ data: newRegister }) => {
          pushAlert({ type: 'info', ...language.registerCreated(clientModel) });
          setCreated(true);
          setTimeout(() => {
            router.push({
              pathname: `${removeOneSlashToUrl(window.location.href)}/${encodeURIComponent(newRegister._id)}`
            });
          }, 500);
        })
        .catch(() => {
          pushAlert({ type: 'info', ...language.registerCreateError(clientModel) });
        })
        .finally(() => {
          setCreating(false);
        });
    } else {
      updateItem(newClientDocument).then(() => {
        pushAlert({ type: 'info', ...language.registerUpdated(clientModel) });
      });
    }
  };

  useEffect(() => {
    if (!project) return;
    showItemModel(project, entity).then(({ data: givenClientModel }) => {
      setClientModel(givenClientModel);
    });
    if (isNew) return;
    showItem(register_id).then(({ data: givenClientDocument }) => {
      setClientDocument(givenClientDocument);
    });
  }, [project]);

  useEffect(() => {
    if (!isNew || clientDocument) return;
    setClientDocument({});
  }, []);

  return (
    <EnsureLoggedIn Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
        backTitle={`${project ? `${language.project} ${project?.name}: ` : ''}${
          clientModel ? `${isNew ? language.create : language.edit} ${clientModel.name}` : language.registers
        }`}
        backHref={
          typeof window === 'object' ? removeOneSlashToUrl(removeOneSlashToUrl(window.location.href)) : ''
        }
      >
        {project && clientModel && clientDocument && (
          <>
            <FieldRenderer
              formCode={clientModel.entity}
              fields={clientModel.fields}
              data={clientDocument}
              onChange={handleUpdateDocument}
              onPartialChange={handlePartialChange}
              saveButton
            />
          </>
        )}
      </DashboardLayout>
    </EnsureLoggedIn>
  );
};

EditRegister.propTypes = {
  entity: PropTypes.string.isRequired,
  register_id: PropTypes.string.isRequired
};

export default EditRegister;
