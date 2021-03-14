import Link from 'next/link';
import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const TopN = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="topNContainer">
      <div className="title">
        {language.topN}
        <div className="discoverMoreComics">{language.discoverMoreComics}</div>
      </div>
      <div className="topN">
        <Link href="#">
          <a>
            <img className="comic" src="/images/comics/comic1.png" />
          </a>
        </Link>
        <Link href="#">
          <a>
            <img className="comic" src="/images/comics/comic2.png" />
          </a>
        </Link>
        <Link href="#">
          <a>
            <img className="comic" src="/images/comics/comic3.png" />
          </a>
        </Link>
        <Link href="#">
          <a>
            <img className="comic" src="/images/comics/comic4.png" />
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          .topNContainer {
            width: 70%;
            margin-left: 15%;
          }
          .title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 36px;
          }
          .topN {
            display: flex;
            flex-direction: row;
          }
          .comic {
            width: 130px;
            height: 130px;
            margin: 10px;
            transition: 0.7s;
          }
          .comic:hover {
            transform: scale(1.1);
          }
          .comic:active {
            transform: scale(1.2);
            transition: 0.1s;
            border-radius: 7px;
          }
          .discoverMoreComics {
            padding: 7px;
            background-color: #f5f556;
            font-size: 22px;
            border-radius: 10px;
            border-style: solid;
            border-width: 1px;
            user-select: none;
            cursor: pointer;
            transition: 0.7s;
          }
          .discoverMoreComics:hover {
            transform: scale(1.05);
          }
          .discoverMoreComics:active {
            transform: scale(1.1);
            transition: 0.1s;
          }
          @media only screen and (max-width: 768px) {
            .topNContainer {
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

export default TopN;
