import Link from 'next/link';
import { useSelector } from 'react-redux';

import Item from './Item';
import Search from './Search';
import { getLanguage } from './lang';

const ButtonPanel = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="buttonPanel">
      <Item>
        <Link href="/">
          <a className="button">{language.frontPage}</a>
        </Link>
      </Item>
      <Item>
        <Link href="/comics">
          <a className="button">{language.findComic}</a>
        </Link>
      </Item>
      <Item>
        <Link href="/profiles">
          <a className="button">{language.findProfile}</a>
        </Link>
      </Item>
      <Item>
        <Link href="/forum">
          <a className="button">{language.forum}</a>
        </Link>
      </Item>
      <Item>
        <Link href="/contact">
          <a className="button">{language.contact}</a>
        </Link>
      </Item>
      <Item last>
        <Search />
      </Item>
      <style jsx>
        {`
          .buttonPanel {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 30px;
          }
          .button {
            margin: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default ButtonPanel;
