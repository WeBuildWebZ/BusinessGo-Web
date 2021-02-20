import Link from 'next/link';

import Layout from '../layouts/Main';

const LoginPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a>
              <i className="icon-left" />
              Volver a la tienda
            </a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">Log in</h2>
          <p className="form-block__description">
            Registrate utilizando tu correo electrónico, o tambien podes usar Facebook o Gmail, es más fácil,
            animate!
          </p>

          <form className="form">
            <div className="form__input-row">
              <input className="form__input" placeholder="email" type="text" />
            </div>

            <div className="form__input-row">
              <input className="form__input" type="password" placeholder="Password" />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className="checkbox checkbox--sm">
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check" />
                  <p>Mantenerme conectado</p>
                </label>
              </div>
              <a href="#" className="form__info__forgot-password">
                Olvide mi contraseña
              </a>
            </div>

            <div className="form__btns">
              <button type="button" className="btn-social fb-btn">
                <i className="icon-facebook" />
                Facebook
              </button>
              <button type="button" className="btn-social google-btn">
                <img src="/images/icons/gmail.svg" alt="gmail" /> Gmail
              </button>
            </div>

            <button type="button" className="btn btn--rounded btn--yellow btn-submit">
              Sign in
            </button>

            <p className="form__signup-link">
              No eres miembro aun? <a href="/register">Registrarse</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  </Layout>
);

export default LoginPage;
