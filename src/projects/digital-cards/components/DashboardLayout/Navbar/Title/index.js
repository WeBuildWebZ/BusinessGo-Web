import { useSelector } from 'react-redux';

import Breadcrumb2 from '../../../../../../components/Breadcrumb2';

import { getLanguage } from './lang';

const Title = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="title">
      {process.browser ? <Breadcrumb2 items={language.breadcrumbItems[window.location.pathname]} /> : ''}

      <style jsx>
        {`
          .title {
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Title;
