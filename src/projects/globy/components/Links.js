import React from 'react'

const Links = () => {
    return (
        <div className="social">
            <span className="menu">
                <h3>About Us </h3>
                <h5>Client </h5>
                <h5>Galery </h5>
                <h5>Contact </h5>
            </span>
            <span className="menu">
                <h3>About Us </h3>
                <h5>Client </h5>
                <h5>Galery </h5>
                <h5>Contact </h5>
            </span>
            <span className="menu">
                <h3>About Us </h3>
                <h5>Client </h5>
                <h5>Galery </h5>
                <h5>Contact </h5>
            </span>
    <style jsx>{`


    .social{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100%;
    }
    .menu{
        flex:1;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow:column;
    }
    .h3{
        flex:1;
        padding:.5em;
    }
    // ========================================
    @media(max-width:430px){
        .social{
            height: 100vh;
            flex-flow:column;

        }
    }

    `}</style>
        </div>
    )
}

export default Links
