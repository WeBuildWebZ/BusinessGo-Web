import Link from 'next/link';

const RegisterForm = () => (
  <div className="register">
    <form>
      <div className="top">
        <input type="text" name="user" autoComplete="none" className="row" placeholder="nombre de usuario" />
        <input type="password" name="password" className="row" autoComplete="none" placeholder="password" />
      </div>
      <div className="bottom">
        <button className="row">
          <Link href="/home">
            <a>Unirme</a>
          </Link>
        </button>
      </div>
    </form>
    <style jsx>
      {`
        .register {
          flex: 1;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em;
        }
        form {
          width: 250px;
          height: 230px;
          display: flex;
          align-items: center;
          flex-flow: column;
          border-radius: 1em;
          border: 1px solid silver;
          padding: 0.6em;
          background: white;
        }
        .top,
        .bottom {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }
        .row {
          width: 100%;
          margin: 0.2em;
          padding: 0.5em;
          border-radius: 5px;
          border: none;
          outline: none;
        }

        button {
          background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);
          color: white;
        }
        p {
          font-size: 0.8em;
          color: grey;
        }
        // ============Button de Crear Cuenta Nueva=======================
        .crear-button {
          border: none;
          outline: none;
          background: #1c1c1c;
          padding: 5px;
          border-radius: 5px;
        }
        a {
          color: white;
          font-size: 0.8em;
        }
      `}
    </style>
  </div>
);

export default RegisterForm;
