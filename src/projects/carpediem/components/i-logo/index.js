import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <Image src="/images/logo.png" width={130} height={50} alt="logo" />
      </a>
    </Link>
    <style jsx>
      {`
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 130px;
          height: 50px;
        }
      `}
    </style>
  </div>
);

export default Logo;
