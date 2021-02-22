import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { showForm } from '../../../../../../../../services/api/form';
import FieldRenderer from '../../../../../../../FieldRenderer';

import { getLanguage } from './lang';

const Widgets = () => {
  const project = useSelector(store => store.project);
  const language = getLanguage(useSelector(store => store.language));
  const [form, setForm] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    showForm('all', 'social_networks').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, []);

  return (
    <>
      <h3>{language.title}</h3>
      {form && <FieldRenderer fields={form.fields} data={data} onChange={setData} saveButton />}
    </>
  );
};

export default Widgets;
