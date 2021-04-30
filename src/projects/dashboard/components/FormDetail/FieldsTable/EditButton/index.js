import PropTypes from 'prop-types';

const EditButton = props => (
  <i className="fas fa-edit" onClick={props.onClick}>
    <style jsx>
      {`
        .fa-edit {
          font-size: 28px;
          cursor: pointer;
          transition: 0.7s;
        }
        .fa-edit:hover {
          transform: scale(1.1);
        }
        .fa-edit:active {
          transform: scale(1.2);
          transition: 0.1s;
        }
      `}
    </style>
  </i>
);

EditButton.propTypes = {
  onClick: PropTypes.func
};

EditButton.defaultProps = {
  onClick: () => {}
};

export default EditButton;
