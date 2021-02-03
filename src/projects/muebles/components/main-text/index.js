const MainText = () => (
  <div className="maintext">
    <p>
      Somos una empresa especializada en el diseño, fabricación y comercialización de mobiliarios, todo a
      medida, considerando los mejores estándares actuales.
    </p>

    <p>
      Para ello contamos con vasta experiencia en el rubro y un equipo capacitado para llevar a cabo su
      proyecto asegurando el mejor costo y calidad del mercado.
    </p>

    <p>
      Trabajamos de manera personalizada garantizando la satisfacción de todas sus necesidades. Lo invitamos a
      recorrer nuestro sitio para conocer más de nuestros trabajos.
    </p>
    <style jsx>
      {`
        .maintext {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 1em;
        }
        p {
          max-width: 400px;
          padding: 1em;
        }
      `}
    </style>
  </div>
);

export default MainText;
