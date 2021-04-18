import { useSelector } from 'react-redux';

const Some = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="some">
      <h2>{project?.configuration.body.title}</h2>

      <style jsx>
        {`
          .some {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(120deg, #f6d365 0%, #ed8e2c 100%);
          }

          h2 {
            font-size: 6em;
            height: 100%;
            width: 100vw;
            text-align: center;
            margin: 1em 0;
            color: white;
          }
          // ===================================================
          @media (max-width: 760px) {
            h2 {
              font-size: 5em;
            }
          }
          @media (max-width: 520px) {
            h2 {
              font-size: 3em;
            }
          }
          @media (max-width: 358px) {
            h2 {
              font-size: 2em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Some;
