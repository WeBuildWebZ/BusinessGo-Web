import { useSelector } from 'react-redux';

const Boxs = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="container">
      <div className="content">
        {project?.configuration.body.movement_texts.map((text, i) => (
          <div className="box" key={i}>
            <h4>{text}</h4>
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .container {
            overflow-x: hidden;
            padding: 1em 0;
          }
          .content {
            display: flex;
            flex-wrap: nowrap;
            animation: move 15s infinite linear;
            width: 100%;
          }

          .box {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          h4 {
            font-size: 2em;
            background: #ffa489;
            color: white;
            border-radius: 1em;
            box-shadow: 0.5em 0.3em 0.9em #ffa489;
            padding: 0.1em 0.5em;
          }

          @keyframes move {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
          // ============================================
          @media (max-width: 615px) {
            .box {
              width: 150px;
              min-height: 50px;
            }
            h4 {
              font-size: 1.5em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Boxs;
