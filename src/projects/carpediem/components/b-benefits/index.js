const items = [
  {
    icon: '/icons/angellist.svg',
    title: 'Some title',
    description: 'lorem lalala lelele lulu on'
  },
  {
    icon: '/icons/headset.svg',
    title: 'Some title',
    description: 'lorem lalala lelele lulu on'
  },
  {
    icon: '/icons/paypal.svg',
    title: 'Some title',
    description: 'lorem lalala lelele lulu on'
  },
  {
    icon: '/icons/shipping.svg',
    title: 'Some title',
    description: 'lorem lalala lelele lulu on'
  }
];
const Bennefits = () => (
  <div className="bennefits">
    <h2>Compromiso</h2>

    {items.map(({ icon, title, description }, i) => (
      <div key={i} className="card">
        <div className="item">
          <img src={icon} alt={icon} />
        </div>
        <div className="text">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    ))}

    <style jsx>
      {`
        .bennefits {
          width: 100vw;
          min-height: 30vh;
          background: #ebebeb;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding: 0 0 5em 0;
        }
        h2 {
          width: 100vw;
          text-align: center;
        }
        .card {
          width: 300px;
          height: 170px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          border-radius: 1em;
          margin: 0 1em;
          padding: 1em;
          cursor: pointer;
        }
        img {
          width: 60px;
          height: 60px;
        }
        .text {
          padding: 0.5em;
        }
      `}
    </style>
  </div>
);

export default Bennefits;
