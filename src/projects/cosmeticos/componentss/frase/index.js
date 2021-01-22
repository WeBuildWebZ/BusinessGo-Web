
const Frase = () => {
    return (
        <div className="frase">
            <h2>OMNILIFE se trata de ti,
                <br/> de tu vida y de tus sueños
            </h2>
            <h5>¡Únete ahora y toma el control!</h5>
            <button>Suscribirse</button>

            <style jsx>{`
            .frase{
                display: flex;
                flex-flow:column;
                align-items:flex-start;
                justify-content:center;
                width: 100vw;
                height: 60vh;
                background-attachment: fixed;
                background-image:url(/images/frase.jpg);
                background-position:0 -150px;
                background-size: cover;
                background-repeat: no-repeat;
                margin:5em 0;
                padding:0 3em;
            }
            h2,h5{
                color:white;
                background:hsla(0, 0%, 0%, 0.8);;
                padding:.5em;
                border-radius:.5em;
            }
            button{
                border:none;
                outline:none;
                border-radius:1em;
                cursor:pointer;
                background: linear-gradient(to right,yellow,#ffa51d);
                color:#191a35;
                font-weight:900;
                padding:.5em 1.5em;
            }
            `}</style>
        </div>
    )
}

export default Frase
