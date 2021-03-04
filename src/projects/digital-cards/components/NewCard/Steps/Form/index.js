import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { showForm } from '../../../../../../services/api/form';
import FieldRenderer from '../../../../../../components/FieldRenderer';
import Spinner from '../../../../../../components/Spinner';

const Fields = props => {
  const project = useSelector(store => store.project);
  const [form, setForm] = useState(null);
  const [formData, setFormData] = useState(props.data.form_data || {});

  const handleChangeData = changedData => {
    const newFormData = { ...formData, ...changedData };
    setFormData(newFormData);
    props.onDataAdded({ form_data: newFormData });
  };

  const handleSubmit = changedData => {
    const newFormData = { ...formData, ...changedData };
    setFormData(newFormData);
    props.onSubmit({ form_data: newFormData });
  };

  useEffect(() => {
    if (!project) return;
    showForm(project.code, props.formCode).then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, [project, props.formCode]);

  return (
    <>
      {!form && <Spinner />}
      {form && (
        <FieldRenderer
          data={formData}
          fields={form.fields}
          onPartialChange={handleChangeData}
          onChange={handleSubmit}
          saveButton
        />
      )}
    </>
  );
};

Fields.propTypes = {
  formCode: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  onDataAdded: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Fields;
