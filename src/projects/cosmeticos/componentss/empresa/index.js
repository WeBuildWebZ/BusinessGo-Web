import Redes from "../redes"
import Nombre from "./nombre"

const Empresa = () => {
    return (
        <div className="empresa">

            <Nombre/>
            <Redes/>
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
