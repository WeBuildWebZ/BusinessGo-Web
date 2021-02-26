import Link from 'next/link';

import Layout from '../layout';

import Card1 from './free/card1';
import Card2 from './free/card2';
import Card3 from './free/card3';
import Card4 from './free/card4';

const Templates = () => (
  <Layout>
    <div className="galery">
      <h2>Selecciona un Template, y comienza a ingresar tus datos Personales.</h2>

      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <style jsx>
        {`
          .galery {
            width: 100vw;
            height: 100%;
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
          p {
            width: 100%;
            text-align: center;
            font-style: italic;
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
export default Templates;
