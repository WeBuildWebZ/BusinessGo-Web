import Link from 'next/link';
import { useSelector } from 'react-redux';

import Layout from '../layout';

import Card1 from './free/card1';
import Card2 from './free/card2';
import Card3 from './free/card3';
import Card4 from './free/card4';

const Templates = () => {
  const user = useSelector(store => store.user);

  const handleSelectCard = () => {
    if (user) window.location.href = '/dashboard/cards/new';
    else window.location.href = '/register';
  };

  return (
    <Layout>
      <div className="templates">
        <h2>Selecciona una plantilla, y comienza a ingresar tus datos Personales.</h2>

        <div className="content">
          <div className="register">
            Inicia tu registro y selecciona una plantilla
            <Link href="/register">
              <a>
                <div className="message">
                  <b>Iniciar</b>
                  {`\n`}registro
                </div>
              </a>
            </Link>
          </div>
          <div />
        </div>

        {/* <Card1 onClick={handleSelectCard} />
        <Card2 onClick={handleSelectCard} />
        <Card3 onClick={handleSelectCard} />
        <Card4 onClick={handleSelectCard} /> */}
        <style jsx>
          {`
            .templates {
              width: 100vw;
              height: 100vh;
              padding: 1em;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: row;
              flex-wrap: wrap;
            }
            h2 {
              width: 100%;
              margin: 100px 0 50px 0;
              text-align: center;
            }

            .content {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              width: 100%;
            }
            .register {
              display: flex;
              flex-direction: column;
              max-width: 130px;
            }
            .message {
              white-space: pre-line;
              line-height: 16px;
              margin-top: 7px;
              padding: 7px;
              border-radius: 7px;
              background-color: #c800cd33;
              text-align: center;
              user-select: none;
              transition: 0.7s;
            }
            .message:hover {
              transform: scale(1.1);
            }
            .message:active {
              transform: scale(1.2) rotate(3deg);
              transition: 0.1s;
            }
            // ===========================================================================
            .card {
              width: 300px;
              height: 400px;
              border: 0.2em solid #ebebeb;
              border-radius: 1em;
              padding: 0.5em;
              margin: 0.5em;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column;
            }
            .card:hover {
              border: 0.2em solid #1c1c1c;
            }

            // ======================================================================================
            .top {
              flex: 9;
              width: 100%;
              height: 100%;
              overflow-y: hidden;
              padding: 0 0 0.5em 0;
            }
            img {
              width: 100%;
              height: 100%;
              border-radius: 0.5em;
              object-fit: cover;
            }

            // =======================================================================================
            .bottom {
              flex: 1;
              width: 100%;
              height: 100%;
              background: #f8ac30;
              border-radius: 0.5em;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            a {
              color: black;
            }
            a:hover {
              color: white;
              cursor: pointer;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Templates;
