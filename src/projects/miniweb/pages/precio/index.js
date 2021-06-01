import Layout from '../layout';

const prices = [
  {
    className: 'red',
    quality: 'Gratuito',
    price: 'Pruebalo Gratis!',
    description: 'Para Jovenes, Profesionales y freelancers.'
  },
  {
    className: 'orange',
    quality: 'Profesional',
    price: '180$/año',
    description:
      'Para Empresarios,Freelancers,Restaurantes,Pequeños Negociantes, Agentes de Ventas, Inmobiliarios y de Seguros, PyMES,etc.'
  },
  {
    className: 'blue',
    quality: 'Organizacion',
    price: '150$/año',
    description:
      'Para Empresarios,Freelancers,Restaurantes,Pequeños Negociantes, Agentes de Ventas, Inmobiliarios y de Seguros, PyMES,etc.'
  }
];

const Precio = () => (
  <Layout>
    <br />
    <br />
    <br />
    <br />

    <ul className="box">
      {prices.map(({ className, quality, price, description }, id) => (
        <li key={id} className={`card ${className}`}>
          <div className="top">
            <h2> {quality} </h2>
            <h5>{price} </h5>
          </div>
          <div className="mid">
            <p>{description}</p>
          </div>
          <div className="bottom">
            <button>click</button>
          </div>
        </li>
      ))}
      <style jsx>
        {`
          .box {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .card {
            width: 18em;
            min-height: 20em;
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
            border-radius: 1em;
            background: white;
            margin: 1em;
            border: 2px solid silver;
            padding: 1em;
            box-shadow: 0.3em 0.3em 1em silver;
            color: white;
          }

          // ==========================================================================
          .top {
            -webkit-box-flex: 3;
            -ms-flex: 3;
            flex: 4;
            width: 100%;
            height: 100%;
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
          }
          // ==========================================================================
          .mid {
            -webkit-box-flex: 3;
            -ms-flex: 3;
            flex: 4;
            width: 100%;
            height: 100%;
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
          }

          p {
            width: 100%;
            font-weight: bold;
            letter-spacing: 1px;
          }

          // ==========================================================================
          .bottom {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 2;
            width: 100%;
            height: 100%;
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
          }

          .bottom button {
            background: transparent;
            outline: none;
            border: none;
            border-radius: 0.5em;
            width: 50%;
            padding: 0.5em 0;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            border: 1px solid silver;
          }

          .red {
            background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
          }
          .orange {
            background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);
          }
          .blue {
            background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
          }
        `}
      </style>
    </ul>
  </Layout>
);

export default Precio;
