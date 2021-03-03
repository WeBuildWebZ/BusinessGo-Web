import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { showForm } from '../../../../../../services/api/form';
import FieldRenderer from '../../../../../../components/FieldRenderer';
import Spinner from '../../../../../../components/Spinner';

const Fields = props => {
  const project = useSelector(store => store.project);
  const [form, setForm] = useState(null);
  const [data, setData] = useState(props.data);

  const handleChangeData = changedData => {
    const newData = { ...data, ...changedData };
    setData(newData);
    props.onDataAdded({ form_data: newData });
  };

  useEffect(() => {
    if (!project) return;
    showForm(project.code, 'free_card_creation_personal_data').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, [project]);

  return (
    <>
      {!form && <Spinner />}
      {form && <FieldRenderer data={data} fields={form.fields} onChange={handleChangeData} saveButton />}
    </>
  );
};

Fields.propTypes = {
  data: PropTypes.object.isRequired,
  onDataAdded: PropTypes.func.isRequired
};

export default Fields;
