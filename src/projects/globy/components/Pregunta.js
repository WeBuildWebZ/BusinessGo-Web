
const Pregunta = () => {
    return (
        <div className="section-pregunta ">
            <div className="top-text">
                <h3>¿POR QUÉ ELEGIR GLOBY TAXI?</h3>
            </div>

            <div className="mid-text">
            <span className="left-items">

                    <span className="padding-lateral">
                        <p><span className="verde">&#x2714;</span> <b>Solución llave en mano</b> - ¡comienza inmediatamente!</p>
                        <p><span className="verde">&#x2714;</span> <b>Paga por lo que uses</b> - ¡Sin compromisos!</p>
                        <p><span className="verde">&#x2714;</span> <b>Extremadamente fiable</b> y tiempo de actividad estable</p>
                    </span>

            </span>

            <span className="right-items">
                    <span className="padding-lateral">
                        <p><span className="verde">&#x2714;</span> <b>Soporte gratuito 24/7</b> cuando lo necesites</p>
                        <p><span className="verde">&#x2714;</span> <b>Identificador de llamadas</b> e integración VoIP de tu elección</p>
                        <p><span className="verde">&#x2714;</span> <b>Informes personalizados</b> para facturación y planilla de salarios</p>
                   </span>

            </span>


            </div>
             <div className="bottom-text">
                <h2><b>¿Tienes preguntas que hacer? escribenos a:</b> <br/> Globy@preguntas.gmail.com</h2>
            </div>
              <style jsx>{`
    .section-pregunta{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow:column;
        width: 100vw;
        height: 100vh;
        margin:1.5em 0;

    }

.top-text{
    flex:1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    background:#86A8E7;
    color:white;
}
.padding-lateral{
    padding:0 1em;
}
.mid-text{
    flex:2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.verde{
    color:#5ffbf1;
    padding:3px;
    font-size:1.5em;
}
.left-items
{
    width: 480px ;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow:column;
    border:3px solid #ebebeb;
    border-radius:1em;
}

.padding-lateral
{
    display: flex;
    align-items: space-between;
    justify-content: center;
    flex-flow:column;

}

.padding-lateral b
{
    font-weight:800;
}

.right-items{
    width: 480px ;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow:column;
    border:3px solid #ebebeb;
    border-radius:1em;


}
.padding-lateral b
{
    font-weight:800;
}

// ===================================================

.bottom-text{
    flex:1;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border:6px solid #86a8e7;
}

.bottom-text b{
    color:grey;
}
    `}</style>

        </div>
    )
}

export default Pregunta
