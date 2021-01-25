import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Product = props => {
  const { product } = props;
  const project = useSelector(store => store.project);

  return (
    <div className="product">
      <div className="price">{`${product.price} ${project?.configuration.basic_info.currency}`}</div>
      <a className="imageContainer" href={`/productos/${encodeURIComponent(product._id)}`}>
        <img className="image" src={product.photo} />
      </a>
      <div className="description">{product.description}</div>
      <style jsx>
        {`
          .product {
            display: inline-block;
            width: 180px;
            background-color: lightskyblue;
            box-shadow: 0 0 2px 2px lightskyblue;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            margin: 8px;
          }
          .imageContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 100%;
            height: 180px;
          }
          .price {
            width: 90%;
            margin: 5px 0 5px 5%;
            padding: 1px;
            z-index: 1;
            text-align: center;
            user-select: none;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 0 1px 1px #ffffff;
            color: green;
            text-shadow: 1px 1px 2px green;
          }
          .image {
            max-width: 100%;
            max-height: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            transition: 0.7s;
            cursor: pointer;
          }
          .image:hover {
            filter: blur(1px);
          }
          .description {
            width: 100%;
            height: auto;
            padding: 5px 0 5px 0;
            background-color: lightblue;
            text-align: center;
            font-size: 10px;
          }

          @media only screen and (max-width: 768px) {
            .product {
              width: 90%;
              margin-left: 5%;
            }
          }
        `}
      </style>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;
