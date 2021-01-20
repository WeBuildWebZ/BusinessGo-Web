

const Menu = () => {
    return (
        <div className="menu">
            <h3>Productos</h3>
            <h3>Conocenos</h3>
            <h3>Contacto</h3>

        <style jsx>{`
        .menu{
            flex:1;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding:0 2em 0 0;
        }
        h3{
            margin:0 .5em;
        }

        `}</style>

        </div>
    )
}

export default Menu
