import PropTypes from 'prop-types';

const DropdownButton = props => (
  <div className={`dropdownButton${props.open ? ' open' : ''}`} onClick={props.onClick}>
    <div className="title">{props.title}</div>
    <style jsx>
      {`
        .dropdownButton {
          display: flex;
          align-items: center;
          width: 100%;
          height: 50px;
          margin: 4px;
          font-weight: bold;
          background-image: linear-gradient(to top, #000000, #000000 50%, #3e3e3e 100%);
          box-shadow: 0 0 1px 1px #3e3e3e;
          border-radius: 20px;
          transition: 0.7s;
        }
        .dropdownButton.open {
          background-image: linear-gradient(to top, #d8d4d4, #d8d4d4 50%, #f0ecec 100%);
          color: #383434;
          border-style: solid;
          border-width: 5px;
          border-color: #ffffff;
          box-shadow: 0 0 1px 1px #ffffff;
          transition: 0.7s;
        }
        .title {
          margin-left: 21px;
        }
      `}
    </style>
  </div>
);

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default DropdownButton;
