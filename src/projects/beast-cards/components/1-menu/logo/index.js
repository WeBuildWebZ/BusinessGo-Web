import Link from 'next/link';

import { getAssetUrl } from '../../../../../utils/assets';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a className="title">
        <img width={50} src={getAssetUrl('images/logo.png')} />
        <h2>Monster Cards</h2>
      </a>
    </Link>

    <style jsx>
      {`
        .logo {
          color: white;
          padding-left: 1em;
        }

        .title {
          display: flex;
          justify-content: center;
        }

        a {
          color: white;
        }
        h2 {
          font-size: 2em;
          margin: 0;
          padding: 0;
          padding-left: 0.25em;
        }
      `}
    </style>
  </div>
);

export default Logo;
