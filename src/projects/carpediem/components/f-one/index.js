import Image from 'next/image';

const One = () => (
  <div className="one">
    <Image src="/images/banner-test.jpg" alt="Picture of carpediem" width={1200} height={1000} />
    <style jsx>
      {`
        .one {
          width: 100vw;
          min-height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
);

export default One;
