import { useEffect, useState } from 'react';

import FieldRenderer from '../../../../components/FieldRenderer';
import { showForm } from '../../../../services/api/form';
import Layout from '../layout';
import * as constants from '../../constants';

const Blog = () => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    showForm(constants.PROJECT_CODE, 'contact').then(({ data: givenForm }) => {
      setForm(givenForm);
    });
  }, []);

  return (
    <Layout>
      <div className="blog">
        <h3 className="title">Contacto</h3>
        <div className="formContainer">
          {form && <FieldRenderer fields={form.fields} saveButton saveButtonText="Enviar" />}
        </div>
        <style jsx>
          {`
            .blog {
              width: 100vw;
              display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
            }
            .title {
              margin-top: 100px;
              color: #c800cd;
            }
            .formContainer {
              width: 80%;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Blog;
