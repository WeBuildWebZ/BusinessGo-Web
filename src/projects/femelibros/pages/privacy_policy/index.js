import { useSelector } from 'react-redux';

import Menu from '../../components/1-menu/index';
import WeBuilWebz from '../../../../components/webuildwebz';

import { getLanguage } from './lang';

const Nosotros = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <>
      <Menu />
      <div className="privacyPolicy">
        <h3>{language.privacyPolicy}</h3>

        <p className="privacyPolicyContent">{language.privacyPolicyContent}</p>
        <WeBuilWebz />

        <style jsx>
          {`
            .privacyPolicy {
              width: 100vw;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column;
              background: #ebebeb;
              padding: 1em;
            }
            .privacyPolicyContent {
              white-space: pre-line;
              width: 100vw;
              height: 100vh;
              margin-top: 2em;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Nosotros;
