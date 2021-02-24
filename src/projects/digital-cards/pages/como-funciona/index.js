import Link from 'next/link';

import Layout from '../layout';

const Funciona = () => (
  <Layout>
    <div className="como-funciona">
      <h2>como-funciona</h2>

      <style jsx>
        {`
          .como-funciona {
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
            text-align: center;
          }
        `}
      </style>
    </div>
  </Layout>
);
export default Funciona;
