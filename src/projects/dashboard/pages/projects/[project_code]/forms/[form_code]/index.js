import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import DashboardLayout from '../../../../../../../components/DashboardLayout';
import EnsureLoggedIn from '../../../../../../../components/EnsureLoggedIn';
import LoadingPage2 from '../../../../../../../components/LoadingPage2';
import useDashboardConfiguration from '../../../../../hooks/useDashboardConfiguration';
import { showForm, updateForm } from '../../../../../../../services/api/form';
import ButtonList from '../../../../../components/ButtonList';
import FieldEditor from '../../../../../components/FieldEditor';
import usePushAlert from '../../../../../../../shared/hooks/usePushAlert';
import { getLanguage } from '../lang';
import SectionButton from '../../../../../components/SectionButton';
import BackButton from '../../../../../components/BackButton';
import { removeOneSlashToUrl } from '../../../../../../../utils/url';

const ShowForm = ({ form_code }) => {
  const pushAlert = usePushAlert();
  const project = useSelector(store => store.dashboardProject);
  const dashboardConfiguration = useDashboardConfiguration();
  const languageCode = useSelector(store => store.language);
  const language = getLanguage(languageCode);
  const [form, setForm] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const [updating, setUpdating] = useState(false);
  const fields = form?.fields.filter(
    field =>
      (!selectedVariant || field.show_on_variants.includes(selectedVariant.key)) &&
      (selectedStep === null || field.step - 1 === selectedStep)
  );

  const handleChange = newFields => {
    const newForm = { ...form, fields: newFields };
    setForm(newForm);
  };

  const handleSaveChanges = () => {
    if (updating) return;
    setUpdating(true);
    updateForm(project.code, form).then(() => {
      setUpdating(false);
      pushAlert({
        type: 'info',
        title: language.formUpdated(form).title,
        message: language.formUpdated(form).message
      });
    });
  };

  useEffect(() => {
    if (!project) return;
    showForm(project.code, form_code).then(({ data: givenForm }) => {
      setForm(givenForm);
      if (givenForm.variants.length) setSelectedVariant(givenForm.variants[0]);
      if (givenForm.steps.length) setSelectedStep(0);
    });
  }, [project]);

  return (
    <EnsureLoggedIn redirectOnNotLoggedIn="/login" Loading={LoadingPage2}>
      <DashboardLayout
        breadcrumbItems={dashboardConfiguration.breadcrumbItems}
        sidebarButtons={dashboardConfiguration.sidebarButtons}
      >
        {form && (
          <>
            <div className="titleContainer">
              <BackButton
                href={typeof window === 'object' ? removeOneSlashToUrl(window.location.href) : ''}
              />
              <h2 className="title">{language.showTitle(form)}</h2>
            </div>
            {!!form.variants.length && (
              <>
                <h4>{language.selectVariant}</h4>
                <div className="options">
                  {form.variants.map((variant, i) => (
                    <SectionButton
                      key={i}
                      text={variant.names[languageCode]}
                      selected={selectedVariant?.key === variant.key}
                      onClick={() => setSelectedVariant(variant)}
                    />
                  ))}
                </div>
              </>
            )}
            {!!form.steps.length && (
              <>
                <h4>{language.selectStep}</h4>
                <div className="options">
                  {form.steps.map((step, i) => (
                    <SectionButton
                      key={i}
                      text={step.name[languageCode]}
                      selected={selectedStep === i}
                      onClick={() => setSelectedStep(i)}
                    />
                  ))}
                </div>
              </>
            )}
            <FieldEditor form={form} fields={fields} onChange={handleChange} />
            <div className={`saveButton${updating ? ' disabled' : ''}`} onClick={handleSaveChanges}>
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
            transition: 0.7s;
          }
          .saveButton.disabled {
            opacity: 0.7;
            transform: scale(0.9);
          }

          .titleContainer {
            display: flex;
            align-items: center;
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

export const getServerSideProps = ({ query }) => {
  const { form_code } = query;

  return { props: { form_code } };
};

ShowForm.propTypes = {
  form_code: PropTypes.string.isRequired
};

export default ShowForm;
