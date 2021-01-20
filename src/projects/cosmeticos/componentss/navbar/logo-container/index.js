import Logo from "../../logo"


const LogoContainer = () => {
    return (
        <div className="logocontainer">
            <Logo />

        <style jsx>{`
        .logocontainer{
            flex:1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
        }
        `}</style>

        </div>
    )
}

export default LogoContainer
