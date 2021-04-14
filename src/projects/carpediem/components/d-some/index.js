const Some = () => {
  return (
    <div className="some">
      <h2>
        Somos Lideres <br /> en el Mercado
      </h2>

      <style jsx>{`
        .some {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        h2 {
          background-attachment: fixed;
          background-image: url(/images/paying.jpg);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          font-size: 12em;
          line-height: 0.8em;
          height: 100%;
          width: 100vw;
          text-align: center;
          letter-spacing: -9px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Some;
