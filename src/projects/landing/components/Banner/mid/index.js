const Mid = () => (
  <div className="mid">
    <style jsx>
      {`
        .mid {
          flex: 1;
          width: 100%;
          height: 100%;
        }
        @media (max-width: 1286px) {
          .mid {
            display: none;
          }
        }
      `}
    </style>
  </div>
);

export default Mid;
