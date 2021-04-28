import Image from 'next/image';

const Left = () => (
  <div className="left">
    <Image src="/images/image1.jpeg" alt="Picture of the author" width={600} height={700} />
    <style jsx>
      {`
        .left {
          width: 600px;
        }
      `}
    </style>
  </div>
);

export default Left;
