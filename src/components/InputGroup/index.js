import PropTypes from 'prop-types';

const InputGroup = ({ children }) => (
  <div className="inputGroup">
    {children}
    <style jsx>
      {`
        .inputGroup {
          width: 100%;
          margin: 20px 0 20px 0;
          padding: 10px;
          border-radius: 5px;
          box-shadow: 0 0 3px 1px rgba(128, 128, 128, 0.633);
        }
      `}
    </style>
  </div>
);

InputGroup.propTypes = {
  children: PropTypes.any.isRequired
};

export default InputGroup;
