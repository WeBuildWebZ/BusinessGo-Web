

const Suscripcion = () => {
  return (

      <div className="subs">
       
       
            <h4 >
              Suscribirse
            </h4>
    
        <style jsx>
          {`
            .subs {
              width: 100vw;
              height: 100%;
              margin: 2em 0;
              padding: 0 1em;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }
            h4 {
              color:#756a6f;
              padding: 1em 2em;
              border: 4px solid #756a6f;
              border-radius: 1em;
            }
            h4:hover {
              color: white;
              background: #756a6f;
              box-shadow: 0.2em 0.2em 0.2em silver;

            }
          `}
        </style>
      </div>
 
  );
};

export default Suscripcion;
