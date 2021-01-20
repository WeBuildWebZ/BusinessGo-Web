import Menu from "./menu"
import LogoContainer from "./logo-container"

const Navbar = () => {
    return (
        <div className="navbar">
            <LogoContainer />
            <Menu />
            <style jsx>{`


.navbar{
    position:fixed;
    background:white;
    z-index:10;
    width: 100vw;
    display: flex;
}

`}</style>
        </div>
    )
}

export default Navbar
