import PropTypes from 'prop-types';

const Description = props => {
  const { show, product } = props;
  const style = {
    display: show ? 'flex' : 'none'
  };

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart" />
        <h4>Detalles y descripción</h4>
        <p>{product.description}</p>
      </div>
    </section>
  );
};

Description.propTypes = {
  product: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
};

export default Description;
