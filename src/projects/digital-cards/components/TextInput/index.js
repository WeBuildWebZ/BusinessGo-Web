import PropTypes from 'prop-types';

const Agenda = props => (
  <div className="textInput" style={props.style}>
    <div className="title">{props.name}:</div>
    <input type="text" className="input" style={{ borderColor: props.color }} />
    <style jsx>
      {`
        * {
          color: #686464;
        }
        .title {
          font-weight: bold;
        }
        .textInput {
          width: 100%;
        }
        .input {
          width: 100%;
          border-style: none;
          border-bottom-style: solid;
          border-width: 1px;
          outline: none;
          padding: 7px;
          transition: 0.1s;
        }
        .input:focus {
          border-width: 2px;
          border-radius: 5px;
        }
      `}
    </style>
  </div>
);

Agenda.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object
};

Agenda.defaultProps = {
  name: '',
  color: '',
  style: {}
};

export default Agenda;
