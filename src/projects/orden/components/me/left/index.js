import { useSelector } from 'react-redux';

const Left = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="left">
      {project && <img src={project.configuration.body1.photo} alt="" />}
      <style jsx>
        {`
          .left {
            min-width: 600px;
            min-height: 700px;
            position: relative;
          }
          img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 3px solid white;
            object-fit: cover;
            position: absolute;
            top: 0;
            right: 2em;
          }
          // ===========================================
          @media (max-width: 1199px) {
            .left {
              min-height: 22vh;
              min-width: 100vw;
              padding: 0 1em;
            }
            img {
              top: 0;
              left: 11em;
            }
          }
          @media (max-width: 522px) {
            img {
              top: 0;
              left: 1em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Left;
