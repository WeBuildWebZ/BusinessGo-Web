import PropTypes from 'prop-types';

const ProductShape = {
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductShape;
