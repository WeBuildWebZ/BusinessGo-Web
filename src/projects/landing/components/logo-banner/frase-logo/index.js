import { useSelector } from 'react-redux';

import getLanguage from './lang';

const FraseLogo = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="fraselogo">
      <p>{language.title}</p>

      <style jsx>
        {`
          .fraselogo {
            width: 100%;
            height: 100%;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          p {
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default FraseLogo;
