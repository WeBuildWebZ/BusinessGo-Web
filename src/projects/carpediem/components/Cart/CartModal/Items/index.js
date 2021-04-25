import { useSelector } from 'react-redux';

const Items = () => {
  const cartItems = useSelector(store => store.cartItems);

  return (
    <div className="items">
      {cartItems.map((item, i) => (
        <div key={i} className="item">
          <img className="image" src={item.product.photo} />
          <div className="info">
            <h4 className="title">{item.product.title}</h4>
            <p className="description">{item.product.description}</p>
          </div>
        </div>
      ))}
      <style jsx>
        {`
          .items {
          }
          .item {
            display: flex;
            align-items: center;
            width: fit-content;
            padding: 4px;
            margin: 7px;
            border-radius: 7px;
            background-color: #8804c4aa;
            transition: 0.7s;
          }
          .item:hover {
            background-color: #8804c4;
          }
          .info {
            display: flex;
            flex-direction: column;
          }
          .image {
            width: 80px;
            flex-grow: 1;
            border-radius: 7px;
          }
          .title {
            margin: 7px;
          }
          .description {
            margin: 7px;
            max-width: 50%;
          }
          @media only screen and (max-width: 768px) {
            .item {
              flex-direction: column;
            }
            .description {
              margin: 7px;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Items;
