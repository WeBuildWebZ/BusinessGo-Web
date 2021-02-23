import PropTypes from 'prop-types';

import Navbare from '../../components/navbar';
import Footer from '../../components/footer';

const Layout = ({ children }) => (
  <div>
    <Navbare />
    <div>{children}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired
};
export default Layout;
