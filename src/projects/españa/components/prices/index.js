const Prices = () => {
  return (
    <div className="prices">
      <div className="card">price</div>
      <div className="card">price</div>
      <div className="card">price</div>

      <style jsx>{`
        .prices {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          background: #da7c7a;
        }
        .card {
          width: 18em;
          height: 30em;
          margin: 0.5em;
          border-radius: 1em;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default Prices;
