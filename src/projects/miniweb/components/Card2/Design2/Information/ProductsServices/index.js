import { useSelector } from 'react-redux';

const ProductsServices = () => {
  const card = useSelector(store => store.card);
  const productsOrServices = [...(card.products || []), ...(card.services || [])];

  return (
    <div>
      {productsOrServices.map((productOrService, i) => (
        <div key={i} className="productOrService">
          <img className="photo" src={window.getAssetUrl('miniweb_assets/design2/headphones.png')} />
          <p className="description">{productOrService.description}</p>
        </div>
      ))}
      <style jsx>
        {`
          .productOrService {
            display: flex;
            align-items: center;
          }
          .description {
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default ProductsServices;
