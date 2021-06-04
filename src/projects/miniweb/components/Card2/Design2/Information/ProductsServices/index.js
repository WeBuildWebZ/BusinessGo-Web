import { cardPropTypes } from '../../../constants';

const ProductsServices = props => {
  const { card } = props;
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

ProductsServices.propTypes = cardPropTypes;

export default ProductsServices;
