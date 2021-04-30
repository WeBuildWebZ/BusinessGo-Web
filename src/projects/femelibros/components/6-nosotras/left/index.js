import Image from 'next/image';

const Left = () => (
  <div className="left">
    <h3>Nosotras</h3>
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
          width: 300px;
          text-align: center;
          border: 3px solid #c83e59;
          border-radius: 1em;
          font-size: 2em;
          padding: 0.2em 0;
          color: #c83e59;
          border-radius: 1em;
          margin-bottom: 0.5em;
        }
        p {
          font-style: italic;
          font-size: 1.5em;
          color: #1c1c1c;
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
