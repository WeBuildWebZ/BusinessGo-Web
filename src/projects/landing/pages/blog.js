import Layout from '../layout';

const galeria = [
  {
    id: 1,
    image_url:
      'https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'esto es el titulo del articulo',
    description: 'Mira este articulo y avivate, somos programadores, somos reyes, bitch.',
    url: 'https://www.40defiebre.com/guia-seo/que-es-seo-por-que-necesito'
  },
  {
    id: 2,
    image_url:
      'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    title: 'esto es el titulo del articulo',

    description: 'Mira este articulo y avivate, somos programadores, somos reyes, bitch.',
    url: 'https://www.40defiebre.com/que-es/diseno-responsive'
  },
  {
    id: 3,
    image_url:
      'https://images.pexels.com/photos/1569076/pexels-photo-1569076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'esto es el titulo del articulo',

    description: 'Mira este articulo y avivate, somos programadores, somos reyes, bitch.',
    url: 'https://www.cualhost.com/sitios-web/para-que-sirve-una-pagina-web/'
  }
];
const Blog = () => (
  <Layout>
    <div className="galery">
      <div className="text">
        <h2>Preparamos para ti esta Coleccion de Blogs Destacada</h2>
        <h4>
          Encuentra toda la informacion que necesitas, diseños, terminos, inclusive banco de imagenes FREE.
          <br />
          en esta seccion de nuestra web, te va a gustar, que esperas?
        </h4>
      </div>
      <br />
      {galeria.map(({ id, image_url, title, description, url }) => (
        <li className="card" key={id}>
          <div className="top">
            <img src={image_url} alt="" />
          </div>
          <div className="mid">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>

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
          .text {
            width: 100vw;
          }
          .text h2,
          .text h4 {
            width: 100vw;
            text-align: center;
          }

          // ===========================================================================
          .card {
            width: 400px;
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

export default Blog;
