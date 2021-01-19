import Redes from "../redes"
import Nombre from "./nombre"

const Empresa = () => {
    return (
        <div className="empresa">

            <Nombre className="nombre" />
            <Redes className="right-box"/>
            <style jsx>{`
            .empresa{
                display: flex;
                width: 100vw;
                height: 40vh;
                background:white;
                margin:2em 0;
            }
            `}</style>
        </div>
    )
}

export default Empresa
