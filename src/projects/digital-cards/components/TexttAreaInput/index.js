import PropTypes from 'prop-types';

const TextInput = props => (
  <div className="textAreaInput" style={props.style}>
    <div className="title">{props.name}:</div>
    <textarea className="input" style={{ borderColor: props.color }} />
    <style jsx>
      {`
        * {
          color: #686464;
        }
        .title {
          font-weight: bold;
        }
        .textAreaInput {
          width: 100%;
        }
        .input {
          width: 100%;
          height: 200px;
          border-style: none;
          border-bottom-style: solid;
          border-width: 1px;
          outline: none;
          padding: 7px;
          background-color: #f0ecec;
          transition: 0.1s;
          border-radius: 5px;
        }
        .input:focus {
          border-width: 2px;
        }
      `}
    </style>
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};

TextInput.defaultProps = {
  name: '',
  color: '',
  style: {}
};

export default TextInput;
