const Nosotros = () => {
  return (
    <div className="privacyPolicy">
      <h3>privacyPolicy</h3>

      <p className="privacyPolicyContent">privacyPolicyContent</p>

      <style jsx>
        {`
          .privacyPolicy {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            background: #ebebeb;
            padding: 1em;
          }
          .privacyPolicyContent {
            white-space: pre-line;
          }
        `}
      </style>
    </div>
  );
};

export default Nosotros;
