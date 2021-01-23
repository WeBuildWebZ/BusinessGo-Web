import Image from 'next/image';

const Logo = () => (
  <>
    <Image src="/images/icons/icon.png" alt="Logo" width={150} height={103.125} className="colored" />
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
