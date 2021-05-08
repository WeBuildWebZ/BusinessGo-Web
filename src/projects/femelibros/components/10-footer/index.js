import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import Logo from '../1-menu/logo';

const Footer = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="footer" id="footer">
      <a href="/">{project?.configuration.contact?.location}</a>

      <a href={project?.configuration.contact?.email} target="blank">
        Correo
      </a>

      <Link href="/privacy_policy">
        <a>Política de privacidad</a>
      </Link>

      <style jsx>
        {`
          .footer {
            width: 100vw;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            background: #756a6f;
            color: white;
          }

          a {
            color: white;
            margin: 1em;
          }
        `}
      </style>
    </div>
  );
};
export default Footer;
