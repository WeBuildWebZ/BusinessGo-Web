import PropTypes from 'prop-types';

const Options = props => {
  const handleChangeOption = option => {
    props.onOptionChanged(option);
  };

  return (
    <>
      <div
        className={`optionsOverlay${props.show ? '' : ' hidden'}`}
        onClick={() => handleChangeOption(props.selectedOption)}
      />
      <div className={`options${props.show ? '' : ' hidden'}`}>
        {props.options.map((option, i) => (
          <div key={i} className="option" onClick={() => handleChangeOption(option)}>
            {option}
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .optionsOverlay {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
          }
          .optionsOverlay.hidden {
            display: none;
          }
          .options {
            position: relative;
            margin-top: 1px;
            border-style: solid;
            border-width: 2px;
            border-radius: 5px;
            user-select: none;
            overflow: hidden;
            z-index: 1000;
            animation: optionsAppear linear 0.4s;
          }
          .options.hidden {
            display: none;
          }
          .option {
            text-align: center;
            z-index: 1000;
            cursor: pointer;
            transition: 0.4s;
          }
          .option:hover {
            transform: scale(1.1);
            background-color: #00000022;
          }
          .option:active {
            transform: scale(1.3);
            background-color: #00000033;
            transition: 0.1s;
          }
          @keyframes optionsAppear {
            0% {
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

Options.propTypes = {
  show: PropTypes.bool.isRequired,
  selectedOption: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOptionChanged: PropTypes.func
};

Options.defaultProps = {
  onOptionChanged: () => {}
};

export default Options;
