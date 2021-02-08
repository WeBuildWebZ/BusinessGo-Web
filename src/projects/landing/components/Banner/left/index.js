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
          <p>{language.description}</p>
      
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
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }
          img {
            width: 400px;
            height: 400px;
            object-fit: cover;
            border-radius: 5em .5em;
            box-shadow: 0.3em 0.3em 0.5em silver;
          }

          // ================================
          .down {
            padding:1em 0;
          }
          .title {
            width: 100%;
            font-size: 2em;
          }
          p {
            width: 100%;
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
