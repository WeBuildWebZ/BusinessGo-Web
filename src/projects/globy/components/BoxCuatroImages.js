import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const BoxCuatroImages = () => {
    return (
        <div className="image">
            <span className="left">
            <Image
          src="/images/emprendedor.jpg"
          alt="calling taxi"
          width={750}
          height={500}
          className={styles.img}
         />
        </span>
        <span className="right">
            <h2>Globy Taxi App</h2>
            <h4>Nuevas Estrategias para Emprendedores</h4>
            <p>five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset</p>
        </span>


         <style jsx>{`
         .image {
            display: flex;
            justify-content:center;
            align-items:center;
            width: 100vw;
            height: 100vh;
            margin: 1.5em 0;

        }
        .left{
            flex:1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content:center;
            align-items:center;
            padding:2em;

        }
        .right
            {   flex:1;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content:center;
                align-items:flex-start;
                flex-flow:column;
                padding:2em;
            }

            // ===============================

    .right h2{
        font-size:3em;
        }
    .right p{
        width:70%;
        }


    // ============================================
    @media(max-width:1000px){
        .image {
            flex-flow:column;
        }
        p{
            width: 100%;
        }
    }

         `}</style>
        </div>
    )
}

export default BoxCuatroImages;
