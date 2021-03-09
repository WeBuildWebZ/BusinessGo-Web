import { useState } from 'react';
import { useSelector } from 'react-redux';

import WindowNavbar from './WindowNavbar';
import Plans from './Plans';
import { getLanguage } from './lang';

const Windows = () => {
  const language = getLanguage(useSelector(store => store.language));
  const [currentWindow, setCurrentWindow] = useState(0);
  const [plan, setPlan] = useState(null);

  const handleSelectPlan = newPlan => {
    setPlan(newPlan);
    setCurrentWindow(currentWindow + 1);
  };

  return (
    <div className="window">
      {currentWindow === 0 && (
        <>
          <WindowNavbar title={language.selectPlan} />
          <Plans onSelectPlan={handleSelectPlan} />
        </>
      )}
      <style jsx>
        {`
          .window {
            margin: 40px;
            width: 300px;
            height: 250px;
            background-color: whitesmoke;
            border-radius: 10px;
            animation: appear linear 0.7s;
            box-shadow: 50px 50px 50px rgba(245, 245, 245, 0.5);
            transition: 0.7s;
            overflow-x: hidden;
            overflow-y: auto;
          }
          .window:hover {
            box-shadow: 50px 50px 50px rgba(245, 245, 245, 0.5), 0 0 5px 1px whitesmoke;
          }

          ::-webkit-scrollbar {
            width: 0; /* Remove scrollbar space */
            background: transparent; /* Optional: just make scrollbar invisible */
          }
          /* Optional: show position indicator in red */
          @keyframes appear {
            0% {
              transform: translate(-200%, 100%);
              width: 0;
              height: 0;
            }
          }
          @media only screen and (max-width: 768px) {
            .window {
              width: 80%;
              margin-left: 10%;
              margin-right: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Windows;
