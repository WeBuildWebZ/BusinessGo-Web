import Layout from '../layout';

const prices = [
  {
    quality: 'Gratuito',
    price: 'Pruebalo Gratis!',
    description: 'Para Jovenes, Profesionales y freelancers.'
  },
  {
    quality: 'Profesional',
    price: '180$/año',
    description:
      'Para Empresarios,Freelancers,Restaurantes,Pequeños Negociantes, Agentes de Ventas, Inmobiliarios y de Seguros, PyMES,etc.'
  },
  {
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
      {prices.map(({ quality, price, description }, id) => (
        <li key={id} className="card red">
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
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .card {
            width: 18em;
            height: 25em;
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
            background: #ffb52a;
            outline: none;
            border: none;
            border-radius: 0.5em;
            width: 50%;
            padding: 0.5em 0;
            color: black;
            text-transform: uppercase;
            font-weight: bold;
          }
          .bottom button:hover {
            background: #ffb52a;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 0px 3px 9px #ffb52a;
          }

          .red {
            background-image: linear-gradient(120deg, #bf7fb9 0%, #c45261 100%);
          }
          .orange {
            background-image: linear-gradient(120deg, #e3b885 0%, #e59e55 100%);
          }
          .blue {
            background-image: linear-gradient(120deg, #6475e8 0%, #6887de 100%);
          }
        `}
      </style>
    </ul>
  </Layout>
);

export default Precio;
