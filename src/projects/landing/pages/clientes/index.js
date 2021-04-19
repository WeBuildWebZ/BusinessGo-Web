import { useSelector } from 'react-redux';
import Link from 'next/link';

import Layout from '../../layout';

import { getLanguage } from './lang';

const Clientes = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Layout>
      <div className="galery">
        <h2>{language.title}</h2>
        <p>En esta seccion, mira todos nuestros proyectos realizados.</p>
        <br />
        {language.items.map(({ image_url, description, url }, id) => (
          <li className="card" key={id}>
            <div className="top">
              <img src={image_url} alt="" />
            </div>
            <div className="mid">{description}</div>

            <Link href={url} target="_blank" rel="noopener noreferrer">
              <a className="bottom" target="_blank">
                <div>{language.visit}</div>
              </a>
            </Link>
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
              width: 100%;
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
              border: 0.1em solid #ebebeb;
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
};

export default Clientes;
