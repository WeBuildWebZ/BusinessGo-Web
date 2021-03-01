import PropTypes from 'prop-types';

const WindowNavbar = props => (
  <div className="windowNavbar">
    {props.title}
    <style jsx>
      {`
        .windowNavbar {
          width: 100%;
          height: 30px;
          background-color: lightskyblue;
          border-radius: inherit;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          text-align: center;
          user-select: none;
          box-shadow: 0 0 5px 1px lightblue;
        }
      `}
    </style>
  </div>
);

WindowNavbar.propTypes = {
  title: PropTypes.string
};

WindowNavbar.defaultProps = {
  title: ''
};

export default WindowNavbar;
