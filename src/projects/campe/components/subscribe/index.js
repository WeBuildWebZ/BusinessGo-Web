const Subscribe = () => (
  <section className="subscribe">
    <div className="container">
      <div style={{ backgroundImage: 'url(/images/subscribe.jpg)' }} className="subscribe__content">
        <h4>Suscribite a nuestra tienda Online, y recibi ofertas todas las semanas!</h4>

        <form className="subscribe__form">
          <input type="email" placeholder="Correo electronico" />
          <button type="submit" className="btn btn--rounded btn--yellow">
            Suscribirse
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Subscribe;
