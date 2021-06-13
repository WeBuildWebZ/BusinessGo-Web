import PropTypes from 'prop-types';

import Footer from '../Footer';

const Layout = props => (
  <>
    <div className="layout">
      {props.children}
      <style jsx global>
        {`
          html,
          body {
            background-color: #ece4ec;
          }
          .layout {
            overflow-x: hidden;
          }
        `}
      </style>
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.any
};

Layout.defaultProps = {
  children: ''
};

export default Layout;
