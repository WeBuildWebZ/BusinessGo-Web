import Image from 'next/image';

const Logo = () => (
  <>
<<<<<<< HEAD
    <Image
      src="/images/icons/wow2.png"
      alt="Picture of the author"
      width={200}
      height={200}
    />
=======
    <Image src="/images/icons/icon.png" alt="Logo" width={70} height={70} className="colored" />
    <style jsx>
      {`
        .colored {
          background: yellow;
        }
      `}
    </style>
>>>>>>> 39338c1690880b04e34b5468c5c08548817c0a70
  </>
);

export default Logo;
