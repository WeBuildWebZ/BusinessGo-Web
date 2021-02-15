import PropTypes from 'prop-types';

import Title from './Title';
import ButtonPanel from './ButtonPanel';

const Layout = ({ children }) => (
  <div className="layout">
    <Title />
    <ButtonPanel />
    {children}
    <style jsx>
      {`
        .layout {
          height: fit-content;
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
