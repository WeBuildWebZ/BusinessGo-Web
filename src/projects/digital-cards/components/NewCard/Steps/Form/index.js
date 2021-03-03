import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { showForm } from '../../../../../../services/api/form';
import FieldRenderer from '../../../../../../components/FieldRenderer';
import Spinner from '../../../../../../components/Spinner';

const Fields = props => {
  const project = useSelector(store => store.project);
  const [form, setForm] = useState(null);
  const [data, setData] = useState({});

  const handleChangeData = newData => {
    setData(newData);
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
      {form && <FieldRenderer data={data} fields={form.fields} />}
    </>
  );
};

export default Fields;
