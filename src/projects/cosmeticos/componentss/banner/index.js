
const Banner = () => {
    return (
        <div className="banner">
            <h1>hello</h1>
            <style jsx>{`
            .banner{
                display: flex;
                width: 100vw;
                height: 100vh;
                background-image: url(/images/banner.jpg);
                background-position:center top;
                background-size: cover;
                background-repeat: no-repeat;
              }



            `}</style>
        </div>
    )
}

export default Banner
