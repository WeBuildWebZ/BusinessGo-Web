
const Logo = () => {
    return (
        <div className="logo">
            <h1>Globy <br/> Taxi App</h1>

    <style jsx>{`
    .logo{
            display: flex;
            justify-content:flex-start;
            align-items: center;
            align-self:flex-start;
            width: 50vw;
            height: 30vh;
    }
    h1{
        color:black;
        line-height:1.7em;
        text-align:center;
        font-family: 'Bitter', serif;
        font-weight:700;
    }
    h1::first-line{
        font-size:3em;
        color:#86a8e7;
    }
    `}</style>
        </div>
    )
}

export default Logo
