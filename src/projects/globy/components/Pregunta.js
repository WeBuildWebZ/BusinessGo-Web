import { useSelector } from 'react-redux';

import Spinner from '../../../components/Spinner';

const Pregunta = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="section-pregunta ">
      <div className="top-text">
        <h3>¿POR QUÉ ELEGIR GLOBY TAXI?</h3>
      </div>

      <div className="mid-text">
        <span className="left-items">
          <p>
            <span>&#x2714;</span> <b>Solución llave en mano</b> - ¡comienza inmediatamente!
          </p>
          <p>
            <span>&#x2714;</span> <b>Paga por lo que uses</b> - ¡Sin compromisos!
          </p>
          <p>
            <span>&#x2714;</span> <b>Extremadamente fiable</b> y tiempo de actividad estable
          </p>
        </span>
        <span className="right-items">
          <p>
            <span>&#x2714;</span> <b>Soporte gratuito 24/7</b> cuando lo necesites
          </p>
          <p>
            <span>&#x2714;</span> <b>Identificador de llamadas</b> e integración VoIP de tu elección
          </p>
          <p>
            <span>&#x2714;</span> <b>Informes personalizados</b> para facturación y planilla de salarios
          </p>
        </span>
      </div>

      <div className="bottom-text">
        <h2>
          <b>¿Tienes preguntas que hacer? escribenos a:</b> <br />
          {!project && <Spinner />}
          {project && project.configuration.basic_info.email}
        </h2>
      </div>
      <style jsx>{`
        .section-pregunta {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
          width: 100vw;
          height: 100vh;
          margin: 1.5em 0;
        }

        .top-text {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background: #ebebeb;
          color: black;
          padding: 2em 0;
        }
        // =================================================

        .mid-text {
          flex: 2;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .left-items {
          width: 600px;
          height: 220px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-flow: column;
          border: 3px solid #ebebeb;
          border-radius: 1em;
          padding: 1em;
          margin: 1em;
        }

        .padding-lateral b {
          font-weight: 800;
        }

        .right-items {
          width: 600px;
          height: 220px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-flow: column;
          border: 3px solid #ebebeb;
          border-radius: 1em;
          padding: 1em;
          margin: 1em;
        }
        .padding-lateral b {
          font-weight: 800;
        }

        // ===================================================

        .bottom-text {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 2em;
        }

        .bottom-text b {
          color: grey;
        }
      `}</style>
    </div>
  );
};

export default Pregunta;
