import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import DashboardLayout from '../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../hooks/useDashboardConfiguration';
import { showForm, updateForm } from '../../../../services/api/form';
import ButtonList from '../../components/ButtonList';
import FieldEditor from '../../components/FieldEditor';
import usePushAlert from '../../../../shared/hooks/usePushAlert';

import { getLanguage } from './lang';

const ShowForm = ({ form_code }) => {
  const pushAlert = usePushAlert();
  const dashboardProject = useSelector(store => store.dashboardProject);
  const dashboardConfiguration = useDashboardConfiguration();
  const language = getLanguage(useSelector(store => store.language));
  const [form, setForm] = useState(null);
  const [updating, setUpdating] = useState(false);

  const handleChange = (fieldIndex, attribute, value) => {
    const newForm = {
      ...form,
      fields: [
        ...form.fields.map((field, i) => (i === fieldIndex ? { ...field, [attribute]: value } : field))
      ]
    };

    setForm(newForm);
  };

  const handleSaveChanges = () => {
    setUpdating(true);
    updateForm(dashboardProject.code, form).then(() => {
      setUpdating(false);
      pushAlert({
        title: language.formUpdated(form).title,
        message: language.formUpdated(form).message
      });
    });
  };

  useEffect(() => {
    if (!dashboardProject) return;
    showForm(dashboardProject.code, form_code).then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, [dashboardProject]);

  return (
    <EnsureLoggedIn redirectOnNotLoggedIn="/login" Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
      >
        {form && (
          <>
            <h1 className="title">{language.showTitle(form)}</h1>
            <FieldEditor form={form} onChange={handleChange} />
            <div
              className={`saveButton pointer-cursor${updating ? ' disabled' : ''}`}
              onClick={handleSaveChanges}
            >
              {language.saveChanges}
            </div>
          </>
        )}
      </DashboardLayout>
      <style jsx>
        {`
          .title {
            margin: 14px;
          }
          .saveButton {
            width: fit-content;
            font-size: 22px;
            margin: 21px;
            padding: 14px;
            border-radius: 5px;
            background-color: rgb(109, 164, 185);
            user-select: none;
          }
          .saveButton.disabled {
            opacity: 0.7;
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
