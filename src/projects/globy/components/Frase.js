import { useSelector } from 'react-redux';

import styles from '../styles/Home.module.scss';
import Spinner from '../../../components/Spinner';

const Frase = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="frase">
      <div className="left">
        {!project && <Spinner />}
        {project && (
          <>
            <h2>{project.configuration.description_1}</h2>
            <h3>{project.configuration.description_2}</h3>

            <a href={project.configuration.app_link} target="blank">
              <button>
                <a href="https://play.google.com/store/apps/details?id=com.globy.app.usuario&hl=es_419&gl=US" target="_blank">GooglePlay</a>
                </button>
                <button>AppleStore</button>
            </a>
            <p>{project.configuration.description_3}</p>
          </>
        )}
      </div>

      <div className="right">
        {!project && <Spinner />}
        {project && (
          <img
            src={project.configuration.main_image}
            alt="First slide"
            width={500}
            height={500}
            className={styles.img}
          />
        )}
      </div>

      <style jsx>{`
        .frase {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 70vh;
          flex-wrap: wrap;
        }

        .left {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          flex-flow: column;
          padding: 3em;
        }

        h2 {
          font-size: 2em;
          color: #0ac5ad;
        }

        button {
          width: 7em;
          margin: 15px 0;
          border-radius: 3em;
          outline: none;
          border: 2px solid black;
          color: black;
          font-weight: 700;
          background: white;
        }
        button:hover {
          background: black;
          color: white;
        }

        // ======================================================

        .right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        @media(max-width:1000px){
          .frase {
            flex-flow:column;
          }
          .right {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Frase;
