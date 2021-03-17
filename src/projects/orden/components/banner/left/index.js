import { useSelector } from 'react-redux';
import Link from 'next/link';

import Spinner from '../../../../../components/Spinner';

const Left = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="text">
      <div className="content">
        {!project && <Spinner />}
        <p>{project?.configuration.basic_info.description}</p>
        <h2>{project?.configuration.basic_info.title}</h2>
        <h2>{project?.configuration.basic_info.title2}</h2>

        <Link href="/#nosotros">
          <button>
            <a>{project?.configuration.basic_info.view_button}</a>
          </button>
        </Link>
      </div>
      <style jsx>
        {`
          .text {
            min-width: 600px;
            min-height: 90vh;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            z-index: 1;
          }
          .content {
            width: 600px;
            display: flex;
            flex-flow: column;
          }
          p {
            font-weight: bold;
            color: white;
            letter-spacing: 1px;
          }
          p::first-letter {
            font-size: 2em;
          }
          h2 {
            font-size: 5em;
            color: white;
            font-family: playfair display;
            white-space: pre-line;
          }
          h2:nth-child(3) {
            padding-left: 2em;
            margin: 0 0 0.3em 0;
          }

          // ==============================
          @media (max-width: 600px) {
            .text {
              justify-content: center;
              width: 100vw;
              min-height: 80vh;
            }
            .content {
              width: 100vw;
              padding: 0 1em;
            }
            h2 {
              line-height: 0.9em;
            }
            h2:nth-child(3) {
              padding-left: 0;
              margin: 0 0 0.3em 0;
            }
            button {
              margin: auto;
            }
          }
          @media (max-width: 790px) {
            h2 {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Left;
