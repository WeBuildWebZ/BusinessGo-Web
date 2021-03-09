const Right = () => (
  <div className="right">
    <h4>QUE HACEMOS ?</h4>
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, unde. Ad, distinctio?</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a consequatur voluptatum. Dolorem
      illo quo sapiente odio aut eveniet suscipit eos unde, facere placeat commodi omnis minus eaque atque,
      dicta saepe tempora voluptas odit?
    </p>
    <button>Ver</button>
    <style jsx>
      {`
        .right {
          width: 100%;
          min-height: 350px;
          flex: 1;
          display: flex;
          justify-content: center;
          flex-flow: column;
        }
        h4 {
          margin-bottom: 0.7em;
        }
        h4,
        p {
          color: #1c1c1c;
        }
        h3 {
          width: 70%;
          font-size: 2em;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-image: linear-gradient(to right, #6e3e76 0%, #da7c7a 100%);
        }
        p {
          width: 70%;
        }
        button {
          width: 150px;
          padding: 1em 0;
          border: none;
          outline: none;
          background: #f8ac30;
          color: white;
        }
      `}
    </style>
  </div>
);

export default Right;
