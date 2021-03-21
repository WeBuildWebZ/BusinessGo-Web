import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Breadcrumb2 from '../../../Breadcrumb2';

import { getLanguage } from './lang';

const Title = () => {
  const router = useRouter();
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="title">
      <Breadcrumb2 items={language.breadcrumbItems[router.pathname]} />

      <style jsx>
        {`
          .title {
            position: relative;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Title;
