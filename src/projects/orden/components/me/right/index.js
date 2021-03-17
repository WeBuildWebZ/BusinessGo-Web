import { useSelector } from 'react-redux';

import Spinner from '../../../../../components/Spinner';

const Right = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="right">
      {!project && <Spinner />}
      {project?.configuration.body1.sections.map((section, i) => (
        <div key={i}>
          <h4>{section.title}</h4>
          <h3>{section.subtitle}</h3>
          <p>{section.description}</p>
        </div>
      ))}
      <style jsx>
        {`
          .right {
            min-width: 600px;
            min-height: 700px;
            display: flex;
            justify-content: center;
            flex-flow: column;
          }
          h4 {
            margin-bottom: 0.7em;
            letter-spacing: 1px;
          }
          h4,
          p {
            color: #1c1c1c;
          }
          p:first-letter {
            font-size: 2em;
          }
          h3 {
            width: 70%;
            font-size: 2em;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
          }
          p {
            width: 70%;
            line-height: 1.5em;
          }
          // ===========================
          @media (max-width: 1199px) {
            .right {
              min-height: 60vh;
              min-width: 100vw;
              padding: 1em;
              align-items: center;
            }
            img {
              top: 0;
              left: 0;
            }
          }
          @media (max-width: 500px) {
            p {
              width: 100%;
              line-height: 1.5em;
            }
          }
          @media (max-width: 300px) {
            h3 {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Right;
