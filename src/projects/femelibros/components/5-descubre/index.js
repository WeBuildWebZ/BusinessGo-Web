import { useSelector } from 'react-redux';

import Left from './left';
import Right from './right';

const Descubre = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="descubre" id="descubre">
      <h3 data-aos="fade-left">{project?.configuration.body?.title1}</h3>
      <h2 data-aos="fade-right">{project?.configuration.body?.title2}</h2>
      <span>
        {project?.configuration.body?.texts?.map((text, i) => (
          <p key={i} data-aos="fade-left">
            {text.text}
          </p>
        ))}
      </span>

      <Left />
      <Right />

      <style jsx>
        {`
          .descubre {
            width: 100vw;
            min-height: 100vh;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 2em 0 3em 0;
          }
          h2,
          h3 {
            white-space: pre-line;
          }

          h3 {
            color: #756a6f;
            font-size: 5em;
            padding-left: 3em;
            margin-top: 0.5em;
            position: relative;
            z-index: 100;
          }

          h3::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #756a6f;
            color: white;
            transform: scaleX(0);
            transform-origin: left;
            transition: 0.3s;
            top: 0;
            left: 0;
          }

          // ==========================

          h2 {
            width: 100%;
            color: #756a6f;
            font-size: 5em;
            text-align: right;
            padding-right: 3em;
            margin-bottom: 0.5em;
          }

          // =====================
          span {
            width: 100vw;
          }
          p {
            width: 450px;
            padding: 0.5em;
            background: #f7ead7;
            font-size: 1.5em;
            font-style: italic;
            margin: 0 0 3em 8em;
            border: 3px solid #756a6f;
            border-radius: 1em;
            box-shadow: 0.2em 0.2em 0.2em silver;
          }
          // ==============================================

          @media (max-width: 680px) {
            .descubre {
              width: 100%;
              padding: 0 1em;
            }
            h3,
            h2 {
              font-size: 3em;
              padding-left: 0;
            }
            p {
              width: 450px;
              margin: 1em 0;
            }
          }

          @media (max-width: 450px) {
            h3,
            h2 {
              font-size: 1.5em;
            }
            p {
              width: 300px;
            }
          }

          @media (max-width: 325px) {
            p {
              width: 100vw;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Descubre;
