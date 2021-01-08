import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Frase = () => {
    return (
        <div className="frase">
            <div className="left">
          <h2>Somos una app mexicana de taxis que opera con autos concesionados.</h2>
            <h3>Garantizamos un buen servicio, descargar nuestra App</h3>


            <button>GooglePlay</button>
            <p>Ahorra tiempo, reduce costos y toma el control con tu propio software de despacho de taxis</p>
            </div>

            <div className="right">
            <Image
                  src="/images/header-image.jpg"
                  alt="First slide"
                  width={500}
                  height={500}
                  className={styles.img}
            />
            </div>


            <style jsx>{`


.frase{
        display: flex;
        align-items: center;
        justify-content:center;
        width: 100vw;
        height: 70vh;
        flex-wrap: wrap;
}

.left{
        flex:1;
        display: flex;
        justify-content:center;
        align-items: flex-start;
        min-width:400px;
        height: 100%;
        flex-flow:column;
        padding:3em;
}

h2{
font-size:2em;
color:#0ac5ad;
}

button{
    width:7em;
    margin:15px 0;
    border-radius: 3em;
    outline: none;
    border: 2px solid black;
    color:black;
    font-weight:700;
    background:white;
  }
  button:hover{
    background:black;
    color:white;
  }

// ======================================================

.right{
    flex:1;
    display: flex;
    justify-content:center;
    align-items: center;
    min-width:400px;
    height: 100%;
  }

`}</style>
        </div>
    )
}

export default Frase
