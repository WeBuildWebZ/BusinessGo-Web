import Image from "next/image";

const Top = () => {
  return (
    <div className="left">
      <Image
        src="/images/logo-white.png"
        alt="logo-white"
        width={780}
        height={240}
      />
      <h2>Mira los mejores precios.</h2>

      <style jsx>
        {`
          .left {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            overflow: hidden;
          }

          h2 {
            color: white;
            font-size: 3em;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Top;
