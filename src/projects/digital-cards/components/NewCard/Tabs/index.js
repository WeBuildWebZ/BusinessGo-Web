import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const language = getLanguage(useSelector(store => store.language));

  const handleSelectTab = tab => {
    setSelectedTab(tab);
  };

  return (
    <center>
      <div
        className={`tab firstTab${selectedTab === 0 ? ' selectedTab' : ''}`}
        onClick={() => handleSelectTab(0)}
      >
        {language.data}
      </div>
      <div
        className={`tab lastTab${selectedTab === 1 ? ' selectedTab' : ''}`}
        onClick={() => handleSelectTab(1)}
      >
        {language.preview}
      </div>
      <style jsx>
        {`
          .tab {
            display: inline-block;
            padding: 10px;
            background-color: skyblue;
            user-select: none;
            cursor: pointer;
            animation: tabArrive linear 1s;
            transition: 0.7s;
          }
          .tab:hover {
            transform: scale(1.1);
            box-shadow: 0 0 2px 2px skyblue;
          }
          .tab:active {
            transform: scale(1.15);
            box-shadow: 0 0 3px 3px skyblue;
            transition: 0.1s;
          }
          .firstTab {
            border-top-left-radius: 7px;
            border-bottom-left-radius: 7px;
          }
          .lastTab {
            border-top-right-radius: 7px;
            border-bottom-right-radius: 7px;
          }
          .selectedTab {
            border-bottom-style: solid;
            border-bottom-color: blue;
          }
          @keyframes tabArrive {
            0% {
              opacity: 0;
              box-shadow: 0 0 20px 20px skyblue;
            }
          }
        `}
      </style>
    </center>
  );
};

export default Tabs;
