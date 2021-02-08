import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const BannerSegundo = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="about">
      <div className="left" data-aos="fade-right">
        <img src="/images/segundo-banner.jpg" alt="segunda imagen banner" className="radius" />
      </div>
      <div className="right" data-aos="fade-left">
        <div className="textlayout">
          <h3>{language.title}</h3>
          <div data-aos="flip-right">
            <span>
              <p>{language.message}</p>
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100%;
            padding: 1em;
          }
          img {
            width: 400px;
            height: 400px;
          }

          .left {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1em;
            position: relative;
          }
          p {
            font-size: 1.4em;
            font-style: italic;
          }

          .left::after {
            content: '';
            position: absolute;
            width: 14em;
            height: 14em;
            top: 0;
            right: 20%;
            border-radius: 50%;
            border: 5px solid white;
            background: #00a1e5;
          }
          .left::before {
            content: '';
            position: absolute;
            width: 14em;
            height: 14em;
            bottom: 5%;
            left: 10%;
            border-radius: 50%;
            background: #ffb52a;
            z-index: -10;
          }

          .radius {
            border-radius: 50%;
          }

          .right {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1em;
            position: relative;
          }
          
          .right:before {
            content: '';
            position: absolute;
            width: 6em;
            height: 6em;
            right: 7%;
            border: 9px solid #00a1e5;
            border-radius: 50%;
            box-shadow: 2px 2px 0.5em #00a1e5;
          }

          .textlayout {
            width: 70%;
            height: 50%;
            border: 3px solid #ffb52a;
            border-radius: 1em;
            padding: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            box-shadow: 2px 2px 1em silver;
            position: relative;
            background: hsla(0, 0%, 100%, 0.8);
            backdrop-filter:blur(2em)
          }

          .textlayout:after {
            content: '';
            position: absolute;
            width: 1em;
            height: 1em;
            top: 0;
            left: 1em;
            border: 3px solid silver;
            border-radius: 50%;
          }
          .textlayout::before {
            content: '';
            position: absolute;
            width: 3em;
            height: 3em;
            top: -7em;
            left: 4em;
            border: 6px solid #ffb52a;
            border-radius: 50%;
            box-shadow: 2px 2px 0.5em silver;
          }

          .textlayout h3 {
            width: 100%;
            text-align: left;
            color: #1c1c1c;
            font-size: 2em;
            margin-bottom: 0.5em;
          }
          .textlayout p {
            width: 100%;
            text-align: left;
          }
          .textlayout h2 {
            margin-top: 1em;
            font-size: 2em;
            text-align: center;
            color: black;
          }
          // =======================================================
          @media (max-width: 1081px) {
            .about {
              height: 100%;
              flex-flow: column-reverse;
              padding: 1em;
            }
            .textlayout {
              background: hsla(0, 0%, 100%, 0.331);
              backdrop-filter: blur(1em);
              margin-bottom: 2em;
            }

            .textlayout:after {
              width: 1em;
              height: 1em;
              top: 0;
              left: 0;
            }
            
            .right:before {
              top: 0;
              right: 1em;
              background: #00a1e5;
            }
            .left::after {
              width: 8em;
              height: 8em;
              top: 0;
              left: 0;
            }
          }

          @media (max-width: 500px) {
            img {
              width: 300px;
              height: 300px;
            }
          }
          @media (max-width: 408px) {
            .textlayout {
              width: 100%;
            }
            img {
              width: 250px;
              height: 250px;
            }
            .left::after {
              width: 5em;
              height: 5em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BannerSegundo;
