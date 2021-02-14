import { useSelector } from 'react-redux';
import Link from 'next/link';

import Layout from '../../layout';
import Spinner from '../../../../components/Spinner';

import { getLanguage } from './lang';

const Galery = () => {
  const project = useSelector(store => store.project);
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Layout>
      <div className="galery">
        <h2>{language.title}</h2>
        <p>{language.subtitle}</p>
        <br />
        <br />
        <br />
        <br />

        {!project && <Spinner />}
        {project &&
          project.configuration.images.images.map((image, id) => (
            <li className="card" key={id}>
              <div className="top">
                <img src={image.url} alt="" />
              </div>

              <Link href={image.url} target="_blank" rel="noopener noreferrer">
                <a className="bottom">
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
};

export default Galery;
