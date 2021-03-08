const Right = () => (
  <div className="right">
    <h4>QUE HACEMOS ?</h4>
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, unde. Ad, distinctio?</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt a consequatur voluptatum. Dolorem
      illo quo sapiente odio aut eveniet suscipit eos unde, facere placeat commodi omnis minus eaque atque,
      dicta saepe tempora voluptas odit?
    </p>
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
          color: white;
        }
        h3 {
          width: 70%;
          font-size: 2em;
          color: #6e3e76;
        }
        p {
          width: 70%;
        }
      `}
    </style>
  </div>
);

export default Right;
