import Image from "next/image";

const Bottom = () => {
  return (
    <div className="right">
      <Image
        src="/images/banner.png"
        alt="banner of carpediem"
        width={1200}
        height={500}
      />
      <style jsx>
        {`
          .right {
            width: 100vw;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Bottom;
