import { useSelector } from 'react-redux';

import Layout from '../../layout';

import { getLanguage } from './lang';

const Nosotros = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Layout>
      <div className="privacyPolicy">
        <h3>{language.privacyPolicy}</h3>

        <p className="privacyPolicyContent">{language.privacyPolicyContent}</p>

        <style jsx>
          {`
            .privacyPolicy {
              width: 100vw;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column;
              background: #ebebeb;
              padding: 1em;
            }
            .privacyPolicyContent {
              white-space: pre-line;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Nosotros;
