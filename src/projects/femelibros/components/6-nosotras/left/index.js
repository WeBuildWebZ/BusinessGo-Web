import Image from 'next/image';
import { useSelector } from 'react-redux';

const Left = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="left">
      <h3>{project?.configuration.about_us?.title}</h3>
      <br />
      <h4>{project?.configuration.about_us?.subtitle}</h4>

      <p>{project?.configuration.about_us?.description}</p>
      <br />
      <div className="autor">
        <img src={project?.configuration.about_us?.photo} alt="autora" />
        <h6>{project?.configuration.about_us?.name}</h6>
      </div>
      <pre>&#x27F6;</pre>
      <style jsx>
        {`
          .left {
            width: 600px;
          }
          h3 {
            display: inline;
            background: #c83e59;
            color: white;
            padding: 3px;
            box-shadow: 0.1em 0.1em 0.3em #c83e59;
          }
          h4 {
            margin: 1em 0;
          }
          p {
            font-style: italic;
            font-size: 1.5em;
            font-weight: 400;
            color: #756a6f;
            width: 300px;
          }
          .autor {
            display: flex;
            align-items: center;
            width: 300px;
            font-size: 1.5em;
            color: #1c1c1c;
          }
          img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 100%;
            border: 3px solid white;
            margin-right: 0.5em;
          }
          pre {
            font-size: 2.5em;
            color: #c83e59;
          }
          // ===========================================
          @media (max-width: 1199px) {
            .left {
              padding: 1em;
              width: 400px;
            }
          }

          @media (max-width: 333px) {
            .left {
              width: 100%;
            }
            p {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Left;
