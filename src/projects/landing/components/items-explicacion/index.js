const iconColors = ['#ff5a30', '#ffcc33', '#00f5f3'];

const items = [
  {
    id: 1,
    image: '/bullhorn-solid.svg',
    title: 'SEO',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  },
  {
    id: 2,
    image: '/feather-alt-solid.svg',
    title: ' CopyWriting',
    description:
      'Es redaccion de textos que estimulan en los lectores un movimiento de compra, es usado por las empresas para generar oportunidades de negocios'
  },
  {
    id: 3,
    image: '/gem-regular.svg',
    title: 'Exclusividad de Diseños',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  },

  {
    id: 4,
    image: '/handshake-solid.svg',
    title: 'Metodos de Pago',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  },
  {
    id: 5,
    image: '/key-solid.svg',
    title: 'Auto Administrables',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  },
  {
    id: 6,
    image: '/images-solid.svg',
    title: 'Optimizacion de Imagenes',
    description:
      'Es la dispocion que debe tener en su estructura, para poder ser encontrada en los buscadores e Google, por ej, a mayor calidad de SEO, mas eficacia y posicionamiento'
  }
];
// con este metodo retornamos las 3 primeras posiciones del array,en total son 6
const primeras3 = items.slice(0, 3);

// con este metodo retornamos las 3 ultimas posiciones del array,en total son 6
const ultimas3 = items.slice(3, 6);

const ItemsExplicacion = () => (
  <>
    <div className="top">
      <div className="left">
        {primeras3.map(({ id, image, title, description }) => (
          <li className="card" key={id} data-aos="fade-right">
            <span className="icon">
              <img src={image} alt="" />
            </span>

            <span className="text">
              <h3>{title}</h3>
              <p>{description}</p>
            </span>
          </li>
        ))}
      </div>
      <div className="right" data-aos="fade-left">
        <img src="/happy-one.jpg" alt="" className="image" />
      </div>
    </div>

    <div className="bottom">
      <div className="right" data-aos="fade-right">
        <img src="/happy-two.jpg" alt="" className="image" />
      </div>
      <div className="left">
        {ultimas3.map(({ id, image, title, description }) => (
          <li className="card" key={id} data-aos="fade-left">
            <span className="icon">
              <img src={image} alt="" />
            </span>

            <span className="text">
              <h3>{title}</h3>
              <p>{description}</p>
            </span>
          </li>
        ))}
      </div>
    </div>
    <style jsx>
      {`
        .top,
        .bottom {
          width: 100vw;
          height: 100vh;
          display: flex;
          background: #ebebeb;
        }
        .left {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          flex: 1;
        }

        .right {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }
        .image {
          width: 500px;
          height: 500px;
          border-radius: 1em;
          position: relative;
        }
        .card {
          width: 500px;
          display: flex;
          flex-flow: row;
          border-radius: 1em;
          margin: 10px 0;
          padding: 1em;
          box-shadow: 0.3em 0.3em 0.5em grey;
        }

        .icon {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          flex: 1;
          padding-right: 1em;
        }
        .text {
          width: 500px;
          flex: 9;
        }
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
        }
      `}
    </style>
  </>
);

export default ItemsExplicacion;
