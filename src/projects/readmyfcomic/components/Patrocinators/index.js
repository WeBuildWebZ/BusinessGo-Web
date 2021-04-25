import { useSelector } from 'react-redux';
import Link from 'next/link';

import { getLanguage } from './lang';
import Slider from './Slider';

const Patrocinators = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="patrocinators">
      <Link href="/patrocinators">
        <a>
          <div className="title">{language.patrocinators}</div>
        </a>
      </Link>
      <Slider />
      <style jsx>
        {`
          .patrocinators {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title {
            width: fit-content;
            font-size: 48px;
            transition: 0.7s;
          }
          .title:hover {
            transform: scale(1.1);
          }
          .title:active {
            transform: scale(1.2);
            transition: 0.1s;
          }
          @media only screen and (max-width: 768px) {
            .patrocinators {
              margin-top: 10px;
            }
            .title {
              font-size: 24px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Patrocinators;
