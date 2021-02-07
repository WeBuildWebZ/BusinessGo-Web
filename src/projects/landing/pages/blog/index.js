import { useSelector } from 'react-redux';

import Layout from '../../layout';

import { getLanguage } from './lang';

const Blog = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Layout>
      <div className="galery">
        <div className="text">
          <h2>{language.title}</h2>
          <h4>{language.description}</h4>
        </div>
        <br />
        {language.items.map(({ image_url, title, description, url }, id) => (
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
              padding: 1em;
              margin: 3em 0;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: row;
              flex-wrap: wrap;
            }
            .text {
              width: 100vw;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column;
              margin-bottom: 3em;
            }
            .text h2 {
              width: 100%;
              text-align: center;
            }
            .text h4 {
              color: grey;
              width: 60%;
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

            @media (max-width: 870px) {
              .text h4 {
                width: 100%;
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Blog;
