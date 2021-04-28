import Image from 'next/image';

const Right = () => (
  <div className="right">
    <div className="top">
      <div className="text">
        <h3>
          Ebooks <br />
          Digitales
        </h3>
      </div>
      <Image src="/images/image2.jpeg" alt="Picture of the author" width={300} height={350} />
    </div>
    <div className="bottom">
      <Image
        src="/images/image3.jpeg"
        alt="Picture of the author"
        width={600}
        height={350}
        className="margined"
      />
    </div>
    <style jsx>
      {`
        .right {
          width: 600px;
          min-height: 700px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
        // ===========================
        .top {
          width: 100%;
          min-height: 350px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex: 1;
          flex-wrap: wrap;
        }
        .text {
          width: 300px;
          height: 350px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h3 {
          font-size: 3em;
          line-height: 0.9em;
        }
        // ==============================
        .bottom {
          width: 100%;
          height: 350px;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 4px solid white;
        }

        // =====================================================================
        @media (max-width: 599px) {
          .text {
            width: 100%;
            display: flex;
            justify-content: flex-end;
          }
          h3 {
            padding: 1em;
            background: coral;
            color: white;
          }
          .top {
            margin-bottom: 2em;
          }
        }
      `}
    </style>
  </div>
);

export default Right;
