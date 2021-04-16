import Link from 'next/link';

import Bennefits from '../b-benefits';
import Button from '../button';

const Recents = () => (
  <div className="recents" id="benefit">
    <h5>Bienvenido/a:</h5>
    <h2>Somos Distribuidores !</h2>
    <p>
      Carpediem Distribuciones s.r.l., es una distribuidora de bebidas y anexos para kioscos, almacenes y
      supermercados. Venta minorista y mayorista con sede central en
      <b> Villa Mercedes provincia de San Luis</b>. Desde el año 2012 abastece a todo el país, llevando las
      mejores marcas al más bajo precios.
    </p>

    <Bennefits />

    <div className="bottom">
      <Link href="/#articulos">
        <a>
          <Button>
            <h4>Ver</h4>
          </Button>
        </a>
      </Link>
    </div>
    <style jsx>
      {`
        .recents {
          width: 100vw;
          min-height: 100vh;
          padding: 0 0 5em 0;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          background: #ebebeb;
        }
        h4 {
          color: white;
          z-index: 10000;
          overflow: hidden;
        }
        h5 {
          width: 100vw;
          text-align: center;
          color: #fda085;
          font-size: 1.5em;
        }
        h2 {
          width: 100vw;
          text-align: center;
          margin: 0;
          font-size: 2em;
        }
        p {
          width: 600px;
          text-align: left;
          margin: 0;
          font-size: 1.5em;
        }

        .bottom {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        // ===================================================================
        @media (max-width: 630px) {
          .recents {
            padding: 1em;
          }
          p {
            width: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Recents;
