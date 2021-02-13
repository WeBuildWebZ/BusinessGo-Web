import { useSelector } from 'react-redux';

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
        {!project && <Spinner />}
        {project &&
          project.configuration.images.images.map((image, id) => (
            <li className="card" key={id}>
              <div className="top">
                <img src={image.url} alt="" />
              </div>
              <div className="mid">{image.title}</div>

              <div className="bottom">
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  {language.visit}
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
              border: 0.3em solid #ebebeb;
              border-radius: 1em;
              padding: 1em;
              margin: 0.5em;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column;
            }
            .card:hover {
              border: 0.3em solid #1c1c1c;
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

export default Galery;
