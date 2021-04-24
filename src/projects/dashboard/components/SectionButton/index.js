import PropTypes from 'prop-types';

const SectionButton = props => (
  <>
    <div className="sectionButton" onClick={props.onClick}>
      {props.text}
      <div className={`selectedLine${props.selected ? '' : ' unselected'}`} />
    </div>
    <style jsx>
      {`
        .sectionButton {
          position: relative;
          margin: 10px;
          padding: 7px;
          border-radius: 7px;
          background-color: whitesmoke;
          font-size: 11px;
          user-select: none;
          transition: 0.7s;
        }
        .sectionButton:hover {
          transform: scale(1.1);
        }
        .sectionButton:active {
          transform: scale(1.2);
          transition: 0.1s;
        }
        .selectedLine {
          position: absolute;
          transform: translate(-50%);
          left: 50%;
          top: 100%;
          width: 80%;
          height: 1px;
          background-color: #030303;
          box-shadow: 0 0 1px 1px #030303;
          border-radius: 50px;
          transition: 0.1s;
        }
        .selectedLine.unselected {
          width: 0;
          box-shadow: none;
        }
      `}
    </style>
  </>
);

SectionButton.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

SectionButton.defaultProps = {
  onClick: () => {},
  selected: false
};

export default SectionButton;
