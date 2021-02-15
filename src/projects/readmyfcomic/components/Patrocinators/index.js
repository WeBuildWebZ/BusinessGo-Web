import { useSelector } from 'react-redux';

import { getLanguage } from './lang';
import Slider from './Slider';

const Patrocinators = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="patrocinators">
      <div className="title">{language.patrocinators}</div>
      <Slider />
      <style jsx>
        {`
          .title {
            text-align: center;
            font-size: 48px;
          }
        `}
      </style>
    </div>
  );
};

export default Patrocinators;
