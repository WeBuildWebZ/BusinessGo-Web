import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listForms } from '../../../../../../../services/api/form';
import { setSelectedForm } from '../../../../../../../shared/actions/selectedForm';
import { setSelectedFormSection } from '../../../../../../../shared/actions/selectedFormSection';
import { setAdminSection } from '../../../../../../../shared/actions/adminSection';
import Spinner from '../../../../../../Spinner';
import Button from '../../../../../../Button';

import { getLanguage } from './lang';

const FormsSection = () => {
  const dispatch = useDispatch();
  const language = getLanguage(useSelector(store => store.language));
  const project = useSelector(store => store.project);
  const selectedForm = useSelector(store => store.selectedForm);
  const selectedFormSection = useSelector(store => store.selectedFormSection);
  const adminSection = useSelector(store => store.adminSection);
  const [forms, setForms] = useState(null);

  useEffect(() => {
    listForms(project.code, true).then(({ data: givenForms }) => {
      setForms(givenForms);
    });
  }, []);

  const handleSelectForm = form => {
    dispatch(setAdminSection('forms'));
    dispatch(setSelectedForm(form));
  };

  const handleSelectFormSection = section => {
    dispatch(setSelectedFormSection(section));
  };

  return !forms ? (
    <Spinner />
  ) : (
    <>
      {!forms.length && language.noTables}
      {forms.map((form, i) => {
        const isSelected = form._id === (selectedForm && selectedForm._id) && adminSection === 'forms';

        return (
          <div key={i}>
            <Button
              key={1}
              text={form.name}
              onClick={() => handleSelectForm(form)}
              style={{ marginTop: 10 }}
              selected={isSelected}
            />
            {isSelected && (
              <>
                {form.editable && (
                  <Button
                    key={i + forms.length}
                    text={language.editForm}
                    onClick={() => handleSelectFormSection('edit')}
                    style={{ marginTop: 10, marginLeft: '15%', width: '70%', fontSize: 11 }}
                    selected={selectedFormSection === 'edit'}
                  />
                )}
                <Button
                  key={i + forms.length * 2}
                  text={language.showResponses}
                  onClick={() => handleSelectFormSection('show')}
                  style={{ marginTop: 10, marginLeft: '15%', width: '70%', fontSize: 11 }}
                  selected={selectedFormSection === 'show'}
                />
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default FormsSection;
