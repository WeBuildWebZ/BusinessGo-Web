import Layout from '../layout';

const galeria = [
  {
    id: 1,
    image_url:
      'https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/image.jpg?alt=media&token=0ee2a779-1a7d-4a2f-9365-ee2aecc05aeb',
    description: 'Globy, es una empresa Mexicana de taxi al estilo Uber, en proceso de formacion.',
    url: 'https://www.globy.dancotll.com/'
  },
  {
    id: 2,
    image_url:
      'https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/zanle-group-portada.jpg?alt=media&token=329e26d9-d08b-454a-a181-669e6cc61f13',
    description: 'Zanle Group, web para freelance, dirigida a Latino America',
    url: 'https://zanle-group.vercel.app/'
  },
  {
    id: 3,
    image_url:
      'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-jose-rios-netlify.jpg?alt=media&token=e04a90c5-4dde-47cc-9179-a46f17c6f25b',
    description:
      'Portfolio web desarrollado con React js, algunas animaciones ligeras, orientado al diseño ux/ui.',
    url: 'https://jose-rios.netlify.app/#/'
  },
  {
    id: 4,
    image_url:
      'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-horacio-muebles.jpg?alt=media&token=4ca6934f-b088-49a0-9a9a-723bb05b1db5',
    description:
      'Muebles-Horacio, una tienda digital, de caracter informativa, en la que el publico contacta al vendedor.',
    url: 'https://www.muebles.dancotll.com/'
  },
  {
    id: 5,
    image_url:
      'https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-webuildwebz.jpg?alt=media&token=cca05d1d-42e8-445e-a346-21c6d4686bfc',
    description:
      'En esta nueva entrega, WeBuildWebz, es una plataforma para exponer nuestros trabajos como freelance y buscar clientes, proyecto en colaboracion con el Backend, Leandro Cotti.',
    url: 'https://www.webuildwebz.com/'
  }
];
const Galery = () => (
  <Layout>
    <div className="galery">
      <h2>Galeria</h2>
      <br />
      {galeria.map(({ id, image_url, description, url }) => (
        <li className="card" key={id}>
          <div className="top">
            <img src={image_url} alt="" />
          </div>
          <div className="mid">{description}</div>

          <div className="bottom">
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visitar
            </a>
          </div>
        </li>
      ))}

      <style jsx>
        {`
          .galery {
            width: 100vw;
            padding: 2em;
            margin: 3em 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
          }
          h2 {
            width: 100vw;
            text-align: center;
          }

          // ===========================================================================
          .card {
            width: 300px;
            height: 400px;
            border: 0.3em solid #ebebeb;
            border-radius: 1em;
            padding: 1em;
            margin: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }

          // ======================================================================================
          .top {
            flex: 5;
            width: 100%;
            height: 100%;
            overflow-y: hidden;
          }
          img {
            width: 100%;
            height: 196px;
            border-radius: 0.5em;
            object-fit: cover;
          }
          // ======================================================================================
          .mid {
            flex: 4;
            width: 100%;
            height: 100%;
            margin: 0.5em 0;
            overflow-y: hidden;
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

export default Galery;
