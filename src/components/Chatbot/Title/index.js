const Title = () => (
  <div className="titleContainer">
    <div className="title">Globy S.A</div>
    <style jsx>
      {`
        .titleContainer {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          height: 50px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background: linear-gradient(to right, rgb(152, 130, 187), rgb(110, 72, 170));
          transition: 0.7s;
        }
        .titleContainer:hover {
          background: linear-gradient(to right, rgb(169, 155, 192), rgb(110, 72, 170));
        }
        .title {
          text-align: center;
          color: whitesmoke;
          text-shadow: 1px 1px 2px whitesmoke;
        }
      `}
    </style>
  </div>
);

export default Title;
