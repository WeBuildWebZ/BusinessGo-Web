const Left = () => (
  <div className="left">
    <h3>Facilisi torquent enim dictumst per</h3>
    <p>
      Diam rhoncus sollicitudin vivamus duis tempus nisi condimentum posuere iaculis viverra arcu, tristique
      nostra mauris vulputate nullam platea et aenean torquent sagittis, donec dapibus suscipit senectus
      ultrices dignissim hendrerit cum risus interdum. Facilisi torquent enim dictumst per habitasse quam,
      tempus sagittis id eros massa mauris praesent, primis viverra cras montes lacus.{' '}
    </p>
    <h4>bibendum mattis pellentesque tortor aliquet turpis.</h4>
    <style jsx>
      {`
        .left {
          width: 450px;
          height: 500px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column;
        }
        h3 {
          font-size: 3em;
          color: #1c1c1c;
        }
        p {
          font-weight: bold;
        }
        h4 {
          color: #3e505b;
        }
      `}
    </style>
  </div>
);

export default Left;
