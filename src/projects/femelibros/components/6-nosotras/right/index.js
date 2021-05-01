import Image from 'next/image';

const Right = () => (
  <div className="right">
    <Image src="/images/image4.jpeg" alt="Picture of the author" width={600} height={400} />

    <style jsx>
      {`
        .right {
          width: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
        // ==========================================

        @media (max-width: 600px) {
          .right {
            width: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Right;
