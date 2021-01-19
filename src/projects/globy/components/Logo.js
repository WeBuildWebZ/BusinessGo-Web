import { useSelector } from 'react-redux';

import Spinner from '../../../components/Spinner';

const Logo = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="logo">
      {!project && <Spinner />}
      {project && (
        <h1>
          {`${project.configuration.basic_info.title} `}
          <br />
          {` ${project.configuration.basic_info.subtitle}`}
        </h1>
      )}

      <style jsx>{`
        .logo {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          align-self: flex-start;
          width: 50vw;
          height: 30vh;
        }
        h1 {
          color: black;
          line-height: 1.7em;
          text-align: center;
          font-family: 'Bitter', serif;
          font-weight: 700;
        }
        h1::first-line {
          font-size: 3em;
          color: #86a8e7;
        }
        @media (max-width: 1000px) {
          .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
        }
        @media (max-width: 430px) {
          .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }

          h1 {
            line-height: 1em;
          }
          h1::first-line {
            font-size: 1em;
            color: #86a8e7;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
