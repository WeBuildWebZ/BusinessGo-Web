import { urlObjectKeys } from 'next/dist/next-server/lib/utils';

import Layout from '../layout';

const integrantes = [
  {
    id: 1,
    background: '/images/yo.jpg',
    imagen: '/images/yo.jpg',
    nombre: 'Jose Rios',
    puesto: 'Front-End',
    descripcion:
      'Soy una persona apasionada por aprender todo sobre FrontEnd,interfaces y diseño, estoy a cargo de esta seccion en WeBuildWebz'
  },
  {
    id: 2,
    background: '/images/el.jpg',
    imagen: '/images/el.jpg',
    nombre: 'Leandro Cotti',
    puesto: 'Back-End',
    descripcion:
      'Soy una persona apasionada por aprender todo sobre backend,y los fujos de datos, estoy a cargo de esta seccion en WeBuildWebz'
  }
];

const Nosotros = () => (
  <Layout>
    <div className="nosotros">
      <h3>Nosotros</h3>
      {integrantes.map(({ id, background, imagen, nombre, puesto, descripcion }) => (
        <div key={id} className="card">
          <div
            className="foto"
            style={{
              backgroundImage: `linear-gradient(to left,hsla(0, 0%, 75%, 0.5),hsla(0, 0%, 92%, 0.5)), url(${background})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <img src={imagen} alt="" />
          </div>
          <div className="text">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
          </div>
        </div>
      ))}

      <style jsx>
        {`
          .nosotros {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            background: #ebebeb;
            padding: 1em;
          }
          .card {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-flow: column;
            flex-flow: column;
            width: 32em;
            height: 32em;
            border-radius: 1em;
            padding: 1em;
            margin: 2em;
            background: white;
            -webkit-box-shadow: 0.3em 0.3em 2em grey;
            box-shadow: 0.3em 0.3em 2em grey;
          }
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 4px solid white;
          }

          .foto,
          .text {
            flex: 1;
            width: 100%;
            height: 100%;
          }
          .foto {
            display: flex;
            align-items: flex-end;
          }
          h6 {
            color: grey;
          }
          // ==========================================
          @media (max-width: 541px) {
            .card {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  </Layout>
);

export default Nosotros;
