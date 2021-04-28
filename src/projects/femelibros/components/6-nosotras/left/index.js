import Image from 'next/image';

const Left = () => (
  <div className="left">
    <h3>LOREM, IPSUM DOLOR.</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est incidunt voluptatem maiores repudiandae
      cupiditate, aspernatur eligendi iure repellendus magni, ad corrupti. Corporis, consequuntur?
    </p>
    <style jsx>
      {`
        .left {
          width: 600px;
        }
        h3 {
          color: #ffa489;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 2px;
          font-size: 3em;
        }
        p {
          font-style: italic;
          font-size: 1.5em;
          color: grey;
          width: 200px;
        }
      `}
    </style>
  </div>
);

export default Left;
