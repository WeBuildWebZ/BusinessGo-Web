import { useSelector } from 'react-redux';

const Services = () => {
  const project = useSelector(store => store.project);

  return (
    <div className="targets" id="articulos">
      {project?.configuration.body.offers.map((offer, i) => (
        <div className="card" key={i}>
          <div className="imageContainer">
            <img className="image" src={offer.photo} />
          </div>
          <h4 className="title">{offer.title}</h4>
          <p className="text">{offer.description}</p>
        </div>
      ))}

      <style jsx>
        {`
          .targets {
            width: 100vw;
            min-height: 100vh;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .card {
            display: flex;
            flex-direction: column;
            width: 350px;
            height: 100%;
            margin: 1em;
            border: 1px solid #1c1c1c;
            border-radius: 1em;
          }

          .title {
            margin: 14px;
          }
          .text {
            flex: 2;
            padding: 14px;
          }
          .imageContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .image {
            height: 250px;
          }
        `}
      </style>
    </div>
  );
};

export default Services;
