import PropTypes from 'prop-types';

const Breadcrumb = props => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li key={0}>
          <a href="#">
            <i className="icon-home" />
          </a>
        </li>
        <li>Todos los productos</li>
        {props.sections.map((section, i) => (
          <li key={i + 1}>{section}</li>
        ))}
      </ul>
    </div>
  </section>
);

Breadcrumb.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string)
};

Breadcrumb.defaultProps = {
  sections: []
};

export default Breadcrumb;
