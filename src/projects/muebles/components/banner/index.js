import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

export const Banner = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="banner">
      {!project && <Spinner />}
      {project && (
        <>
          <div className="text">
            <h1>{project.configuration.basic_info.title}</h1>
            <h4>{project.configuration.basic_info.subtitle}</h4>
          </div>
        </>
      )}

      <style jsx>
        {`
          .banner {
            width: 100vw;
            height: 100vh;
            background-image: url(/images/banner.jpg);
            background-position: 0;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1em;
          }
          .text {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            border: 4px solid white;
            padding: 1em;
          }
          h1 {
            width: 100%;
            font-size: 5em;
            color: white;
          }
          h4 {
            width: 100%;
            color: white;
          }
        `}
      </style>
    </div>
  );
};
