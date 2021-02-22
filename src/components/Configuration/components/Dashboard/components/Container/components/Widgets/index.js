import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { showForm } from '../../../../../../../../services/api/form';
import FieldRenderer from '../../../../../../../FieldRenderer';

const Widgets = () => {
  const project = useSelector(store => store.project);
  const [form, setForm] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    showForm('all', 'social_networks').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, []);

  return (
    <>
      <h3>Social Networks</h3>
      {form && <FieldRenderer fields={form.fields} data={data} onChange={setData} saveButton />}
    </>
  );
};

export default Widgets;
