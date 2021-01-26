import { useSelector } from 'react-redux';

import Spinner from '../../../../components/Spinner';

export const Banner = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="banner">
      {!project && <Spinner />}
      {project && (
        <>
          <h1>{project.configuration.basic_info.title}</h1>
          <h4>{project.configuration.basic_info.subtitle}</h4>
        </>
      )}

      <style jsx>
        {`
          .banner {
            width: 100vw;
            height: 90vh;
            background-image: url(/images/banner.jpg);
            filter: blur(1px);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-flow: column;
            padding-left: 3em;
          }
          h1,
          h4 {
            color: white;
            text-shadow: 0 0 15px black;
          }
          h1 {
            font-size: 5em;
          }
        `}
      </style>
    </div>
  );
};
