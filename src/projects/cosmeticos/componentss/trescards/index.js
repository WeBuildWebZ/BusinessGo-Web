
const TresCards = () => {
    return (
        <div className="TresCards">

            <div className="card1"><h4>Increibles ofertas</h4></div>
            <div className="card2"><h4>¡Da clic y conoce las opciones de compra!</h4></div>
            <div className="card3"><h4>Da clic y descarga tutoriales</h4></div>

             <style jsx>{`
            .TresCards{
                display:flex;
                align-items:flex-end;
                justify-content:space-evenly;;
                width: 100vw;
                height: 70vh;
                background-image: url(/images/card1.jpg);
                margin:2em 0;
                padding:0 2em 2em 1em;
            }

            .card1,
            .card2,
            .card3{
                width: 250px;
                height: 120px;
                display:flex;
                align-items:center;
                justify-content:center;
                margin:5px;
                border-radius:1em;
                background: hsla(0, 0%, 100%, 0.8);

            }
            `}</style>
        </div>
    )
}
export default TresCards
