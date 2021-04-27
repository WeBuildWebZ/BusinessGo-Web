
const Banner = () => (
  <div className="banner">
    <h3>Lorem ipsum dolor sit.</h3>
    <h4>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minus voluptatem fuga nobis earum
      facilis.
    </h4>
    <br />
    <button>Get Started!</button>
  
    <style jsx>
      {`
        .banner {
          width: 100vw;
          height:65vh;
         
          background-color: #e5d8c8;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }

        h3 {
          color: #2f2329;
          font-size: 5em;
        }
        button {
          width: 200px;
          height: 60px;
          background: #1c1c1c;
          color: white;
          outline: none;
          border: none;
        }

      `}
    </style>
  </div>
);

export default Banner;
