import PropTypes from 'prop-types';

const Item = props => (
  <div className="item">
    {props.children}
    <style jsx>
      {`
        .item {
          width: fit-content;
          height: 100%;
          border-style: solid;
          border-width: 1px;
          background-color: #dcb3e1;
          ${props.last ? 'flex: 1;' : ''}
        }
      `}
    </style>
  </div>
);

Item.propTypes = {
  children: PropTypes.any.isRequired,
  last: PropTypes.bool
};

Item.defaultProps = {
  last: false
};

export default Item;
