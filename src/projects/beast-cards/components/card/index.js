const Card = item => (
  <div className="card">
    <style jsx>
      {`
        .card {
          width: 350px;
          height: 400px;
          border: 0.3em solid #ebebeb;
          border-radius: 10px;
          padding: 1em;
          margin: 0.5em;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
        .card:hover {
          border: 0.3em solid #f5b723;
        }
      `}
    </style>
  </div>
);

export default Card;
