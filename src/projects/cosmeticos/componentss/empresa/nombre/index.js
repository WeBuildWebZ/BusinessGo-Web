import Logo from "../../logo"

const Nombre = () => {
    return (
        <div className="nombre">
            <Logo />
            <h6>Empresa Socialmente Responsable</h6>
            <h6>Centro de Ayuda</h6>
            <style jsx>{`
            .nombre{
                display: flex;
                width:100%;
                height:100%;
                align-items:center;
                justify-content:center;
            }
            h6{
                color:#434af9;
                margin:0 5px;
                cursor:pointer;
                font-size:14px;
                animation:transition .5s ease-in;
            }
            h6:hover{
                font-size:18px;
            }
            `}</style>
        </div>
    )
}

export default Nombre
