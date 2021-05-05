import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import DashboardLayout from '../../../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../../../../hooks/useDashboardConfiguration';
import { getLanguage } from '../lang';
import BackButton from '../../../../../components/BackButton';
import { removeOneSlashToUrl } from '../../../../../../../utils/url';
import FormDetail from '../../../../../components/FormDetail';

const ShowForm = ({ form_code }) => {
  const dashboardConfiguration = useDashboardConfiguration();
  const language = getLanguage(useSelector(store => store.language));
  const [form, setForm] = useState(null);
  const [view, setView] = useState('detail');

  return (
    <EnsureLoggedIn Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
        backTitle={language.showTitle(form)}
        backHref={typeof window === 'object' ? removeOneSlashToUrl(window.location.href) : ''}
        navbarButtons={
          <div className="buttons">
            <i
              className={`fas fa-file-alt iconButton${view === 'table' ? ' selected' : ''}`}
              onClick={() => setView('table')}
            />
            <i
              className={`fas fa-table iconButton${view === 'detail' ? ' selected' : ''}`}
              onClick={() => setView('detail')}
            />
          </div>
        }
      >
        <FormDetail form_code={form_code} onFormLoad={setForm} view={view} />
      </DashboardLayout>
      <style jsx>
        {`
          .iconButton {
            margin: 10px;
            font-size: 30px;
            transition: 0.7s;
          }
          .iconButton:hover {
            font-size: 40px;
          }
          .iconButton:active {
            font-size: 50px;
            transition: 0.1s;
          }
          .iconButton.selected {
            transform: scale(1.3);
            text-shadow: 0 0 10px #000000aa;
          }
          .buttons {
            display: flex;
          }
        `}
      </style>
    </EnsureLoggedIn>
  );
};

export const getServerSideProps = ({ query }) => {
  const { form_code } = query;

  return { props: { form_code } };
};

ShowForm.propTypes = {
  form_code: PropTypes.string.isRequired
};

export default ShowForm;
