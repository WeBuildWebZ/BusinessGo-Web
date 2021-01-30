const Copyright = () => (
  <div className="copyright">
    <center className="text">
      Diseñado por
      <a href="https://www.facebook.com/LEFCOTT" target="_blank">
        {' '}
        WeBuildWebZ
      </a>
      © 2021 todos los derechos reservados.
    </center>
    <style jsx>
      {`
        .copyright {
          display: flex;
          flex-direction: row;
          height: 5vh;
          margin: 14px 0 14px 0;
          justify-content: space-around;
          align-items: center;
        }
        .text {
          padding: 7px;
          border-radius: 5px;
          background-color: lightskyblue;
          box-shadow: 0 0 2px 1px lightskyblue;
          user-select: none;
          transition: 0.7s;
        }
        .text:hover {
          padding-left: 21px;
          padding-right: 21px;
          box-shadow: 0 0 3px 1px lightskyblue;
        }
      `}
    </style>
  </div>
);

export default Copyright;
