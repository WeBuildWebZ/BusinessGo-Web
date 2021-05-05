import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import Logo from '../1-menu/logo';

const Footer = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="footer" id="footer">
      <div className="bottom">
        <span className="column">
          <h3>INFORMACION:</h3>
          <span className="row">
            <img src="/icons/house.png" alt="house icon" />
            <p>{project?.configuration.contact?.location}</p>
          </span>

          <span className="row">
            <img src="/icons/contact.png" alt="contact icon" />
            <p>
              <a href="#" target="blank">
                {project?.configuration.contact?.email}
              </a>
            </p>
          </span>
          <span className="row">
            <img src="/icons/privacy_policy.png" alt="contact icon" />
            <p>
              <Link href="/privacy_policy">
                <a>Política de privacidad</a>
              </Link>
            </p>
          </span>
        </span>
      </div>

      <style jsx>
        {`
          .footer {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #756a6f;
          }

          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            width: 100%;
            height: 100%;
          }

          .column {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            padding: 1em;
            border-radius: 1em;
          }

          // ========================
          h3 {
            font-size: 2em;
            color: white;
            margin: 0;
          }
          svg {
            width: 30px;
            height: 30px;
            margin: 2em 0.5em;
            color: silver;
            cursor: pointer;
          }
          svg:hover {
            width: 30px;
            height: 30px;
            color: #d99c8a;
          }
          // ===========================
          .row {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0.5em 0 0 0.5em;
          }
          h3 {
            margin-top: 1em;
            color: white;
          }
          img {
            width: 25px;
            height: 25px;
          }
          p {
            color: grey;
            margin: 0;
            padding: 0 0 0 0.5em;
          }
          .pointer {
            cursor: pointer;
            color: white;
          }

          a {
            color: grey;
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
