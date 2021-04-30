import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { showForm, updateForm } from '../../../../services/api/form';
import FieldEditor from '../FieldEditor';
import usePushAlert from '../../../../shared/hooks/usePushAlert';
import SectionButton from '../SectionButton';

import { getLanguage } from './lang';
import FieldsTable from './FieldsTable';

const FormDetail = props => {
  const { form_code } = props;
  const pushAlert = usePushAlert();
  const project = useSelector(store => store.dashboardProject);
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
      props.onFormLoad(givenForm);
    });
  }, [project]);

  return (
    <>
      {form && (
        <>
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
          {props.view === 'table' && <FieldsTable fields={fields} />}
          {props.view === 'detail' && <FieldEditor form={form} fields={fields} onChange={handleChange} />}
          <div className={`saveButton${updating ? ' disabled' : ''}`} onClick={handleSaveChanges}>
            {language.saveChanges}
          </div>
        </>
      )}
      <style jsx>
        {`
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
          .options {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
};

export const getServerSideProps = ({ query }) => {
  const { form_code } = query;

  return { props: { form_code } };
};

FormDetail.propTypes = {
  form_code: PropTypes.string.isRequired,
  onFormLoad: PropTypes.func.isRequired,
  view: PropTypes.string
};

FormDetail.defalutProps = {
  onFormLoad: () => {},
  view: 'table'
};

export default FormDetail;
