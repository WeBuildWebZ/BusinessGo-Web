export const Logo = () => (
  <div className="logo">
    <img src="/favicon.png" width={50} />
    <h4> Horacio Muebles</h4>
    <style jsx>
      {`
        .logo {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .fa-dolly {
          width: 50px;
          height: 150px;
          color: pink;
        }
      `}
    </style>
  </div>
);
