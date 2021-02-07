import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const Left = props => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="left">
      <span className="top" />
      <span className="down">
        <h5 className="title">{language.title}</h5>
        <span>
          <button className="seeButton">{language.button}</button>
          <h6>{language.description}</h6>
        </span>
      </span>

      <style jsx>
        {`
          .left {
            width: 600px;
            height: 700px;
            display: flex;
            margin-right: 3em;
            flex-flow: column;
          }
          .top,
          .down {
            flex: 1;
            width: 100%;
            height: 100%;
          }
          .top {
            background-image: linear-gradient(to top, hsla(0, 0%, 100%, 1), hsla(0, 0%, 100%, 0.1)),
              url(/images/left-top.jpg);
            background-size: cover;
            background-position: 0 0;
            background-repeat: no-repeat;
            border-radius: 1em;
          }
          // ================================
          .down {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }
          .title {
            font-size: 2.5em;
            flex: 1;
            margin-top: 1.3em;
            padding: 0 0.5em;
            overflow-y: hidden;
          }
          .down span {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
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
          h6 {
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
              width: 100vw;
            }
            .left .top {
              border-radius: 0;
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
