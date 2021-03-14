import Link from 'next/link';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Item from './Item';
import Search from './Search';
import { getLanguage } from './lang';

const ButtonPanel = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="buttonPanel">
      <Item selected={props.page === 'frontPage'}>
        <Link href="/">
          <a className="button">{language.frontPage}</a>
        </Link>
      </Item>
      <Item selected={props.page === 'findComic'}>
        <Link href="/comics">
          <a className="button">{language.findComic}</a>
        </Link>
      </Item>
      <Item selected={props.page === 'findProfile'}>
        <Link href="/profiles">
          <a className="button">{language.findProfile}</a>
        </Link>
      </Item>
      <Item selected={props.page === 'forum'}>
        <Link href="/forum">
          <a className="button">{language.forum}</a>
        </Link>
      </Item>
      <Item selected={props.page === 'contact'}>
        <Link href="/contact">
          <a className="button">{language.contact}</a>
        </Link>
      </Item>
      <Item selected={false} last>
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
            text-align: center;
          }
          @media only screen and (max-width: 768px) {
            .button {
              font-size: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

ButtonPanel.propTypes = {
  page: PropTypes.string.isRequired
};

export default ButtonPanel;
