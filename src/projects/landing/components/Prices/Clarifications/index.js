import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Clarifications = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="clarifications">
      <h1>{language.clarifications}</h1>
      <ul className="list">
        {language.items.map(item => (
          <li className="item">{item}</li>
        ))}
      </ul>
      <style jsx>
        {`
          .clarifications {
            margin: 21px 0 21px 0;
          }
          .list {
            margin-left: 21px;
          }
          .item {
            margin: 7px;
          }
        `}
      </style>
    </div>
  );
};

export default Clarifications;
