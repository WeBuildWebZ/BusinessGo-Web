<<<<<<< HEAD
const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={
          {
            backgroundImage: 'url(/images/subscribe.jpg)',
            backgroundPosition: 'bottom'

          }
          } className="subscribe__content">
          <h4>Ponte en Contacto conmigo</h4>

          <form className="subscribe__form">
            <button className="btn btn--rounded btn--yellow">
            <span className="ico">&#8628;</span>
            </button>
            <style jsx>{`
            .ico{
                font-size:2.5em;
                color:white;
                padding:0 .1em;
            }
            `}</style>
          </form>
        </div>
=======
const Subscribe = () => (
  <section className="subscribe">
    <div className="container">
      <div style={{ backgroundImage: 'url(/images/subscribe.jpg)' }} className="subscribe__content">
        <h4>Suscribite a nuestra tienda Online, y recibi ofertas todas las semanas!</h4>

        <form className="subscribe__form">
          <input type="email" placeholder="Correo electrénico" />
          <button type="submit" className="btn btn--rounded btn--yellow">
            Suscribirse
          </button>
        </form>
>>>>>>> 999910e3687007923d988a10278e1affb36fe937
      </div>
    </div>
  </section>
);

export default Subscribe;
