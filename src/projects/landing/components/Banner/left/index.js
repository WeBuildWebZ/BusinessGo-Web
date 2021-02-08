import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Left = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="left">
      <span className="top">
        <img src="/images/left-top.jpg" alt="esta es la img del left top" />
      </span>
      <span className="down">
        <h5 className="title">{language.title}</h5>
        <span>
          <button className="seeButton">{language.button}</button>
          <p>{language.description}</p>
        </span>
      </span>

      <style jsx>
        {`
          .left {
            width: 600px;
            height: 100%;
            display: flex;
            margin-right: 3em;
            flex-flow: column;
          }
          .top,
          .down {
            width: 100%;
            height: 100%;
            flex: 1;
          }
          img {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border-radius: 1em;
            box-shadow: 0.3em 0.3em 0.5em silver;
          }

          // ================================
          .down {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }
          .title {
            width: 100%;
            height: 100%;
            font-size: 2.5em;
            flex: 1;
            margin-top: 1.3em;
            padding: 0 0.5em;
          }
          .down span {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
            margin: 1em;
          }
          .seeButton {
            padding: 0.3em 3.5em;
            margin-right: 1em;
            outline: none;
            border: none;
            background: #1c1c1c;
            color: white;
            border-radius: 0.3em;
            transition: all 0.2s ease-in-out;
          }
          .seeButton:hover {
            transform: scale(1.1);
            border-radius: 0;
          }
          p {
            padding-top: 7px;
          }
          // =====================================================================
          @media (max-width: 1286px) {
            .left {
              margin-right: 0;
            }
          }

          @media (max-width: 605px) {
            .left {
              width: 100%;
            }
            .left .top {
              border-radius: 0;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 388px) {
            .down span {
              flex-flow: column-reverse;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Left;
