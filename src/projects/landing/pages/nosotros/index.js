import { useSelector } from 'react-redux';

import Layout from '../../layout';

import { getLanguage } from './lang';

const Nosotros = () => {
  const language = getLanguage(useSelector(store => store.language));

  return (
    <Layout>
      <div className="nosotros">
        <h3>Nosotros</h3>
        {language.members.map(({ background, image, name, position, description }, id) => (
          <div key={id} className="card">
            <div
              className="foto"
              style={{
                backgroundImage: `linear-gradient(to left,hsla(0, 0%, 75%, 0.5),hsla(0, 0%, 92%, 0.5)), url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            >
              <img src={image} alt="" />
            </div>
            <div className="text">
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}

        <style jsx>
          {`
            .nosotros {
              width: 100vw;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column;
              background: #ebebeb;
              padding: 1em;
            }
            .card {
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
              width: 32em;
              height: 25em;
              border-radius: 1em;
              padding: 1em;
              margin: 2em;
              background: white;
              -webkit-box-shadow: 0.3em 0.3em 2em grey;
              box-shadow: 0.3em 0.3em 2em grey;
            }
            img {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              border: 4px solid white;
            }

            .foto,
            .text {
              flex: 1;
              width: 100%;
              height: 100%;
            }
            .foto {
              display: flex;
              align-items: flex-end;
            }
            h6 {
              color: grey;
            }
            // ==========================================
            @media (max-width: 541px) {
              .card {
                width: 100%;
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Nosotros;
