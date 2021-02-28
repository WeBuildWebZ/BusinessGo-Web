import PropTypes from 'prop-types';

const WindowNavbar = props => (
  <div className="windowNavbar">
    {props.title}
    <style jsx>
      {`
        .windowNavbar {
          width: 100%;
          height: 30px;
          background-color: lightgray;
          border-radius: inherit;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          text-align: center;
          user-select: none;
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
