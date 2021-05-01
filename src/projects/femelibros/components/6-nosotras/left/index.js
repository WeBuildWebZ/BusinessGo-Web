import Image from 'next/image';

const Left = () => (
  <div className="left">
    <h3>Nosotras</h3>
    <br />
    <h4>Quienes somos?</h4>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est incidunt voluptatem maiores repudiandae
      cupiditate, aspernatur eligendi iure repellendus magni, ad corrupti. Corporis, consequuntur?
    </p>
    <br />
    <div className="autor">
      <img src="/images/banner.jpg" alt="autora" />
      <h6>Virginia Monteros</h6>
    </div>
    <pre>&#x27F6;</pre>
    <style jsx>
      {`
        .left {
          width: 600px;
        }
        h3 {
          display: inline;
          background: #c83e59;
          color: white;
          padding: 3px;
          font-family: 'Playfair Display', serif;
        }
        h4 {
          margin: 1em 0;
        }
        p {
          font-style: italic;
          font-size: 1.5em;
          font-weight: 400;
          color: #756a6f;
          width: 300px;
        }
        .autor {
          display: flex;
          align-items: center;
          width: 300px;
          font-size: 1.5em;
          color: #1c1c1c;
        }
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 100%;
          border: 3px solid white;
          margin-right: 0.5em;
        }
        pre {
          font-size: 2.5em;
          color: #c83e59;
        }
      `}
    </style>
  </div>
);

export default Left;
