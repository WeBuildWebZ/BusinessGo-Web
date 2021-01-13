const Subscribe = () => (
  <section className="subscribe">
    <div className="container">
      <div
        style={{
          backgroundImage: 'url(/images/subscribe.jpg)',
          backgroundPosition: 'bottom'
        }}
        className="subscribe__content"
      >
        <h4>Ponte en Contacto conmigo</h4>

        <form className="subscribe__form">
          <button className="btn btn--rounded btn--yellow">
            <span className="ico">&#8628;</span>
          </button>
          <style jsx>
            {`
              .ico {
                font-size: 2.5em;
                color: white;
                padding: 0 0.1em;
              }
            `}
          </style>
        </form>
      </div>
    </div>
  </section>
);

export default Subscribe;
