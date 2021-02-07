import { useSelector } from 'react-redux';

import { getLanguage } from './lang';

const YouChoose = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <div className="precios">
      <div className="choose">
        <h3 data-aos="fade-right">{language.youChoose}</h3>
        <p data-aos="fade-left">{language.description}</p>
      </div>

      <style jsx>
        {`
          .precios {
            width: 100vw;
            height: 60vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #1c1c1c;
            padding: 0 1em;
          }

          .choose {
            width: 60em;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 1em;
            padding: 1em;
          }
          h3 {
            width: 100%;
            color: #2f4858;
            font-size: 3em;
          }
          p {
            width: 100%;
            font-size: 1.1em;
          }
          // =========================
          @media (max-width: 636px) {
            .choose {
              flex-flow: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default YouChoose;
