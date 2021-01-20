
const TresCards = () => {
    return (

        <div className="TresCards">

            <div className="card1"><h4>Increibles ofertas!</h4></div>
            <div className="card2"><h4>Conoce las opciones de compra!</h4></div>
            <div className="card3"><h4>Solo entra y mira!</h4></div>

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
                width: 260px;
                height: 120px;
                display:flex;
                align-items:center;
                justify-content:center;
                margin:5px;
                padding:1em;
                border-radius:1em;
                background: hsla(0, 0%, 0%, 0.9);
                color:white;
            }
            .card1:hover,
            .card2:hover,
            .card3:hover{
                border:3px solid silver;
            }

            `}</style>
        </div>
    )
}
export default TresCards
