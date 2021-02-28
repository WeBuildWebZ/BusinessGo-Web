import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const LoadingText = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="loadingText">
      {language.title}
      <style jsx>
        {`
          .loadingText {
            position: absolute;
            transform: translate(-50%, 100%);
            left: 50%;
            top: 50%;
            user-select: none;
            animation: loading 1s infinite;
          }
          @keyframes loading {
            0% {
              transform: translate(-50%, 100%) rotate(0);
            }
            50% {
              font-size: 80px;
            }
            100% {
              transform: translate(-50%, 100%) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingText;
