
const Section = () => {
    return (
        <div className="section">
            <span className="box-one">
                <div className="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="taxi" className="svg-inline--fa fa-taxi fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462 241.64l-22-84.84c-9.6-35.2-41.6-60.8-76.8-60.8H352V64c0-17.67-14.33-32-32-32H192c-17.67 0-32 14.33-32 32v32h-11.2c-35.2 0-67.2 25.6-76.8 60.8l-22 84.84C21.41 248.04 0 273.47 0 304v48c0 23.63 12.95 44.04 32 55.12V448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-40.88c19.05-11.09 32-31.5 32-55.12v-48c0-30.53-21.41-55.96-50-62.36zM96 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm20.55-112l17.2-66.36c2.23-8.16 9.59-13.64 15.06-13.64h214.4c5.47 0 12.83 5.48 14.85 12.86L395.45 240h-278.9zM416 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg></div>
                <div className="text">
                    <h3>BASADO EN LA NUBE</h3>
                    <p><b>Seguridad Total.</b>¡Disfruta de la tranquilidad que da nuestra fiabilidad!</p>
                </div>
            </span>
            <span className="box-two">
                <div className="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="taxi" className="svg-inline--fa fa-taxi fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462 241.64l-22-84.84c-9.6-35.2-41.6-60.8-76.8-60.8H352V64c0-17.67-14.33-32-32-32H192c-17.67 0-32 14.33-32 32v32h-11.2c-35.2 0-67.2 25.6-76.8 60.8l-22 84.84C21.41 248.04 0 273.47 0 304v48c0 23.63 12.95 44.04 32 55.12V448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-40.88c19.05-11.09 32-31.5 32-55.12v-48c0-30.53-21.41-55.96-50-62.36zM96 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm20.55-112l17.2-66.36c2.23-8.16 9.59-13.64 15.06-13.64h214.4c5.47 0 12.83 5.48 14.85 12.86L395.45 240h-278.9zM416 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg></div>
                <div className="text">
                    <h3>BASADO EN LA NUBE</h3>
                    <p><b>Seguridad Total.</b>¡Disfruta de la tranquilidad que da nuestra fiabilidad!</p>
                </div>
            </span>
            <span className="box-three">
                <div className="icon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="taxi" className="svg-inline--fa fa-taxi fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462 241.64l-22-84.84c-9.6-35.2-41.6-60.8-76.8-60.8H352V64c0-17.67-14.33-32-32-32H192c-17.67 0-32 14.33-32 32v32h-11.2c-35.2 0-67.2 25.6-76.8 60.8l-22 84.84C21.41 248.04 0 273.47 0 304v48c0 23.63 12.95 44.04 32 55.12V448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-40.88c19.05-11.09 32-31.5 32-55.12v-48c0-30.53-21.41-55.96-50-62.36zM96 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm20.55-112l17.2-66.36c2.23-8.16 9.59-13.64 15.06-13.64h214.4c5.47 0 12.83 5.48 14.85 12.86L395.45 240h-278.9zM416 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg></div>
                <div className="text">
                    <h3>BASADO EN LA NUBE</h3>
                    <p><b>Seguridad Total.</b>¡Disfruta de la tranquilidad que da nuestra fiabilidad!</p>
                </div>
            </span>

            <style jsx>{`
    .section{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 50vh;
        padding:2em;
        margin-bottom:1.5em;
        flex-wrap: wrap;
        box-sizing:border-box;
    }
    .box-one,
    .box-two,
    .box-three{
    flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 320px;
        height: 170px;
        border-radius:1em;
        border:3px solid #ebebeb;
        margin:7px;
        padding:7px;
}

// =================
.icon{
    flex:1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.fa-taxi{
    width: 5em;
    height: 5em;
    padding:1em;
    align-items: center;
    border:2px solid #86a8e7;
    border-radius:50%;
    color:#86a8e7;
}


.text{
    flex:3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-flow:column;
    padding:0 1em;
}
.text b{
    color:#86a8e7;
}
// =============================================
@media(max-width:1000px){

    .section{
        flex-flow:column;
        height: 100vh;
    }
    .box-one,
    .box-two,
    .box-three{
        flex:1;
        height: 100%;

}
}






    `}</style>

        </div>
    )
}

export default Section
