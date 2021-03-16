import Link from 'next/link';
import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const CheckForums = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="checkForumsContainer">
      {language.checkForumsMessage}
      <Link href="/forums">
        <div className="goToForums">{language.goToForums}</div>
      </Link>
      <style jsx>
        {`
          .checkForumsContainer {
            margin-top: 30px;
            font-size: 36px;
          }
          .goToForums {
            width: fit-content;
            margin-top: 15px;
            padding: 8px;
            font-size: 26px;
            border-radius: 10px;
            border-style: solid;
            border-width: 1px;
            background-color: #ffb4b4;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .goToForums:hover {
            transform: scale(1.05);
          }
          .goToForums:active {
            transform: scale(1.1);
            transition: 0.1s;
          }
        `}
      </style>
    </div>
  );
};

export default CheckForums;
