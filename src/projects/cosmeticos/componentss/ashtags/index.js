const Ashtags = () => {
  return (
    <div className="ashtags">
      <h4> #Make-Up </h4>
      <h4> #Labial </h4>
      <h4> #Brochas </h4>
      <h4> #Rimel </h4>
      <h4> #Sombras </h4>
      <h4> #Mascaras </h4>
      <h4> #Corrector </h4>

      <style jsx>
        {`
          .ashtags {
            width: 100vw;
            heigth: 10vh;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 1em;
          }
          h4{
            margin:.5em;
          }
        `}
      </style>
    </div>
  );
};

export default Ashtags;
