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
            min-height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          h2 {
            background-attachment: fixed;
            background-image: url(/images/paying.jpg);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            font-size: 12em;
            line-height: 0.8em;
            min-height: 100%;
            width: 100vw;
            text-align: center;
            letter-spacing: -9px;
            margin: 1em 0;
          }
          // ===================================================
          @media (max-width: 760px) {
            h2 {
              font-size: 8em;
            }
          }
          @media (max-width: 520px) {
            h2 {
              font-size: 6em;
            }
          }
          @media (max-width: 358px) {
            h2 {
              font-size: 4em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Some;
