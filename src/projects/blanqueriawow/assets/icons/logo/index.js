import Image from 'next/image';

const Logo = () => (
  <>
    <Image src="/images/icons/icon.png" alt="Logo" width={70} height={70} className="colored" />
    <style jsx>
      {`
        .colored {
          background: yellow;
        }
      `}
    </style>
  </>
);

export default Logo;
