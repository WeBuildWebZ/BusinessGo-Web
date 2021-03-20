import Link from 'next/link';

import Layout from '../layout';

const Funciona = () => (
  <Layout>
    <div className="como-funciona">
      <div className="textContainer">
        <p className="text">
          Es muy fácil configurar tu <b>*MiniWeb</b>, selecciona una plantilla, ingresa tu info, ajusta
          colores a tu gusto y listo!
        </p>
        <div className="message">
          <b>*Sólo $240</b>
          {`\n`}pesos anuales
        </div>
        <p className="text">
          Puedes incluir Fotos, <b>Videos</b>, un <b>Catálogo</b>, <b>WhatsApp</b>, <b>Telegram</b>, todas tus{' '}
          <b>Redes Sociales</b>, teléfonos, correo y mucho mas; luego a compartírla!
        </p>
        <div className="message">
          Configura tu
          {`\n`}
          <b>MiniWeb</b> ya!
        </div>
      </div>
      <img src="/images/banner.png" />

      <style jsx>
        {`
          .como-funciona {
            width: 100vw;
            height: 100vh;
            padding: 1em;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .textContainer {
            display: flex;
            flex-direction: column;
          }
          .text {
            max-width: 300px;
          }
          .message {
            align-self: flex-end;
            white-space: pre-line;
            line-height: 16px;
            padding: 7px;
            border-radius: 7px;
            background-color: #c800cd33;
            user-select: none;
          }
        `}
      </style>
    </div>
  </Layout>
);
export default Funciona;
