import PropTypes from 'prop-types';

const Layout = props => (
  <div className="layout">
    {props.children}
    <style jsx global>
      {`
        html,
        body {
          background-color: #281c5c;
        }
        .layout {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any
};

Layout.defaultProps = {
  children: ''
};

export default Layout;
