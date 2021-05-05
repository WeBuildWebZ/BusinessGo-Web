import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import Logo from '../1-menu/logo';

const Footer = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="footer" id="footer">
      <p>{project?.configuration.contact?.location}</p>

      <p>
        <a href="#" target="blank">
          {project?.configuration.contact?.email}
        </a>
      </p>

      <p>
        <Link href="/privacy_policy">
          <a>Política de privacidad</a>
        </Link>
      </p>

      <style jsx>
        {`
          .footer {
            width: 100vw;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #756a6f;
            color: white;
          }

          p {
            color: white;
            margin: 0;
          }
          .pointer {
            cursor: pointer;
            color: white;
          }

          a {
            color: white;
            margin: 1em;
          }

          @media (max-width: 840px) {
            .bottom {
              flex-flow: column;
            }
            .column {
              width: 100%;
              padding: 1em;
              border-radius: 0;
              display: flex;
              justify-content: center;
              flex-flow: column;
            }
            .row {
              padding: 0 0 1em 1em;
            }
          }
        `}
      </style>
    </div>
  );
};
export default Footer;
