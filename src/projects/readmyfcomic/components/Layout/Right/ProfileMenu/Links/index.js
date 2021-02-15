import Link from 'next/link';
import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Links = () => {
  const session = useSelector(store => store.session);
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div>
      <Link href="/profile">
        <a className="link">{language.profile}</a>
      </Link>
      <br />
      <Link href="/comics">
        <a className="link">{language.comics}</a>
      </Link>
      <br />
      <Link href="/publish">
        <a className="link">{language.publish}</a>
      </Link>
      <br />
      <Link href="/favorites">
        <a className="link">{language.favorites}</a>
      </Link>
      <br />
      <a className="link" href="#">
        {language.logout}
      </a>
      <style jsx>
        {`
          .link {
            margin-left: 5px;
            font-size: 18px;
            transition: 0.7s;
          }
          .link:hover {
            transform: scale(1.5);
            margin-left: 9px;
          }
        `}
      </style>
    </div>
  );
};

export default Links;
