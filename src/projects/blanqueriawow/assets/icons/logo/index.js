import Image from 'next/image';

const Logo = () => (
  <>
    <Image src="/images/icons/icon.png" alt="Logo" width={200} height={200} className="colored" />
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
